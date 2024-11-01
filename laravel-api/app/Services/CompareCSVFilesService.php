<?php

namespace App\Services;

use Illuminate\Http\Request;
use League\Csv\Reader;

class CompareCSVFilesService
{
    public function execute(Request $request)
    {
        $oldCsv = $this->readCsv($request->file('oldCsv'));
        $updatedCsv = $this->readCsv($request->file('updatedCsv'));

        $explodedHeader = explode(';', key($updatedCsv[0]));

        $header = array_filter($explodedHeader);

        [
            'identical' => $identical,
            'updated' => $updated,
            'new' => $new
        ] = $this->compareCSVs($oldCsv, $updatedCsv);

        return [
            'header' => $header,
            'identical' => $identical,
            'updated' => $updated,
            'new' => $new
        ];
    }

    private function compareCSVs($oldCsv, $updatedCsv)
    {
        $identical = [];
        $updated = [];
        $new = [];

        foreach ($oldCsv as $key => $row) {
            if (isset($updatedCsv[$key])) {
                if ($oldCsv[$key] === $updatedCsv[$key]) {
                    $identical[] = [
                        'old' => $this->getRowValues($row)
                    ];
                } elseif ($oldCsv[$key] != $updatedCsv[$key]) {
                    $updated[] = [
                        'old' => $this->getRowValues($row),
                        'new' => $this->getRowValues($updatedCsv[$key])
                    ];
                }
            }
        }

        // Processar as linhas adicionais no CSV Atualizado que não estão no mais antigo
        foreach ($updatedCsv as $key => $row) {
            if (!isset($oldCsv[$key])) {
                $new[]['new'] = $this->getRowValues($row);
            }
        }

        return [
            'identical' => $identical,
            'updated' => $updated,
            'new' => $new
        ];
    }

    private function getRowValues($row)
    {
        $result = [];
        foreach ($row as $keyString => $valueString) {
            $result = explode(";", $valueString);
        }

        return $result;
    }

    private function readCsv($file)
    {
        $csv = Reader::createFromPath($file->getRealPath(), 'r');
        $csv->setHeaderOffset(0); // Se o CSV tem cabeçalho, ele será ignorado nesta comparação

        // Obter todos os registros em um array associativo
        $records = [];
        foreach ($csv->getRecords() as $record) {
            $records[] = $record;
        }

        return $records;
    }
}
