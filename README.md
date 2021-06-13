# Hashtaag Assignment

## Before starting the project

    * Update the mongoDB URL: `./models/index.js`

## To run the project

    1. cd to project directory.
    2. npm install
    3. By default, application is launched@3200 port. To modify, update the ./app.js file.

## Features

* Have implemented searching based on State, District and town
URL For searched are
    1. Town Search
        http://localhost:3200/api/cities/town?id=Phule
    2.State Search
        http://localhost:3200/api/cities/state?id=Raj
    3.District Search
        http://localhost:3200/api/cities/district?id=Jaip
* On initial application start, if database is empty, then data migration is initiated, inserting data records to DB(Data is taken from the input file given by you).
* Implemented ORM Mongoose for data modeling in the BackEnd.

## Table Schema
    state: String,
    stateCode:Number,
    district :{
        name: String,
        districtCode: Number,
        city :{
            town:String,
            urbanStatus: String,
        }
    }

## Technology

* Express
* mongoose 5.7

Please feel free to contact me for any queries.

Anand Biradar
