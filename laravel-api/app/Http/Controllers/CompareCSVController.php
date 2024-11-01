<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\CompareCSVFilesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompareCSVController extends Controller
{
    public function __construct(private CompareCSVFilesService $compareCSVFilesService) {}

    public function store(Request $request): JsonResponse
    {
        $result = $this->compareCSVFilesService->execute($request);

        return response()->json($result);
    }
}
