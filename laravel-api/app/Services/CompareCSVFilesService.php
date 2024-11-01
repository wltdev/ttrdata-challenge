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

        $identifcatorIndex = array_search('cnpj', $header);
        // $sortByIndex = array_search('balance_date', $header);

        $oldCsvValuesArray = $this->getCSVValuesAsArray($oldCsv);
        $updatedCsvValuesArray = $this->getCSVValuesAsArray($updatedCsv);


        [
            'identical' => $identical,
            'updated' => $updated,
            'new' => $new
        ] = $this->compareCSVs($oldCsvValuesArray, $updatedCsvValuesArray, $identifcatorIndex);

        return [
            'header' => $header,
            'identical' => $identical,
            'updated' => $updated,
            'new' => $new
        ];
    }

    private function getCSVValuesAsArray($csv)
    {
        $result = [];
        foreach ($csv as $key => $row) {
            $result[] = $this->getRowValues($row);
        }
        return $result;
    }

    private function compareCSVs($oldCsvValuesArray, $updatedCsvValuesArray, $identifcatorIndex = 0)
    {
        $notEquals = [];
        $identical = [];
        $updated = [];
        $new = [];

        foreach ($updatedCsvValuesArray as $key => $row) {
            if (!isset($oldCsvValuesArray[$key])) {
                $new[]['new'] = $row;
                continue;
            }
        }

        foreach ($oldCsvValuesArray as $key => $row) {
            if (!isset($updatedCsvValuesArray[$key])) {
                continue;
            }

            if ($row === $updatedCsvValuesArray[$key]) {
                $identical[] = [
                    'old' => $row
                ];
            } else {
                $updated[] = [
                    'old' => $row,
                    'new' => $updatedCsvValuesArray[$key]
                ];
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
