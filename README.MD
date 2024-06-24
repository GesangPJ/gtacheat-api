# GTA CHEAT  API

A REST API version of GTACHEATDB.

Using ExpressJS and MongoDB, JSON version of the cheat available in repo : [GTACHEATDB](https://github.com/GesangPJ/gtacheatdb)

## API URLS

- `/api/gta-sa` : API to get GTA : SAN ANDREAS Cheat Code.
- `/api/gta-vc` : API to get GTA : Vice City Cheat Code.
- `/api/gta-3`  : API to get GTA : III Cheat Code.
- `/api/gta-4`  : API to get GTA : IV Cheat Code.
- `/api/gta-5`  : API to get GTA : V Cheat Code.

## RESPONSE

Below is the response body of the API :

- `id`      : A number list of the cheat of each game.
- `details` : A description of the cheat codes.
- `code`    : A Cheat code for PC Platform.
- `pscode`  : A Cheat code for PlayStation Platform.
- `xboxcode` : A Cheat code for XBOX Platform.
- `phonecode` : A Cheat code available as phone number for GTA IV and GTA V, work for All Platform in both games.
- `phrase`   : A Phrase cheat code that work only for PC Platform.
- `switchcode` : A Cheat code for Nintendo Switch Platform.

### CONTAINER IMAGE VERSION

Container image version is available as Package in this repository.
Use the `docker-compose.yml` to build the container.

### Disclaimer

This repository provides information about available cheats in various Grand Theft Auto (GTA) games.
Grand Theft Auto is a trademark and copyright of Rockstar Games. Please be aware that using cheats may disable or lock game achievements and affect your gaming experience.

**XBOX** and Xbox-related trademarks are the property of Microsoft Corporation.

**PlayStaion** and PlayStation-related trademarks are the property of Sony Interactive Entertainment Inc.

**NINTENDO SWITCH** and Nintendo-related trademarks are the property of Nintendo Co., Ltd.

This source code is not affiliated with, endorsed, sponsored, or specifically approved by Rockstar Games, Sony, Nintendo or Microsoft.

All trademarks and copyrights are the property of their respective owners.
