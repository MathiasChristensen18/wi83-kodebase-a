# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2018-07-24
### Added
- Support for .env configuration
- environmental variables file for dev: `devvars.env`

### Changed
- NPM dev script changed to utilize dotenv
- Database configuration now uses dotenv variables
- Port is now set through dotenv variables

## [0.1.1] - 2018-07-03
### Chnaged
- Corrected a typo in the classname of siteHeader

## [0.1.0] - 2018-06-26
### Added
- Basic folder structure
- Packages
- Fonts
- CSS
- cssLoader, a JS function for deferred loading of stylesheets
- Express server logic with ll intended libraries imported and a few basic routes defined
- This changelog