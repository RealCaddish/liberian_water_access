# liberian_water_access


## Table of Contents 
1. Introduction
2. Workflow 
3. Webmapping
4. Conclusion
   


This project aims to map out internal water access in Liberia from data collected by the Liberian Water Point Data provided by the Akvo Foundation, a not-for-profit foundation that creates open source internet and mobile software sensors working towards collaborative development efforts in the fields of water, sanitation, agriculture, health, energy and other fields around the world. This particular dataset seeks to map out access points to clean drinking water throughout Liberia and provide information about drinking pump status, provider, and other useful information. 

The project will utilize npm scripts through Node.js to configure analysis on the front and backends. The workflow process will be demonstrated in Chapter 2, followed by a webmapping process that consists of Chapter 3. Data collected for this project is outlined here:

1. Liberia Water Point Data - https://data.humdata.org/dataset/liberia-water-point-data

2. Soveriegnty/Provinces/Urban Areas Shapefiles - https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/

This project seeks to produce geoprocessing analysis solely through npm packages - particularly turf.js. 

## Chapter 2: Workflow 

After downloading all of our necessary files, extracting them into subdirectories within the repo, and some initial readme commits, let's begin by utilizing mapshaper to trim down our vector shapefiles for Liberia including the sovereignty boundary, provinces, and urban areas. We'll work primarily through the command line to achieve these goals. Afterwards, we'll move into the Liberian Water Point dataset to do some processing on the front and backends in subtopics within this chapter. 
 
 ### Chapter 2.2 - Mapshaper Processing. 

 Let's start from the outside in. First, I'll begin by getting info about the sovereignty, provinces, and urban areas shapefiles downloaded from Natural Earth:

 ```
 $ mapshaper sovereignty.shp -info
 ```
```
$ mapshaper provinces.shp -info
```
```
$ mapshaper urban_areas.shp -info
```

Ok great!

Now we can start to see what fields we'd like to keep as well as begin to filter features and other things to trim down our boundary files. Let's start with the sovereignty of Liberia:

```

```
