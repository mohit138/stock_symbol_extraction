# stock_symbol_extraction

## Intro
This project is built to convert the NSE csv data to a desired format json object.

## Source
The data is obtained from - https://upstox.com/developer/api-documentation/instruments


## Scope
This file contains a lot of data not relevant. So we filter out stock scripts from the data. I extract the name, instrument-key and trading-symbol for all the stocks. 

The file obtained is used to render possible stock lists in the UI for *stock_analysis_ui_layer* project.