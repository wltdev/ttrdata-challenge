<?php

use App\Http\Controllers\CompareCSVController;
use Illuminate\Support\Facades\Route;

Route::post('compare-csv-files', [CompareCSVController::class, 'store'])->name('compare-csv-files');
