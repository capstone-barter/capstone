# Optimal Location Identification for Solar Panel Installation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/workflow/status/mistermakc/solar-energy-spatial-prediction/CI)](https://github.com/mistermakc/solar-energy-spatial-prediction/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/mistermakc/solar-energy-spatial-prediction)](https://github.com/mistermakc/solar-energy-spatial-prediction/blob/main/LICENSE)
[![Version](https://img.shields.io/github/v/release/mistermakc/solar-energy-spatial-prediction)](https://github.com/mistermakc/solar-energy-spatial-prediction/releases)

This project aims to develop a system for identifying optimal locations for the installation of new solar panel facilities based on electricity consumption data linked to cadastral references. The system will leverage the Barter tool, which provides cadastral data related to a geometric area defined over the Spanish geography.

![barter](https://github.com/mistermakc/solar-energy-spatial-prediction/assets/60471340/d905f112-55be-4b53-949d-be9fca346c4e)


## Objective

The objective of this project is to predict the optimal locations for installing solar panel plants on the roofs of buildings in the city of Malaga. The energy generated by these solar panels can only be sold within a 1km radius of the installation. The project aligns with the company's goal of making solar energy accessible to everyone, including locations that are usually hard to reach.

## Scope

The scope of the project includes the following aspects:

- Photovoltaic systems
- Commercialization of solar energy
- Mobility aspects related to solar energy usage

## Numbers

The project involves the following numbers:

- 68 photovoltaic installations with 5k kW output
- 1,045 ultra-fast chargers in Spain

## General Problem

The general problem to address in this project is the legalization of solar panel installation plans and sharing energy with consumers within a limited radius around each installation.

## Challenges

The project involves the following challenges:

1. Developing a system for identifying optimal locations for new solar panel facilities.
2. Analyzing the area to locate target customers, considering the legalization issues.
3. Restricting the sale of energy to customers within a 1km radius (2km total) around each installation.

## Data

The project requires the following data:

- CUPS (Código Unificado de Punto de Suministro) data
- Cadastral data
- Weather data
- Solar radiation data
- Electricity consumption data
- Additional enriching data

## Requirements

The project has the following requirements:

- Access to SIPS (Sistema de Información del Punto de Suministro) via API.
- Download and storage of SIPS data.
- Ensuring compatibility and integrity of the obtained data.
- Cross-referencing consumption data with cadastral data.
- Estimation of monthly electricity consumption.

## Technology Proposal

The following technologies are proposed for the project:

- Python programming language
- REST API for data retrieval and processing
- GitHub for version control and collaboration

## Knowledge Development

The project will contribute to the development of the following knowledge and skills:

- Geospatial analysis
- Data processing and manipulation
- API integration and usage
- Teamwork and collaboration
- Project management

## Code Overview

The provided code demonstrates a part of the implementation for downloading and processing the required data. It involves the use of the PySpark library and Azure services. The code is split into two sections:

1. Reading and filtering electricity consumption data for the city of Malaga.
2. Authenticating and downloading data from the CNMC API to Azure Data Lake.

Please refer to the code comments for more details on the implementation.

## Validation Process

The provided code is part of the validation process for the project. Financial validation and further steps will be performed afterwards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
[![License](https://img.shields.io/github/license/mistermakc/solar-energy-spatial-prediction)](https://github.com/mistermakc/solar-energy-spatial-prediction/blob/main/LICENSE)

