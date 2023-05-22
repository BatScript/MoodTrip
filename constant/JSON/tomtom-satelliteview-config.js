const satelliteConfig = {
  "version": 8,
  "name": "satellitenew",
  "metadata": {},
  "sources": {
    "poiTiles": {
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/map/2/tile/poi/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://b.api.tomtom.com/map/2/tile/poi/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://c.api.tomtom.com/map/2/tile/poi/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://d.api.tomtom.com/map/2/tile/poi/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR"
      ],
      "type": "vector"
    },
    "satellite": {
      "maxzoom": 19,
      "minzoom": 0,
      "tileSize": 256,
      "tiles": [
        "https://a.api.tomtom.com/map/1/tile/sat/main/{z}/{x}/{y}.jpg?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://b.api.tomtom.com/map/1/tile/sat/main/{z}/{x}/{y}.jpg?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://c.api.tomtom.com/map/1/tile/sat/main/{z}/{x}/{y}.jpg?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://d.api.tomtom.com/map/1/tile/sat/main/{z}/{x}/{y}.jpg?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR"
      ],
      "type": "raster"
    },
    "vectorTiles": {
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/map/2/tile/basic/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://b.api.tomtom.com/map/2/tile/basic/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://c.api.tomtom.com/map/2/tile/basic/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
        "https://d.api.tomtom.com/map/2/tile/basic/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR"
      ],
      "type": "vector"
    },
    "vectorTilesFlow": {
      "maxzoom": 22,
      "minzoom": 0,
      "tiles": [
        "https://a.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR&tags=[road_category,road_subcategory,traffic_level,left_hand_traffic,road_closure]",
        "https://b.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR&tags=[road_category,road_subcategory,traffic_level,left_hand_traffic,road_closure]",
        "https://c.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR&tags=[road_category,road_subcategory,traffic_level,left_hand_traffic,road_closure]",
        "https://d.api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR&tags=[road_category,road_subcategory,traffic_level,left_hand_traffic,road_closure]"
      ],
      "type": "vector"
    }
  },
  "sprite": "https://api.tomtom.com/style/1/sprite/23.1.0-11/sprite?map=2%2Fbasic_street-satellite&poi=2%2Fpoi_satellite&traffic_flow=2%2Fflow_relative-light&key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
  "glyphs": "https://api.tomtom.com/style/1/glyph/23.1.0-11/{fontstack}/{range}.pbf?key=A37bpUxQy1BKRjbfkBcsCmqUlSHa1EHR",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "metadata": {"group": "background"},
      "paint": {
        "background-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          6,
          "hsl(214, 15%, 20%)",
          10,
          "hsl(214, 15%, 19%)",
          16,
          "hsl(214, 15%, 18%)"
        ]
      }
    },
    {
      "id": "Imagery",
      "type": "raster",
      "metadata": {"group": "satellite"},
      "source": "satellite",
      "layerIndex": 0,
      "layerIndexString": "bottom"
    },
    {
      "id": "Tunnel - Railway outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": ["all", ["==", "category", "railway"], ["==", "tunnel", true]],
      "layout": {"line-cap": "butt", "line-join": "bevel"},
      "paint": {
        "line-color": "hsla(210, 15%, 85%, 1)",
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          13,
          0.5,
          14.5,
          0
        ],
        "line-width": {"stops": [[13, 0.5], [16, 0.75], [19, 9]]}
      }
    },
    {
      "id": "Tunnel - Railway fill",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 16,
      "filter": ["all", ["==", "category", "railway"], ["==", "tunnel", true]],
      "layout": {"line-cap": "butt", "line-join": "bevel"},
      "paint": {
        "line-color": "hsla(210, 10%, 92%, 1)",
        "line-opacity": {"stops": [[16, 0], [17, 0]]},
        "line-width": {"stops": [[16, 0], [19, 8]]}
      }
    },
    {
      "id": "Tunnel - Railway dash",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": ["all", ["==", "category", "railway"], ["==", "tunnel", true]],
      "layout": {"line-cap": "butt", "line-join": "bevel"},
      "paint": {
        "line-color": "hsl(210, 15%, 85%)",
        "line-dasharray": [0.05, 0.4],
        "line-opacity": {"stops": [[13, 0.5], [14.5, 0]]},
        "line-width": {"stops": [[13, 0], [16, 3], [19, 12]]}
      }
    },
    {
      "id": "Tunnel - Road outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", ["get", "tunnel"], true],
        ["match", ["get", "category"], ["path", "railway"], false, true]
      ],
      "layout": {"line-cap": "butt", "line-join": "round"},
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(45, 0%, 20%, 1)",
            ["trunk", "primary"],
            "hsla(45, 0%, 25%, 1)",
            ["secondary", "tertiary"],
            "hsla(215, 0%, 25%,1)",
            "hsla(0, 0%, 0%, 0)"
          ],
          11,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(45, 0%, 30%, 0.75)",
            "trunk",
            "hsla(45, 0%, 35%, 0.75)",
            "primary",
            "hsla(47, 0%, 35%, 0.75)",
            ["secondary", "tertiary"],
            "hsla(215, 0%, 25%, 0.5)",
            "hsla(0, 0%, 0%, 0)"
          ]
        ],
        "line-dasharray": {"stops": [[12, [1, 1]], [14, [2, 2]]]},
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          15.5,
          0
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, ["trunk"], 0.5, 0],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            2,
            ["trunk"],
            1.75,
            ["primary"],
            1.5,
            ["secondary"],
            1.35,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            3,
            ["trunk"],
            2.75,
            ["primary"],
            2.25,
            ["secondary"],
            2,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 1, 0.75],
            0
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            20,
            ["trunk"],
            18,
            ["primary"],
            15,
            ["secondary"],
            15,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 14, 13],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 11, 9],
            8
          ]
        ]
      }
    },
    {
      "id": "Tunnel - Road under construction",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", ["get", "tunnel"], true],
        ["==", ["get", "under_construction"], true],
        ["match", ["get", "category"], ["path", "railway"], false, true]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          7,
          "trunk",
          6,
          "primary",
          5,
          "secondary",
          4,
          "tertiary",
          3,
          "street",
          2,
          1
        ]
      },
      "paint": {
        "line-color": "hsla(206, 8%, 50%,0.75)",
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          13,
          0.9,
          15.5,
          0
        ],
        "line-pattern": "under-construction",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, ["trunk"], 0.5, 0],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            2,
            ["trunk"],
            1.75,
            ["primary"],
            1.5,
            ["secondary"],
            1.35,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            3,
            ["trunk"],
            2.75,
            ["primary"],
            2.25,
            ["secondary"],
            2,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 1, 0.75],
            0
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            20,
            ["trunk"],
            18,
            ["primary"],
            17,
            ["secondary"],
            15,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 14, 13],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 11, 9],
            8
          ]
        ]
      }
    },
    {
      "id": "Tunnel - Road line",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", ["get", "tunnel"], true],
        ["!=", ["get", "under_construction"], true],
        ["match", ["get", "category"], ["path", "railway"], false, true]
      ],
      "layout": {
        "line-cap": "butt",
        "line-join": "round",
        "line-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          7,
          "trunk",
          6,
          "primary",
          5,
          "secondary",
          4,
          "tertiary",
          3,
          "street",
          2,
          1
        ]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(52, 80%, 65%, 1)",
            "trunk",
            "hsla(52, 80%, 65%, 1)",
            "primary",
            "hsla(47, 80%, 85%, 1)",
            ["secondary", "tertiary"],
            "hsla(0, 0%, 92%, 1)",
            "hsla(0, 0%, 0%, 0)"
          ],
          11,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(47, 100%, 70%, 1)",
            "trunk",
            "hsla(47, 100%, 75%, 1)",
            "primary",
            "hsla(47, 100%, 80%, 1)",
            ["secondary", "tertiary"],
            "hsla(0, 0%, 92%, 1)",
            "hsla(0, 0%, 0%, 0)"
          ],
          13,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(47, 40%, 70%, 1)",
            "trunk",
            "hsla(47, 40%, 75%, 1)",
            "primary",
            "hsla(47, 40%, 80%, 1)",
            ["secondary", "tertiary"],
            "hsla(0, 0%, 82%, 1)",
            "hsla(0, 0%, 0%, 0)"
          ]
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          13,
          0.9,
          15.5,
          0
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, ["trunk"], 0.5, 0],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            2,
            ["trunk"],
            1.75,
            ["primary"],
            1.5,
            ["secondary"],
            1.35,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            3,
            ["trunk"],
            2.75,
            ["primary"],
            2.25,
            ["secondary"],
            2,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 1, 0.75],
            0
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            20,
            ["trunk"],
            18,
            ["primary"],
            17,
            ["secondary"],
            15,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 14, 13],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 11, 9],
            8
          ]
        ]
      }
    },
    {
      "id": "Surface - Ferry",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "category", "ferry"],
        ["==", "subcategory", "boat"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(200, 25%, 50%)",
        "line-dasharray": {"stops": [[9, [1, 2]], [13, [2, 3]]]},
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          10,
          0.5,
          15,
          1,
          18,
          0.5
        ],
        "line-width": {"stops": [[13, 1], [16, 2]]}
      }
    },
    {
      "id": "Surface - Path",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 14,
      "filter": ["all", ["match", ["get", "category"], ["path"], true, false]],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsla(215, 5%, 75%, 1)",
        "line-dasharray": {"stops": [[13, [0.5, 2]], [16, [0, 2]]]},
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          15,
          0.9,
          16,
          0.2
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          13,
          0.25,
          19,
          4
        ]
      }
    },
    {
      "id": "Surface - Minor road outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 14,
      "filter": [
        "all",
        ["match", ["get", "category"], ["minor"], true, false],
        ["!=", ["get", "tunnel"], true]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          "hsla(215, 5%, 20%, 1)",
          12,
          "hsla(215, 5%, 15%, 0.55)"
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          0,
          13,
          0,
          19,
          8
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          [
            "match",
            ["get", "subcategory"],
            ["pedestrian"],
            1,
            ["parking"],
            0.5,
            1
          ],
          15,
          [
            "match",
            ["get", "subcategory"],
            ["pedestrian"],
            0,
            ["parking"],
            0,
            0
          ]
        ],
        "line-width": {"stops": [[13, 0.25], [19, 1]]}
      }
    },
    {
      "id": "Surface - Street outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["match", ["get", "category"], ["street"], true, false],
        ["any", ["!=", ["get", "bridge"], true], ["<", ["zoom"], 13]],
        ["!=", ["get", "tunnel"], true]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          "hsla(215, 5%, 20%, 1)",
          12,
          "hsla(215, 5%, 15%, 0.55)"
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
          13,
          ["match", ["get", "subcategory"], ["local"], 1, 0.75],
          19,
          ["match", ["get", "subcategory"], ["local"], 11, 9]
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          15.5,
          0
        ],
        "line-width": {"stops": [[9, 0], [13, 0.375], [19, 1.25]]}
      }
    },
    {
      "id": "Surface - Tertiary road outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "all",
        ["match", ["get", "category"], ["tertiary"], true, false],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          "hsla(215, 8%, 30%, 1)",
          13,
          "hsla(215, 8%, 15%, 0.55)"
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
          13,
          ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
          19,
          ["match", ["get", "subcategory"], ["connecting"], 14, 13]
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          16,
          0
        ],
        "line-width": {"stops": [[9, 0.5], [13, 0.75], [19, 1.5]]}
      }
    },
    {
      "id": "Surface - Secondary road outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        ["match", ["get", "category"], ["secondary"], true, false],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          "hsla(215, 8%, 30%, 1)",
          13,
          "hsla(215, 8%, 15%, 0.55)"
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          0,
          9,
          1.35,
          13,
          2,
          19,
          15
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          16,
          0
        ],
        "line-width": {"stops": [[9, 0.5], [13, 0.75], [19, 1.5]]}
      }
    },
    {
      "id": "Surface - Minor road",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 14,
      "filter": [
        "all",
        ["match", ["get", "category"], ["minor"], true, false],
        ["!=", ["get", "tunnel"], true]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": [
          "match",
          ["get", "subcategory"],
          "pedestrian",
          "hsla(225, 25%, 85%, 1)",
          "hsla(215, 5%, 80%, 1)"
        ],
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          ["match", ["get", "subcategory"], ["pedestrian"], 0.5, 0.6],
          15,
          [
            "match",
            ["get", "subcategory"],
            ["pedestrian", "parking"],
            0.35,
            0.9
          ],
          16,
          [
            "match",
            ["get", "subcategory"],
            ["pedestrian"],
            0,
            ["parking"],
            0,
            0.25
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          0,
          13,
          0,
          19,
          8
        ]
      }
    },
    {
      "id": "Surface - Restricted road dash",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 15,
      "filter": [
        "all",
        ["==", ["get", "category"], "minor"],
        ["==", ["get", "subcategory"], "restricted"],
        ["!=", ["get", "tunnel"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": "hsl(225, 15%, 90%)",
        "line-dasharray": [2, 1.5],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          13,
          0,
          19,
          4
        ]
      }
    },
    {
      "id": "Surface - Street",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 13.5,
      "filter": [
        "all",
        ["match", ["get", "category"], ["street"], true, false],
        ["!=", ["get", "tunnel"], true],
        ["!=", ["get", "under_construction"], true]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "hsla(215, 5%, 70%, 1)",
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13,
          0.7,
          15,
          0.9,
          16,
          0.25
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
          13,
          ["match", ["get", "subcategory"], ["local"], 1, 0.75],
          19,
          ["match", ["get", "subcategory"], ["local"], 11, 9]
        ]
      }
    },
    {
      "id": "Surface - Primary road outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 7,
      "filter": [
        "all",
        ["match", ["get", "category"], ["primary"], true, false],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 9, "round"],
        "line-join": ["step", ["zoom"], "miter", 9, "round"]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          "hsla(47, 8%, 20%, 1)",
          11,
          "hsla(47, 8%, 35%, 0.5)"
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          0,
          9,
          1.5,
          13,
          2.25,
          19,
          17
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14.5,
          1,
          16,
          0
        ],
        "line-width": {"stops": [[5, 0], [9, 0.5], [13, 1], [19, 1.5]]}
      }
    },
    {
      "id": "Surface - Motorway & Trunk outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 12,
      "filter": [
        "all",
        ["match", ["get", "category"], ["motorway", "trunk"], true, false],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 9, "round"],
        "line-join": ["step", ["zoom"], "miter", 9, "round"]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(45, 8%, 15%, 1)",
            "trunk",
            "hsla(45, 8%, 20%, 1)",
            "hsla(0, 0%, 0%, 0)"
          ],
          9,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(45, 8%, 25%, 0.5)",
            "trunk",
            "hsla(45, 8%, 30%, 0.5)",
            "hsla(0, 0%, 0%, 0)"
          ]
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, 0.5],
          9,
          ["match", ["get", "category"], ["motorway"], 2, 1.75],
          13,
          ["match", ["get", "category"], ["motorway"], 3, 2.75],
          19,
          ["match", ["get", "category"], ["motorway"], 20, 18]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 14.5, 1, 16, 0],
        "line-width": {"stops": [[5, 0], [9, 0.5], [13, 1], [19, 1.5]]}
      }
    },
    {
      "id": "Surface - Road under construction",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", ["get", "under_construction"], true],
        [
          "match",
          ["get", "category"],
          ["railway", "minor", "path"],
          false,
          true
        ],
        [
          "any",
          ["match", ["get", "category"], ["tertiary"], false, true],
          [">=", ["zoom"], 10]
        ],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          8,
          "trunk",
          7,
          "primary",
          6,
          "secondary",
          5,
          "tertiary",
          4,
          "street",
          3,
          "minor",
          2,
          1
        ]
      },
      "paint": {
        "line-color": "hsla(206, 8%, 50%,0.75)",
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          1,
          15,
          0.9,
          16,
          0.25
        ],
        "line-pattern": "under-construction",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, ["trunk"], 0.5, 0],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            2,
            ["trunk"],
            1.75,
            ["primary"],
            1.5,
            ["secondary"],
            1.35,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            3,
            ["trunk"],
            2.75,
            ["primary"],
            2.25,
            ["secondary"],
            2,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 1, 0.75],
            0
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            20,
            ["trunk"],
            18,
            ["primary"],
            17,
            ["secondary"],
            15,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 14, 13],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 11, 9],
            8
          ]
        ]
      }
    },
    {
      "id": "Surface - Tertiary road",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "all",
        ["match", ["get", "category"], ["tertiary"], true, false],
        ["!=", ["get", "under_construction"], true],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          11,
          "hsla(215, 2%, 70%, 1)",
          13,
          "hsla(215, 8%, 80%, 1)"
        ],
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15.5,
          0.9,
          16,
          0.25
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          9,
          ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
          13,
          ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
          19,
          ["match", ["get", "subcategory"], ["connecting"], 14, 13]
        ]
      }
    },
    {
      "id": "Surface - Secondary road",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 8,
      "filter": [
        "all",
        ["match", ["get", "category"], ["secondary"], true, false],
        ["!=", ["get", "under_construction"], true],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          11,
          "hsla(215, 2%, 70%, 1)",
          13,
          "hsla(215, 8%, 80%, 1)"
        ],
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          15.5,
          0.9,
          16,
          0.25
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          0,
          9,
          1.35,
          13,
          1.75,
          19,
          15
        ]
      }
    },
    {
      "id": "Surface - Primary small scale outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "maxzoom": 13,
      "filter": [
        "all",
        ["in", "category", "primary"],
        ["!=", "tunnel", true],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 9, "round"],
        "line-join": ["step", ["zoom"], "miter", 9, "round"]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            "hsla(45, 8%, 15%, 1)",
            ["trunk"],
            "hsla(45, 8%, 20%, 1)",
            ["primary"],
            "hsla(45, 8%, 20%, 1)",
            ["secondary", "tertiary"],
            "hsla(215, 5%, 20%, 1)",
            "hsla(215, 5%, 25%, 1)"
          ],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            "hsla(45, 8%, 25%, 0.5)",
            ["trunk"],
            "hsla(45, 8%, 30%, 0.5)",
            ["primary"],
            "hsla(47, 8%, 35%, 0.5)",
            ["secondary", "tertiary"],
            "hsla(215, 5%, 30%, 0.5)",
            "hsla(215, 5%, 25%, 0.5)"
          ]
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, ["trunk"], 0.5, 0],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            2,
            ["trunk"],
            1.75,
            ["primary"],
            1.5,
            ["secondary"],
            1.35,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            3,
            ["trunk"],
            2.75,
            ["primary"],
            2.25,
            ["secondary"],
            2,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 1, 0.75],
            0
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            20,
            ["trunk"],
            18,
            ["primary"],
            17,
            ["secondary"],
            15,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 14, 13],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 11, 9],
            8
          ]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 14.5, 1, 16, 0],
        "line-width": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          0,
          9,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            0.5,
            ["secondary", "tertiary"],
            0.5,
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            1,
            ["secondary", "tertiary"],
            0.75,
            ["street"],
            0.375,
            0.25
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary", "tertiary"],
            1.5,
            ["street"],
            1.25,
            1
          ]
        ]
      }
    },
    {
      "id": "Surface - Primary road",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 7,
      "filter": [
        "all",
        ["match", ["get", "category"], ["primary"], true, false],
        ["!=", ["get", "under_construction"], true],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 9, "round"],
        "line-join": ["step", ["zoom"], "miter", 9, "round"]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          "hsla(50, 80%, 70%, 1)",
          11,
          "hsla(47, 85%, 80%, 1)",
          15,
          "hsla(47, 90%, 80%, 0.85)"
        ],
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13.5,
          1,
          15.5,
          0.9,
          16,
          0.25
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          0,
          9,
          1.5,
          13,
          2.25,
          19,
          17
        ]
      }
    },
    {
      "id": "Surface - Motorway small scale outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "maxzoom": 13,
      "filter": [
        "all",
        ["in", "category", "motorway", "trunk"],
        ["!=", "tunnel", true],
        ["!=", "under_construction", true]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 9, "round"],
        "line-join": ["step", ["zoom"], "miter", 9, "round"]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            "hsla(45, 8%, 15%, 1)",
            ["trunk"],
            "hsla(45, 8%, 20%, 1)",
            ["primary"],
            "hsla(47, 8%, 20%, 1)",
            ["secondary", "tertiary"],
            "hsla(215, 5%, 20%, 1)",
            "hsla(215, 5%, 25%, 1)"
          ],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            "hsla(45, 8%, 25%, 0.5)",
            ["trunk"],
            "hsla(45, 8%, 30%, 0.5)",
            ["primary"],
            "hsla(47, 8%, 35%, 0.5)",
            ["secondary", "tertiary"],
            "hsla(215, 5%, 30%, 0.5)",
            "hsla(215, 5%, 25%, 0.5)"
          ]
        ],
        "line-gap-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, ["trunk"], 0.5, 0],
          9,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            2,
            ["trunk"],
            1.75,
            ["primary"],
            1.5,
            ["secondary"],
            1.35,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.25, 1],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 0.75, 0.75],
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            3,
            ["trunk"],
            2.75,
            ["primary"],
            2.25,
            ["secondary"],
            2,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 1.75, 1.5],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 1, 0.75],
            0
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway"],
            20,
            ["trunk"],
            18,
            ["primary"],
            17,
            ["secondary"],
            15,
            ["tertiary"],
            ["match", ["get", "subcategory"], ["connecting"], 14, 13],
            ["street"],
            ["match", ["get", "subcategory"], ["local"], 11, 9],
            8
          ]
        ],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 14.5, 1, 16, 0],
        "line-width": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          0,
          9,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            0.5,
            ["secondary", "tertiary"],
            0.5,
            0
          ],
          13,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            1,
            ["secondary", "tertiary"],
            0.75,
            ["street"],
            0.375,
            0.25
          ],
          19,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary", "tertiary"],
            1.5,
            ["street"],
            1.25,
            1
          ]
        ]
      }
    },
    {
      "id": "Surface - Motorway & Trunk",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 5,
      "filter": [
        "all",
        ["match", ["get", "category"], ["motorway", "trunk"], true, false],
        ["!=", ["get", "under_construction"], true],
        ["any", ["!=", ["get", "tunnel"], true], ["<", ["zoom"], 12]]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 9, "round"],
        "line-join": ["step", ["zoom"], "miter", 9, "round"],
        "line-sort-key": [
          "match",
          ["get", "category"],
          "trunk",
          1,
          "motorway",
          2,
          0
        ]
      },
      "paint": {
        "line-color": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          5,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(50, 80%, 60%, 1)",
            "trunk",
            "hsla(50, 80%, 65%, 1)",
            "hsla(0, 0%, 0%, 0)"
          ],
          11,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(47, 90%, 70%, 1)",
            "trunk",
            "hsla(47, 90%, 75%, 1)",
            "hsla(0, 0%, 0%, 0)"
          ],
          15,
          [
            "match",
            ["get", "category"],
            "motorway",
            "hsla(47, 90%, 70%, 0.85)",
            "trunk",
            "hsla(47, 90%, 75%, 0.85)",
            "hsla(0, 0%, 0%, 0)"
          ]
        ],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          13.5,
          1,
          15.5,
          0.9,
          16,
          0.25
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          ["match", ["get", "category"], ["motorway"], 0.75, 0.5],
          9,
          ["match", ["get", "category"], ["motorway"], 2, 1.75],
          13,
          ["match", ["get", "category"], ["motorway"], 3, 2.75],
          19,
          ["match", ["get", "category"], ["motorway"], 20, 18]
        ]
      }
    },
    {
      "id": "Surface - Rail ferry",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "category", "ferry"],
        ["==", "subcategory", "rail"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(210, 5%, 85%)",
        "line-dasharray": [3, 4],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.25, 14, 1],
        "line-width": {"stops": [[13, 1], [19, 1.5]]}
      }
    },
    {
      "id": "Surface - Railway outline",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": ["all", ["==", "category", "railway"], ["!=", "tunnel", true]],
      "layout": {"line-cap": "butt", "line-join": "bevel"},
      "paint": {
        "line-color": "hsl(210, 20%, 85%)",
        "line-gap-width": {"stops": [[16, 0], [19, 8]]},
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          15,
          0.9,
          16,
          0
        ],
        "line-width": {"stops": [[13, 0.5], [16, 0.75], [19, 9]]}
      }
    },
    {
      "id": "Surface - Railway fill",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 16,
      "filter": ["all", ["==", "category", "railway"], ["!=", "tunnel", true]],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(210, 10%, 97%)",
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          15,
          0.9,
          16,
          0
        ],
        "line-width": {"stops": [[16, 0], [19, 8]]}
      }
    },
    {
      "id": "Surface - Railway dash",
      "type": "line",
      "metadata": {"group": "road"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 13,
      "filter": ["all", ["==", "category", "railway"], ["!=", "tunnel", true]],
      "layout": {"line-cap": "butt", "line-join": "bevel"},
      "paint": {
        "line-color": "hsl(210, 20%, 85%)",
        "line-dasharray": [0.05, 0.4],
        "line-opacity": [
          "interpolate",
          ["exponential", 1],
          ["zoom"],
          14,
          1,
          15,
          0.9,
          16,
          0
        ],
        "line-width": {"stops": [[13, 0], [16, 3], [19, 12]]}
      }
    },
    {
      "id": "Borders - Disputed & Treaty shadow",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "filter": [
        "all",
        ["==", "category", "country"],
        ["any", ["has", "disputed"], ["has", "treaty"]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 5, 0.5, 10, 2],
        "line-color": "hsl(0, 0%, 10%)",
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 3, 0.35, 4, 0.5],
        "line-width": {"stops": [[3, 2], [10, 6]]}
      }
    },
    {
      "id": "Borders - Disputed & Treaty background",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "filter": [
        "all",
        ["==", "category", "country"],
        ["any", ["has", "disputed"], ["has", "treaty"]]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "line-round-limit": 1.05
      },
      "paint": {
        "line-color": "hsla(0, 0%, 30%, 0.75)",
        "line-width": {"stops": [[3, 1], [6, 1.3], [7, 1.3], [8, 1.6], [18, 2]]}
      }
    },
    {
      "id": "Borders - Treaty",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "filter": [
        "all",
        ["==", "category", "country"],
        ["!has", "disputed"],
        ["has", "treaty"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(219, 35%, 95%)",
        "line-dasharray": {"stops": [[3, [2, 3]], [6, [2, 4]], [7, [2, 4]]]},
        "line-width": {"stops": [[3, 1], [6, 1.3], [7, 1.3], [8, 1.6], [18, 2]]}
      }
    },
    {
      "id": "Borders - Disputed",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "filter": [
        "all",
        ["==", "category", "country"],
        ["has", "disputed"],
        ["!has", "treaty"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(23, 28%, 95%)",
        "line-dasharray": {
          "stops": [[3, [1, 1, 0, 1]], [6, [2, 2, 0, 2]], [7, [3, 3, 0, 3]]]
        },
        "line-width": {"stops": [[3, 1], [6, 1.3], [7, 1.3], [8, 1.6], [18, 2]]}
      }
    },
    {
      "id": "Borders - State background",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "minzoom": 7,
      "maxzoom": 10,
      "filter": [
        "all",
        ["==", "category", "state"],
        ["!has", "disputed"],
        ["!has", "treaty"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(0, 0%, 20%)",
        "line-opacity": {"stops": [[8, 0.5], [10, 0]]},
        "line-width": {"stops": [[7, 2.7], [8, 3], [18, 3]]}
      }
    },
    {
      "id": "Borders - State",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "minzoom": 3,
      "filter": [
        "all",
        ["==", "category", "state"],
        ["!has", "disputed"],
        ["!has", "treaty"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": {
          "stops": [
            [3, "hsla(210, 6%, 80%, 0.75)"],
            [8, "hsla(214, 5%, 90%, 0.9)"]
          ]
        },
        "line-dasharray": {"stops": [[3, [1, 0]], [4, [2, 2]]]},
        "line-width": {"stops": [[3, 0.5], [10, 1.5]]}
      }
    },
    {
      "id": "Borders - Country background",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "filter": [
        "all",
        ["==", "category", "country"],
        ["!has", "disputed"],
        ["!has", "treaty"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-blur": [
          "interpolate",
          ["linear"],
          ["zoom"],
          3,
          0.2,
          5,
          0.5,
          10,
          2
        ],
        "line-color": "hsl(0, 0%, 10%)",
        "line-opacity": [
          "interpolate",
          ["linear"],
          ["zoom"],
          3,
          0.25,
          5,
          0.65,
          14,
          0.35
        ],
        "line-width": {"stops": [[4, 2], [10, 8], [11, 12]]}
      }
    },
    {
      "id": "Borders - Country",
      "type": "line",
      "metadata": {"group": "border"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "filter": [
        "all",
        ["==", "category", "country"],
        ["!has", "disputed"],
        ["!has", "treaty"]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(0, 1%, 95%)",
        "line-width": {"stops": [[4, 1.1], [10, 2.2], [11, 3.4]]}
      }
    },
    {
      "id": "Traffic - Free flow outline",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        [">=", ["get", "traffic_level"], 0.75],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(138, 52%, 40%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "+",
            0.75,
            [
              "*",
              0.8,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                0.5,
                ["trunk"],
                0.25,
                0
              ]
            ]
          ],
          9,
          [
            "+",
            1,
            [
              "*",
              0.6,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                2.5,
                ["trunk"],
                2.25,
                ["primary"],
                2,
                ["secondary"],
                1.75,
                ["tertiary"],
                [
                  "match",
                  ["get", "road_subcategory"],
                  ["connecting"],
                  1.5,
                  1.25
                ],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
                0
              ]
            ]
          ],
          13,
          [
            "+",
            1.5,
            [
              "*",
              0.4,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                4.5,
                ["trunk"],
                4,
                ["primary"],
                3.5,
                ["secondary"],
                3,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
                0
              ]
            ]
          ],
          19,
          [
            "+",
            3,
            [
              "*",
              0.2,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                44,
                ["trunk"],
                40,
                ["primary"],
                36,
                ["secondary"],
                32,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 20, 16],
                12
              ]
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Free flow",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        [">=", ["get", "traffic_level"], 0.75],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(146, 78%, 53%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Slow flow outline",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.75],
        [">=", ["get", "traffic_level"], 0.35],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(26, 100%, 50%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "+",
            0.75,
            [
              "*",
              0.8,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                0.5,
                ["trunk"],
                0.25,
                0
              ]
            ]
          ],
          9,
          [
            "+",
            1,
            [
              "*",
              0.6,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                2.5,
                ["trunk"],
                2.25,
                ["primary"],
                2,
                ["secondary"],
                1.75,
                ["tertiary"],
                [
                  "match",
                  ["get", "road_subcategory"],
                  ["connecting"],
                  1.5,
                  1.25
                ],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
                0
              ]
            ]
          ],
          13,
          [
            "+",
            1.5,
            [
              "*",
              0.4,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                4.5,
                ["trunk"],
                4,
                ["primary"],
                3.5,
                ["secondary"],
                3,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
                0
              ]
            ]
          ],
          19,
          [
            "+",
            3,
            [
              "*",
              0.2,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                44,
                ["trunk"],
                40,
                ["primary"],
                36,
                ["secondary"],
                32,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 20, 16],
                12
              ]
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Slow flow",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.75],
        [">=", ["get", "traffic_level"], 0.35],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(45, 100%, 51%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Slow flow pattern",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 14,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.75],
        [">=", ["get", "traffic_level"], 0.35]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(45, 100%, 51%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-opacity": {"stops": [[14, 0], [15, 1]]},
        "line-pattern": "traffic-flow-slow",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Queueing flow outline",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.35],
        [">=", ["get", "traffic_level"], 0.15],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(3, 99%, 37%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "+",
            0.75,
            [
              "*",
              0.8,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                0.5,
                ["trunk"],
                0.25,
                0
              ]
            ]
          ],
          9,
          [
            "+",
            1,
            [
              "*",
              0.6,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                2.5,
                ["trunk"],
                2.25,
                ["primary"],
                2,
                ["secondary"],
                1.75,
                ["tertiary"],
                [
                  "match",
                  ["get", "road_subcategory"],
                  ["connecting"],
                  1.5,
                  1.25
                ],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
                0
              ]
            ]
          ],
          13,
          [
            "+",
            1.5,
            [
              "*",
              0.4,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                4.5,
                ["trunk"],
                4,
                ["primary"],
                3.5,
                ["secondary"],
                3,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
                0
              ]
            ]
          ],
          19,
          [
            "+",
            3,
            [
              "*",
              0.2,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                44,
                ["trunk"],
                40,
                ["primary"],
                36,
                ["secondary"],
                32,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 20, 16],
                12
              ]
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Queueing flow",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.35],
        [">=", ["get", "traffic_level"], 0.15],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(9, 97%, 51%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Queueing flow pattern",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 14,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.35],
        [">=", ["get", "traffic_level"], 0.15]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(9, 97%, 51%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-opacity": {"stops": [[14, 0], [15, 1]]},
        "line-pattern": "traffic-flow-queueing",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Stationary flow outline",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.15],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(0, 100%, 17%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "+",
            0.75,
            [
              "*",
              0.8,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                0.5,
                ["trunk"],
                0.25,
                0
              ]
            ]
          ],
          9,
          [
            "+",
            1,
            [
              "*",
              0.6,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                2.5,
                ["trunk"],
                2.25,
                ["primary"],
                2,
                ["secondary"],
                1.75,
                ["tertiary"],
                [
                  "match",
                  ["get", "road_subcategory"],
                  ["connecting"],
                  1.5,
                  1.25
                ],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
                0
              ]
            ]
          ],
          13,
          [
            "+",
            1.5,
            [
              "*",
              0.4,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                4.5,
                ["trunk"],
                4,
                ["primary"],
                3.5,
                ["secondary"],
                3,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
                0
              ]
            ]
          ],
          19,
          [
            "+",
            3,
            [
              "*",
              0.2,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                44,
                ["trunk"],
                40,
                ["primary"],
                36,
                ["secondary"],
                32,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 20, 16],
                12
              ]
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Stationary flow",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["<", ["get", "traffic_level"], 0.15],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(0, 100%, 34%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Stationary flow pattern",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 14,
      "filter": ["all", ["<", ["get", "traffic_level"], 0.15]],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(0, 100%, 34%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-opacity": {"stops": [[14, 0], [15, 1]]},
        "line-pattern": "traffic-flow-stationary",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Closed road outline",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", ["get", "traffic_level"], 0],
        ["has", "road_closure"],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [[10, "hsl(0, 100%, 79%)"], [15, "hsl(0, 100%, 35%)"]]
        },
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "+",
            0.75,
            [
              "*",
              0.8,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                0.5,
                ["trunk"],
                0.25,
                0
              ]
            ]
          ],
          9,
          [
            "+",
            1,
            [
              "*",
              0.6,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                2.5,
                ["trunk"],
                2.25,
                ["primary"],
                2,
                ["secondary"],
                1.75,
                ["tertiary"],
                [
                  "match",
                  ["get", "road_subcategory"],
                  ["connecting"],
                  1.5,
                  1.25
                ],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
                0
              ]
            ]
          ],
          13,
          [
            "+",
            1.5,
            [
              "*",
              0.4,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                4.5,
                ["trunk"],
                4,
                ["primary"],
                3.5,
                ["secondary"],
                3,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
                0
              ]
            ]
          ],
          19,
          [
            "+",
            3,
            [
              "*",
              0.2,
              [
                "match",
                ["get", "road_category"],
                ["motorway"],
                44,
                ["trunk"],
                40,
                ["primary"],
                36,
                ["secondary"],
                32,
                ["tertiary"],
                ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
                ["street"],
                ["match", ["get", "road_subcategory"], ["local"], 20, 16],
                12
              ]
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Closed road",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", ["get", "traffic_level"], 0],
        ["has", "road_closure"],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {
        "line-cap": ["step", ["zoom"], "butt", 15, "round"],
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(197, 28%, 95%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              3,
              ["trunk"],
              2.5,
              ["primary"],
              2.25,
              ["secondary"],
              2,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.75, 1.5],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              5.5,
              ["trunk"],
              5,
              ["primary"],
              4.5,
              ["secondary"],
              4,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 3.5, 3],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 2.5, 2],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Traffic - Closed road pattern",
      "type": "line",
      "metadata": {"group": "flow"},
      "source": "vectorTilesFlow",
      "source-layer": "Traffic flow",
      "minzoom": 5,
      "filter": [
        "all",
        ["==", ["get", "traffic_level"], 0],
        ["has", "road_closure"],
        [
          "any",
          [
            "all",
            [">=", ["zoom"], 6],
            [
              "any",
              ["==", ["get", "road_category"], "motorway"],
              ["==", ["get", "road_category"], "trunk"]
            ]
          ],
          [
            "all",
            [">=", ["zoom"], 8.5],
            ["==", ["get", "road_category"], "primary"]
          ],
          [
            "all",
            [">=", ["zoom"], 9.5],
            ["==", ["get", "road_category"], "secondary"]
          ],
          [
            "all",
            [">=", ["zoom"], 10.5],
            ["==", ["get", "road_subcategory"], "connecting"]
          ],
          [
            "all",
            [">=", ["zoom"], 11.5],
            ["==", ["get", "road_subcategory"], "major_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 12.5],
            ["==", ["get", "road_subcategory"], "local"]
          ],
          [
            "all",
            [">=", ["zoom"], 13.5],
            ["==", ["get", "road_subcategory"], "minor_local"]
          ],
          [
            "all",
            [">=", ["zoom"], 14.5],
            ["==", ["has", "road_category"], true]
          ]
        ]
      ],
      "layout": {"line-cap": "round", "line-join": "round"},
      "paint": {
        "line-color": "hsl(0, 0%, 100%)",
        "line-offset": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            ["case", ["has", "left_hand_traffic"], -0.4, 0.4],
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ],
        "line-opacity": {"stops": [[6, 0.2], [10, 1]]},
        "line-pattern": "traffic-diagonal-closed",
        "line-width": [
          "interpolate",
          ["exponential", 1.3],
          ["zoom"],
          5,
          [
            "*",
            0.8,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              0.5,
              ["trunk"],
              0.25,
              0
            ]
          ],
          9,
          [
            "*",
            0.6,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              2.5,
              ["trunk"],
              2.25,
              ["primary"],
              2,
              ["secondary"],
              1.75,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 1.5, 1.25],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1, 0.75],
              0
            ]
          ],
          13,
          [
            "*",
            0.4,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              4.5,
              ["trunk"],
              4,
              ["primary"],
              3.5,
              ["secondary"],
              3,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 2.5, 2],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 1.5, 1],
              0
            ]
          ],
          19,
          [
            "*",
            0.2,
            [
              "match",
              ["get", "road_category"],
              ["motorway"],
              44,
              ["trunk"],
              40,
              ["primary"],
              36,
              ["secondary"],
              32,
              ["tertiary"],
              ["match", ["get", "road_subcategory"], ["connecting"], 28, 24],
              ["street"],
              ["match", ["get", "road_subcategory"], ["local"], 20, 16],
              12
            ]
          ]
        ]
      }
    },
    {
      "id": "Borders - Treaty label",
      "type": "symbol",
      "metadata": {"group": "label"},
      "source": "vectorTiles",
      "source-layer": "boundaries",
      "minzoom": 6,
      "filter": [
        "all",
        ["==", "category", "country"],
        ["!has", "disputed"],
        ["has", "treaty"]
      ],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map",
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          14,
          16,
          16,
          20,
          20
        ]
      },
      "paint": {
        "text-color": "hsl(209, 80%, 76%)",
        "text-halo-color": "hsl(210, 15%, 20%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "NatureLabels - Physiography",
      "type": "symbol",
      "metadata": {"group": "label"},
      "source": "vectorTiles",
      "source-layer": "carto_labels",
      "minzoom": 7,
      "maxzoom": 15,
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 7],
          [
            "all",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "island"]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 10],
          [
            "any",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "woodland"]
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-anchor": "top",
        "text-field": "{name}",
        "text-font": ["NotoSans-MediumItalic"],
        "text-letter-spacing": 0.25,
        "text-offset": {
          "property": "category",
          "stops": [["woodland", [0, 1.3]]],
          "type": "categorical"
        },
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["match", ["get", "category"], "island", 11, "woodland", 0, 0],
          12,
          ["match", ["get", "category"], "island", 11, "woodland", 9, 0],
          17,
          ["match", ["get", "category"], "island", 20, "woodland", 18, 0]
        ]
      },
      "paint": {
        "text-color": "hsl(205, 15%, 100%)",
        "text-halo-color": [
          "match",
          ["get", "category"],
          "island",
          "hsl(60, 5%, 30%)",
          "woodland",
          "hsl(120, 30%, 35%)",
          "rgba(255, 255, 255, 0)"
        ],
        "text-halo-width": 1.4
      }
    },
    {
      "id": "NatureLabels - River line",
      "type": "symbol",
      "metadata": {"group": "label"},
      "source": "vectorTiles",
      "source-layer": "water_lines",
      "minzoom": 12,
      "filter": [
        "all",
        ["==", "category", "permanent_water"],
        ["==", "subcategory", "river"]
      ],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 600,
        "text-field": "{name}",
        "text-font": ["NotoSans-MediumItalic"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map",
        "text-size": {"stops": [[0, 8], [12, 11], [16, 16]]}
      },
      "paint": {
        "text-color": "hsl(200, 65%, 87%)",
        "text-halo-color": "hsl(200, 40%, 40%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "NatureLabels - River area",
      "type": "symbol",
      "metadata": {"group": "label"},
      "source": "vectorTiles",
      "source-layer": "carto_labels",
      "minzoom": 12,
      "filter": [
        "all",
        ["!=", "name", " "],
        ["==", "category", "permanent_water"],
        ["==", "subcategory", "river"]
      ],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "text-field": "{name}",
        "text-font": ["NotoSans-MediumItalic"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map",
        "text-size": {"stops": [[0, 8], [12, 11], [16, 16]]}
      },
      "paint": {
        "text-color": "hsl(200, 65%, 87%)",
        "text-halo-color": "hsl(200, 40%, 40%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "NatureLabels - Water area",
      "type": "symbol",
      "metadata": {"group": "label"},
      "source": "vectorTiles",
      "source-layer": "carto_labels",
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 0],
          [
            "all",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "permanent_water"],
            ["==", ["get", "subcategory"], "ocean"]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 3],
          [
            "all",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "permanent_water"],
            ["==", ["get", "subcategory"], "sea"]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 8],
          [
            "all",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "permanent_water"],
            ["==", ["get", "subcategory"], "lake"]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 14],
          [
            "all",
            ["!=", ["get", "name"], " "],
            [
              "any",
              [
                "all",
                ["==", ["get", "category"], "permanent_water"],
                ["!=", ["get", "subcategory"], ""]
              ],
              ["==", ["get", "category"], "intermittent_water"]
            ]
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-allow-overlap": false,
        "text-field": "{name}",
        "text-font": ["NotoSans-MediumItalic"],
        "text-ignore-placement": false,
        "text-keep-upright": true,
        "text-letter-spacing": 0.25,
        "text-optional": false,
        "text-pitch-alignment": "auto",
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          0,
          ["match", ["get", "subcategory"], "ocean", 8, "sea", 8, 0],
          4,
          ["match", ["get", "subcategory"], "ocean", 15, "sea", 11, 0],
          5,
          ["match", ["get", "subcategory"], "ocean", 16, "sea", 15, 9],
          12,
          [
            "match",
            ["get", "subcategory"],
            "ocean",
            17,
            "sea",
            17,
            "lake",
            11,
            9
          ],
          17,
          [
            "match",
            ["get", "subcategory"],
            "ocean",
            19,
            "sea",
            19,
            "lake",
            16,
            16
          ]
        ]
      },
      "paint": {
        "text-color": "hsl(200, 65%, 87%)",
        "text-halo-color": "hsl(205, 40%, 40%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "TransitLabels - Ferry",
      "type": "symbol",
      "metadata": {"group": "road_label"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 9,
      "filter": [
        "all",
        ["==", "category", "ferry"],
        ["==", "subcategory", "boat"]
      ],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-rotation-alignment": "map",
        "text-size": {"stops": [[14, 12]]}
      },
      "paint": {
        "text-color": "hsla(200, 40%, 15%, 1)",
        "text-halo-color": "hsl(200, 40%, 65%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "TransitLabels - Road",
      "type": "symbol",
      "metadata": {"group": "road_label"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 10,
      "filter": [
        "all",
        ["match", ["get", "category"], ["ferry"], false, true],
        [
          "step",
          ["zoom"],
          ["match", ["get", "category"], ["motorway", "trunk"], true, false],
          11,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary"],
            true,
            false
          ],
          12,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary", "tertiary"],
            true,
            false
          ],
          14,
          [
            "match",
            ["get", "subcategory"],
            ["service", "walkway"],
            false,
            true
          ],
          15,
          ["!=", ["has", "tunnel"], true]
        ]
      ],
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          1,
          "trunk",
          1,
          "primary",
          2,
          "secondary",
          3,
          "tertiary",
          4,
          "street",
          5,
          "minor",
          6,
          10
        ],
        "symbol-spacing": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          250,
          17,
          400,
          22,
          800
        ],
        "text-field": "{name}",
        "text-font": [
          "match",
          ["get", "category"],
          ["path"],
          ["literal", ["Noto-Regular"]],
          ["literal", ["Noto-Medium"]]
        ],
        "text-keep-upright": true,
        "text-letter-spacing": 0.05,
        "text-pitch-alignment": "viewport",
        "text-rotation-alignment": "map",
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary", "tertiary"],
            13,
            ["street"],
            11,
            9
          ],
          18,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            15,
            ["secondary", "tertiary"],
            13,
            ["street"],
            12,
            11.5
          ]
        ]
      },
      "paint": {
        "text-color": [
          "match",
          ["get", "category"],
          "motorway",
          "hsl(47, 5%, 98%)",
          "trunk",
          "hsl(47, 5%, 98%)",
          "primary",
          "hsl(47, 5%, 98%)",
          "secondary",
          "hsl(215, 5%, 100%)",
          "hsl(215, 5%, 100%)"
        ],
        "text-halo-color": [
          "match",
          ["get", "category"],
          ["motorway", "trunk"],
          "hsla(45, 50%, 10%, 0.85)",
          ["path"],
          "hsla(215, 5%, 35%, 0.85)",
          "hsla(215, 5%, 25%, 0.85)"
        ],
        "text-halo-width": {"stops": [[0, 0.75], [16, 1.2], [17, 1.5]]}
      }
    },
    {
      "id": "TransitLabels - Road Shield 4",
      "type": "symbol",
      "metadata": {"group": "shield"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 7,
      "filter": [
        "all",
        ["has", "shield_icon_3"],
        [
          "step",
          ["zoom"],
          ["match", ["get", "category"], ["motorway", "trunk"], true, false],
          8,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            true,
            false
          ],
          10,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary"],
            true,
            false
          ],
          12,
          ["match", ["get", "category"], ["street"], false, true],
          15,
          ["==", ["get", "tunnel"], false]
        ]
      ],
      "layout": {
        "icon-image": "{shield_icon_3}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "icon-size": {"stops": [[10, 0.85], [12, 1]]},
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          1,
          "trunk",
          2,
          "primary",
          3,
          "secondary",
          4,
          "tertiary",
          5,
          "street",
          6,
          "minor",
          7,
          10
        ],
        "symbol-spacing": 725,
        "text-field": "{shield_icon_text_3}",
        "text-font": ["Noto-Bold"],
        "text-padding": 5,
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_3",
          "type": "identity"
        }
      }
    },
    {
      "id": "TransitLabels - Road Shield 3",
      "type": "symbol",
      "metadata": {"group": "shield"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 7,
      "filter": [
        "all",
        ["has", "shield_icon_2"],
        [
          "step",
          ["zoom"],
          ["match", ["get", "category"], ["motorway", "trunk"], true, false],
          8,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            true,
            false
          ],
          10,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary"],
            true,
            false
          ],
          12,
          ["match", ["get", "category"], ["street"], false, true],
          15,
          ["==", ["get", "tunnel"], false]
        ]
      ],
      "layout": {
        "icon-image": "{shield_icon_2}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "icon-size": {"stops": [[10, 0.85], [12, 1]]},
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          1,
          "trunk",
          2,
          "primary",
          3,
          "secondary",
          4,
          "tertiary",
          5,
          "street",
          6,
          "minor",
          7,
          10
        ],
        "symbol-spacing": 650,
        "text-field": "{shield_icon_text_2}",
        "text-font": ["Noto-Bold"],
        "text-padding": 5,
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_2",
          "type": "identity"
        }
      }
    },
    {
      "id": "TransitLabels - Road Shield 2",
      "type": "symbol",
      "metadata": {"group": "shield"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 7,
      "filter": [
        "all",
        ["has", "shield_icon_1"],
        [
          "step",
          ["zoom"],
          ["match", ["get", "category"], ["motorway", "trunk"], true, false],
          8,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            true,
            false
          ],
          10,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary"],
            true,
            false
          ],
          12,
          ["match", ["get", "category"], ["street"], false, true],
          15,
          ["==", ["get", "tunnel"], false]
        ]
      ],
      "layout": {
        "icon-image": "{shield_icon_1}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "icon-size": {"stops": [[10, 0.85], [12, 1]]},
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          1,
          "trunk",
          2,
          "primary",
          3,
          "secondary",
          4,
          "tertiary",
          5,
          "street",
          6,
          "minor",
          7,
          10
        ],
        "symbol-spacing": 575,
        "text-field": "{shield_icon_text_1}",
        "text-font": ["Noto-Bold"],
        "text-padding": 5,
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_1",
          "type": "identity"
        }
      }
    },
    {
      "id": "TransitLabels - Road Shield 1",
      "type": "symbol",
      "metadata": {"group": "shield"},
      "source": "vectorTiles",
      "source-layer": "roads",
      "minzoom": 7,
      "filter": [
        "all",
        ["has", "shield_icon_0"],
        [
          "step",
          ["zoom"],
          ["match", ["get", "category"], ["motorway", "trunk"], true, false],
          8,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary"],
            true,
            false
          ],
          10,
          [
            "match",
            ["get", "category"],
            ["motorway", "trunk", "primary", "secondary"],
            true,
            false
          ],
          12,
          ["match", ["get", "category"], ["street"], false, true],
          15,
          ["==", ["get", "tunnel"], false]
        ]
      ],
      "layout": {
        "icon-image": "{shield_icon_0}",
        "icon-padding": 5,
        "icon-rotation-alignment": "viewport",
        "icon-size": {"stops": [[10, 0.85], [12, 1]]},
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "symbol-sort-key": [
          "match",
          ["get", "category"],
          "motorway",
          1,
          "trunk",
          2,
          "primary",
          3,
          "secondary",
          4,
          "tertiary",
          5,
          "street",
          6,
          "minor",
          7,
          10
        ],
        "symbol-spacing": 500,
        "text-field": "{shield_icon_text_0}",
        "text-font": ["Noto-Bold"],
        "text-padding": 5,
        "text-rotation-alignment": "viewport",
        "text-size": 10
      },
      "paint": {
        "text-color": {
          "property": "shield_icon_text_color_0",
          "type": "identity"
        }
      }
    },
    {
      "id": "House Number",
      "type": "symbol",
      "metadata": {"group": "address_point_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 18,
      "maxzoom": 22,
      "filter": ["all", ["==", "category", "address_point"], ["has", "number"]],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{number}",
        "text-font": ["Noto-Regular"],
        "text-size": ["interpolate", ["linear"], ["zoom"], 18, 10, 20, 12]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 96%)",
        "text-halo-color": "hsl(210, 5%, 20%)",
        "text-halo-width": ["step", ["zoom"], 1, 12, 1.2]
      }
    },
    {
      "id": "POI",
      "type": "symbol",
      "metadata": {"group": "extra_POI"},
      "source": "poiTiles",
      "source-layer": "poi_extended",
      "filter": [
        "all",
        [
          "any",
          ["all", ["<=", ["zoom"], 10], ["<=", ["get", "priority"], 109]],
          ["all", ["==", ["zoom"], 11], ["<=", ["get", "priority"], 119]],
          ["all", ["==", ["zoom"], 12], ["<=", ["get", "priority"], 129]],
          ["all", ["==", ["zoom"], 13], ["<=", ["get", "priority"], 139]],
          ["all", ["==", ["zoom"], 14], ["<=", ["get", "priority"], 149]],
          ["all", ["==", ["zoom"], 15], ["<=", ["get", "priority"], 159]],
          ["all", ["==", ["zoom"], 16], ["<=", ["get", "priority"], 169]],
          ["all", ["==", ["zoom"], 17], ["<=", ["get", "priority"], 179]],
          ["all", [">=", ["zoom"], 18], ["<=", ["get", "priority"], 189]]
        ],
        [
          "any",
          ["==", ["get", "category"], "automotive_dealer"],
          ["==", ["get", "category"], "car_wash"],
          ["==", ["get", "category"], "electric_vehicle_station"],
          ["==", ["get", "category"], "motoring_organization_office"],
          ["==", ["get", "category"], "open_parking_area"],
          ["==", ["get", "category"], "parking_garage"],
          ["==", ["get", "category"], "gas_station"],
          ["==", ["get", "category"], "rent_a_car_facility"],
          ["==", ["get", "category"], "rent_a_car_parking"],
          ["==", ["get", "category"], "repair_facility"],
          ["==", ["get", "category"], "rest_area"],
          ["==", ["get", "category"], "toll_gate"],
          ["==", ["get", "category"], "truck_stop"],
          ["==", ["get", "category"], "weigh_station"],
          ["==", ["get", "category"], "agriculture_business"],
          ["==", ["get", "category"], "bank"],
          ["==", ["get", "category"], "business_park"],
          ["==", ["get", "category"], "atm"],
          ["==", ["get", "category"], "commercial_building"],
          ["==", ["get", "category"], "company"],
          ["==", ["get", "category"], "emergency_medical_service"],
          ["==", ["get", "category"], "exchange"],
          ["==", ["get", "category"], "exhibition_and_convention_center"],
          ["==", ["get", "category"], "industrial_building"],
          ["==", ["get", "category"], "manufacturing_facility"],
          ["==", ["get", "category"], "media_facility"],
          ["==", ["get", "category"], "research_facility"],
          ["==", ["get", "category"], "cafe_or_pub"],
          ["==", ["get", "category"], "restaurant"],
          ["==", ["get", "category"], "restaurant_area"],
          ["==", ["get", "category"], "college_or_university"],
          ["==", ["get", "category"], "courthouse"],
          ["==", ["get", "category"], "embassy"],
          ["==", ["get", "category"], "fire_station_or_brigade"],
          ["==", ["get", "category"], "government_office"],
          ["==", ["get", "category"], "library"],
          ["==", ["get", "category"], "military_installation"],
          ["==", ["get", "category"], "native_reservation"],
          ["==", ["get", "category"], "non_governmental_organization"],
          ["==", ["get", "category"], "police_station"],
          ["==", ["get", "category"], "post_office"],
          ["==", ["get", "category"], "primary_resource_or_utility"],
          ["==", ["get", "category"], "prison_or_correctional_facility"],
          ["==", ["get", "category"], "public_amenity"],
          ["==", ["get", "category"], "school"],
          ["==", ["get", "category"], "traffic_service_center"],
          [
            "==",
            ["get", "category"],
            "transport_authority_or_vehicle_registration"
          ],
          ["==", ["get", "category"], "welfare_organization"],
          ["==", ["get", "category"], "dentist"],
          ["==", ["get", "category"], "doctor"],
          ["==", ["get", "category"], "emergency_room"],
          ["==", ["get", "category"], "health_care_service"],
          ["==", ["get", "category"], "hospital"],
          ["==", ["get", "category"], "pharmacy"],
          ["==", ["get", "category"], "veterinarian"],
          ["==", ["get", "category"], "amusement_park"],
          ["==", ["get", "category"], "casino"],
          ["==", ["get", "category"], "movie_theater"],
          ["==", ["get", "category"], "club_and_association"],
          ["==", ["get", "category"], "community_center"],
          ["==", ["get", "category"], "cultural_center"],
          ["==", ["get", "category"], "entertainment"],
          ["==", ["get", "category"], "leisure_center"],
          ["==", ["get", "category"], "marina"],
          ["==", ["get", "category"], "museum"],
          ["==", ["get", "category"], "nightlife"],
          ["==", ["get", "category"], "park_and_recreation_area"],
          ["==", ["get", "category"], "theater"],
          ["==", ["get", "category"], "trail_system"],
          ["==", ["get", "category"], "winery"],
          ["==", ["get", "category"], "zoo_arboreta_and_botanical_garden"],
          ["==", ["get", "category"], "camping_ground"],
          ["==", ["get", "category"], "vacation_rental"],
          ["==", ["get", "category"], "hotel_or_motel"],
          ["==", ["get", "category"], "residential_accommodations"],
          ["==", ["get", "category"], "department_store"],
          ["==", ["get", "category"], "market"],
          ["==", ["get", "category"], "shop"],
          ["==", ["get", "category"], "shopping_center"],
          ["==", ["get", "category"], "golf_course"],
          ["==", ["get", "category"], "ice_skating_rink"],
          ["==", ["get", "category"], "sports_center"],
          ["==", ["get", "category"], "stadium"],
          ["==", ["get", "category"], "swimming_pool"],
          ["==", ["get", "category"], "tennis_court"],
          ["==", ["get", "category"], "water_sport"],
          ["==", ["get", "category"], "adventure_sports_venue"],
          ["==", ["get", "category"], "beach"],
          ["==", ["get", "category"], "tourist_attraction"],
          ["==", ["get", "category"], "place_of_worship"],
          ["==", ["get", "category"], "scenic_or_panoramic_view"],
          ["==", ["get", "category"], "tourist_information_office"],
          ["==", ["get", "category"], "access_gateway"],
          ["==", ["get", "category"], "airport"],
          ["==", ["get", "category"], "ferry_terminal"],
          ["==", ["get", "category"], "frontier_crossing"],
          ["==", ["get", "category"], "helipad"],
          ["==", ["get", "category"], "mountain_pass"],
          ["==", ["get", "category"], "port_or_warehouse_facility"],
          ["==", ["get", "category"], "public_transportation_stop"],
          ["==", ["get", "category"], "railroad_station"],
          ["==", ["get", "category"], "geographic_feature"],
          ["==", ["get", "category"], "courier_drop_box"],
          ["==", ["get", "category"], "checkpoint"]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-padding": 5,
        "icon-size": {"stops": [[10, 0.7], [18, 1]]},
        "symbol-placement": "point",
        "symbol-sort-key": ["get", "priority"],
        "symbol-z-order": "auto",
        "text-field": "{name}\n{sub_text}",
        "text-font": ["Noto-Medium"],
        "text-justify": "auto",
        "text-letter-spacing": 0.1,
        "text-line-height": 1.1,
        "text-radial-offset": {"stops": [[10, 1], [18, 1.3]]},
        "text-size": [
          "step",
          ["zoom"],
          ["/", 14.5, ["log10", ["max", ["length", ["get", "name"]], 30]]],
          10,
          ["/", 16.5, ["log10", ["max", ["length", ["get", "name"]], 30]]],
          15,
          ["/", 17.5, ["log10", ["max", ["length", ["get", "name"]], 30]]],
          18,
          ["/", 18.5, ["log10", ["max", ["length", ["get", "name"]], 30]]]
        ],
        "text-variable-anchor": ["top", "left", "bottom", "right"]
      },
      "paint": {
        "text-color": "hsl(0,0,100%)",
        "text-halo-color": {
          "property": "category",
          "stops": [
            ["automotive_dealer", "hsl(212, 48%, 40%)"],
            ["car_wash", "hsl(212, 48%, 40%)"],
            ["electric_vehicle_station", "hsl(212, 48%, 40%)"],
            ["motoring_organization_office", "hsl(212, 48%, 40%)"],
            ["open_parking_area", "hsl(205, 60%, 42%)"],
            ["parking_garage", "hsl(205, 60%, 42%)"],
            ["gas_station", "hsl(212, 48%, 40%)"],
            ["rent_a_car_facility", "hsl(291, 29%, 45%)"],
            ["rent_a_car_parking", "hsl(205, 60%, 42%)"],
            ["repair_facility", "hsl(291, 29%, 45%)"],
            ["rest_area", "hsl(160, 48%, 32%)"],
            ["toll_gate", "hsl(212, 48%, 40%)"],
            ["truck_stop", "hsl(212, 48%, 40%)"],
            ["weigh_station", "hsl(212, 48%, 40%)"],
            ["agriculture_business", "hsl(240, 5%, 35%)"],
            ["bank", "hsl(324, 8%, 35%)"],
            ["business_park", "hsl(291, 29%, 45%)"],
            ["atm", "hsl(291, 29%, 45%)"],
            ["commercial_building", "hsl(291, 29%, 45%)"],
            ["company", "hsl(291, 29%, 45%)"],
            ["emergency_medical_service", "hsl(7, 58%, 45%)"],
            ["exchange", "hsl(291, 29%, 45%)"],
            ["exhibition_and_convention_center", "hsl(322, 38%, 50%)"],
            ["industrial_building", "hsl(240, 5%, 35%)"],
            ["manufacturing_facility", "hsl(240, 5%, 35%)"],
            ["media_facility", "hsl(291, 29%, 45%)"],
            ["research_facility", "hsl(324, 8%, 35%)"],
            ["cafe_or_pub", "hsl(28, 85%, 42%)"],
            ["restaurant", "hsl(28, 85%, 42%)"],
            ["restaurant_area", "hsl(28, 85%, 42%)"],
            ["college_or_university", "hsl(31, 20%, 35%)"],
            ["courthouse", "hsl(324, 8%, 35%)"],
            ["embassy", "hsl(324, 8%, 35%)"],
            ["fire_station_or_brigade", "hsl(324, 8%, 35%)"],
            ["government_office", "hsl(324, 8%, 35%)"],
            ["library", "hsl(324, 8%, 35%)"],
            ["military_installation", "hsl(324, 8%, 35%)"],
            ["native_reservation", "hsl(160, 48%, 32%)"],
            ["non_governmental_organization", "hsl(324, 8%, 35%)"],
            ["police_station", "hsl(324, 8%, 35%)"],
            ["post_office", "hsl(291, 29%, 45%)"],
            ["primary_resource_or_utility", "hsl(210, 2%, 45%)"],
            ["prison_or_correctional_facility", "hsl(324, 8%, 35%)"],
            ["public_amenity", "hsl(324, 8%, 35%)"],
            ["school", "hsl(31, 20%, 35%)"],
            ["traffic_service_center", "hsl(291, 29%, 45%)"],
            [
              "transport_authority_or_vehicle_registration",
              "hsl(324, 8%, 35%)"
            ],
            ["welfare_organization", "hsl(7, 58%, 45%)"],
            ["dentist", "hsl(7, 58%, 45%)"],
            ["doctor", "hsl(7, 58%, 45%)"],
            ["emergency_room", "hsl(7, 58%, 45%)"],
            ["health_care_service", "hsl(7, 58%, 45%)"],
            ["hospital", "hsl(7, 58%, 45%)"],
            ["pharmacy", "hsl(7, 58%, 45%)"],
            ["veterinarian", "hsl(7, 58%, 45%)"],
            ["amusement_park", "hsl(322, 40%, 48%)"],
            ["casino", "hsl(291, 29%, 45%)"],
            ["movie_theater", "hsl(322, 38%, 50%)"],
            ["club_and_association", "hsl(322, 38%, 50%)"],
            ["community_center", "hsl(324, 8%, 35%)"],
            ["cultural_center", "hsl(322, 38%, 50%)"],
            ["entertainment", "hsl(322, 38%, 50%)"],
            ["leisure_center", "hsl(322, 38%, 50%)"],
            ["marina", "hsl(160, 48%, 32%)"],
            ["museum", "hsl(322, 38%, 50%)"],
            ["nightlife", "hsl(322, 38%, 50%)"],
            ["park_and_recreation_area", "hsl(160, 48%, 32%)"],
            ["theater", "hsl(322, 38%, 50%)"],
            ["trail_system", "hsl(160, 48%, 32%)"],
            ["winery", "hsl(28, 85%, 42%)"],
            ["zoo_arboreta_and_botanical_garden", "hsl(322, 38%, 50%)"],
            ["camping_ground", "hsl(242, 25%, 48%)"],
            ["vacation_rental", "hsl(242, 25%, 48%)"],
            ["hotel_or_motel", "hsl(242, 25%, 48%)"],
            ["residential_accommodations", "hsl(210, 2%, 45%)"],
            ["department_store", "hsl(291, 29%, 45%)"],
            ["market", "hsl(291, 29%, 45%)"],
            ["shop", "hsl(291, 29%, 45%)"],
            ["shopping_center", "hsl(291, 29%, 45%)"],
            ["golf_course", "hsl(160, 48%, 32%)"],
            ["ice_skating_rink", "hsl(160, 48%, 32%)"],
            ["sports_center", "hsl(160, 48%, 32%)"],
            ["stadium", "hsl(322, 38%, 50%)"],
            ["swimming_pool", "hsl(322, 38%, 50%)"],
            ["tennis_court", "hsl(160, 48%, 32%)"],
            ["water_sport", "hsl(160, 48%, 32%)"],
            ["adventure_sports_venue", "hsl(160, 48%, 32%)"],
            ["beach", "hsl(160, 48%, 32%)"],
            ["tourist_attraction", "hsl(160, 48%, 32%)"],
            ["place_of_worship", "hsl(324, 8%, 35%)"],
            ["scenic_or_panoramic_view", "hsl(160, 48%, 32%)"],
            ["tourist_information_office", "hsl(240, 5%, 35%)"],
            ["access_gateway", "hsl(212, 48%, 40%)"],
            ["airport", "hsl(212, 48%, 40%)"],
            ["ferry_terminal", "hsl(198, 40%, 35%)"],
            ["frontier_crossing", "hsl(212, 48%, 40%)"],
            ["helipad", "hsl(212, 48%, 40%)"],
            ["mountain_pass", "hsl(160, 48%, 32%)"],
            ["port_or_warehouse_facility", "hsl(291, 29%, 45%)"],
            ["public_transportation_stop", "hsl(212, 48%, 40%)"],
            ["railroad_station", "hsl(212, 48%, 40%)"],
            ["geographic_feature", "hsl(160, 48%, 32%)"],
            ["courier_drop_box", "hsl(291, 50%, 63%)"],
            ["checkpoint", "hsl(326, 13%, 61%)"]
          ],
          "type": "categorical"
        },
        "text-halo-width": 1.2
      }
    },
    {
      "id": "Places - Neighbourhood shadow",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 11,
      "maxzoom": 17,
      "filter": [
        "any",
        [
          "all",
          ["!=", "name", " "],
          ["==", "category", "settlement_division"],
          ["==", "subcategory", "neighbourhood"]
        ],
        ["all", ["==", "admin_class", 5], ["==", "display_class", 8]]
      ],
      "layout": {
        "icon-padding": 2,
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-padding": 20,
        "text-size": ["interpolate", ["linear"], ["zoom"], 11, 10.5, 17, 14.5],
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 10%)",
        "text-halo-blur": 2,
        "text-halo-color": "hsla(0, 0%, 10%, 0.45)",
        "text-halo-width": 1,
        "text-translate": [0.5, 0.5]
      }
    },
    {
      "id": "Places - Village / Hamlet",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 11,
      "maxzoom": 17,
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 11],
          ["==", ["get", "subcategory"], "village"]
        ],
        ["all", [">=", ["zoom"], 12], ["==", ["get", "subcategory"], "hamlet"]]
      ],
      "layout": {
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-padding": 10,
        "text-size": [
          "step",
          ["zoom"],
          ["match", ["get", "category"], "hamlet", 0, 11],
          11,
          ["match", ["get", "category"], "hamlet", 0, 12],
          13,
          ["match", ["get", "category"], "hamlet", 12.5, 13.5],
          14,
          ["match", ["get", "category"], "hamlet", 14, 15]
        ]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 96%)",
        "text-halo-color": "hsl(210, 5%, 20%)",
        "text-halo-width": ["step", ["zoom"], 1, 12, 1.2]
      }
    },
    {
      "id": "Places - Neighbourhood",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 11,
      "maxzoom": 17,
      "filter": [
        "any",
        [
          "all",
          ["!=", "name", " "],
          ["==", "category", "settlement_division"],
          ["==", "subcategory", "neighbourhood"]
        ],
        ["all", ["==", "admin_class", 5], ["==", "display_class", 8]]
      ],
      "layout": {
        "icon-padding": 2,
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.05,
        "text-padding": 20,
        "text-size": ["interpolate", ["linear"], ["zoom"], 11, 10.5, 17, 14.5],
        "text-transform": "uppercase",
        "visibility": "visible"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "hsl(215, 3%, 35%)",
        "text-halo-width": 1
      }
    },
    {
      "id": "Places - Town",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 9,
      "maxzoom": 17,
      "filter": [
        "all",
        ["!=", "name", " "],
        [">=", "priority", 110],
        ["<", "priority", 129],
        ["==", "category", "settlement"],
        ["==", "subcategory", "town"]
      ],
      "layout": {
        "icon-padding": 2,
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-padding": 20,
        "text-size": ["interpolate", ["linear"], ["zoom"], 9, 12, 17, 19]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 96%)",
        "text-halo-color": "hsl(210, 5%, 20%)",
        "text-halo-width": ["step", ["zoom"], 1, 12, 1.2]
      }
    },
    {
      "id": "Places - Small city",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 7,
      "maxzoom": 17,
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 7],
          [">=", ["get", "display_class"], 9],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          [">=", ["get", "priority"], 90],
          ["<=", ["get", "priority"], 104]
        ],
        [
          "all",
          [">=", ["zoom"], 8],
          ["!=", ["get", "name"], " "],
          [">=", ["get", "display_class"], 9],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-size": ["step", ["zoom"], 1, 8, 0],
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-anchor": ["step", ["zoom"], "bottom", 8, "center"],
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-justify": "auto",
        "text-letter-spacing": 0.05,
        "text-padding": ["step", ["zoom"], 4, 8, 5],
        "text-radial-offset": ["step", ["zoom"], 0.7, 8, 0],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          7,
          ["match", ["get", "display_class"], 9, 13, 10, 12, 13],
          8,
          ["match", ["get", "display_class"], 9, 14, 10, 13, 13],
          11,
          ["match", ["get", "display_class"], 9, 16, 10, 15, 15],
          17,
          ["match", ["get", "display_class"], 9, 21, 10, 21, 21]
        ]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 98%)",
        "text-halo-blur": ["step", ["zoom"], 0, 8, 0.5],
        "text-halo-color": "hsl(210, 5%, 15%)",
        "text-halo-width": ["step", ["zoom"], 1, 8, 1.2]
      }
    },
    {
      "id": "Places - Medium city",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 5,
      "maxzoom": 16,
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 5],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          ["has", "icon"],
          [
            "any",
            [
              "all",
              ["==", ["get", "admin_class"], 1],
              ["==", ["get", "display_class"], 8]
            ],
            [
              "all",
              [
                "any",
                ["==", ["get", "admin_class"], 2],
                ["==", ["get", "admin_class"], 3]
              ],
              [
                "any",
                ["==", ["get", "display_class"], 6],
                ["==", ["get", "display_class"], 7]
              ]
            ]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 6],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          ["has", "icon"],
          [
            "any",
            [
              "all",
              [">=", ["get", "display_class"], 6],
              ["<", ["get", "display_class"], 8],
              ["!=", ["get", "admin_class"], 1]
            ],
            [
              "all",
              ["!=", ["get", "admin_class"], 5],
              ["==", ["get", "display_class"], 8]
            ]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 8],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          ["!=", ["get", "name"], " "],
          [
            "any",
            [
              "all",
              [">=", ["get", "display_class"], 6],
              ["<", ["get", "display_class"], 8],
              ["!=", ["get", "admin_class"], 1]
            ],
            [
              "all",
              ["!=", ["get", "admin_class"], 5],
              ["==", ["get", "display_class"], 8]
            ]
          ]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-size": ["step", ["zoom"], 1, 8, 0],
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-anchor": "bottom",
        "text-field": "{name}",
        "text-font": ["Noto-Regular"],
        "text-justify": "auto",
        "text-letter-spacing": 0.05,
        "text-padding": ["step", ["zoom"], 2, 8, 5],
        "text-radial-offset": ["step", ["zoom"], 0.7, 8, 0],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          5,
          ["match", ["get", "display_class"], 6, 12, 7, 12, 11],
          8,
          ["match", ["get", "display_class"], 6, 15, 7, 15, 14.5],
          11,
          ["match", ["get", "display_class"], 6, 17, 17],
          16,
          ["match", ["get", "display_class"], 6, 23, 23]
        ]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 98%)",
        "text-halo-blur": ["step", ["zoom"], 0, 8, 0.5],
        "text-halo-color": "hsl(210, 5%, 15%)",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "Places - Large city",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 3,
      "maxzoom": 15,
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 3],
          ["has", "icon"],
          ["==", ["get", "category"], "settlement"],
          ["!=", ["get", "capital"], "country"],
          ["==", ["get", "subcategory"], "city"],
          ["==", ["get", "admin_class"], 1]
        ],
        [
          "all",
          [">=", ["zoom"], 4],
          ["has", "icon"],
          ["==", ["get", "category"], "settlement"],
          ["!=", ["get", "capital"], "country"],
          ["==", ["get", "subcategory"], "city"],
          [
            "any",
            [
              "all",
              ["==", ["get", "admin_class"], 1],
              [
                "all",
                [">=", ["get", "display_class"], 2],
                ["<", ["get", "display_class"], 8]
              ]
            ],
            [
              "all",
              [
                "any",
                ["==", ["get", "admin_class"], 2],
                ["==", ["get", "name"], "New York"]
              ],
              [
                "any",
                ["==", ["get", "display_class"], 2],
                ["==", ["get", "display_class"], 3]
              ]
            ]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 5],
          ["has", "icon"],
          ["==", ["get", "category"], "settlement"],
          ["!=", ["get", "capital"], "country"],
          ["==", ["get", "subcategory"], "city"],
          [
            "any",
            [
              "all",
              ["==", ["get", "admin_class"], 2],
              [
                "any",
                ["==", ["get", "display_class"], 4],
                ["==", ["get", "display_class"], 5]
              ]
            ],
            [
              "all",
              ["==", ["get", "admin_class"], 3],
              [
                "any",
                ["==", ["get", "display_class"], 2],
                ["==", ["get", "display_class"], 3]
              ]
            ]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 6],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          ["!=", ["get", "capital"], "country"],
          ["has", "icon"],
          ["<=", ["get", "display_class"], 5]
        ],
        [
          "all",
          [">=", ["zoom"], 8],
          ["!=", ["get", "name"], " "],
          ["==", ["get", "category"], "settlement"],
          ["!=", ["get", "capital"], "country"],
          ["==", ["get", "subcategory"], "city"],
          [
            "any",
            [
              "all",
              ["==", ["get", "admin_class"], 1],
              ["!=", ["get", "display_class"], 8]
            ],
            [
              "all",
              [">=", ["get", "display_class"], 2],
              ["<", ["get", "display_class"], 6]
            ]
          ]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-size": ["step", ["zoom"], 0.8, 5, 0.9, 6, 1, 8, 0],
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "text-anchor": "bottom",
        "text-field": "{name}",
        "text-font": [
          "step",
          ["zoom"],
          ["literal", ["Noto-Regular"]],
          5,
          ["literal", ["Noto-Medium"]]
        ],
        "text-justify": "auto",
        "text-letter-spacing": 0.05,
        "text-padding": ["step", ["zoom"], 10, 4, 2, 8, 5],
        "text-radial-offset": ["step", ["zoom"], 0.7, 8, 0],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          3,
          ["match", ["get", "display_class"], 2, 12, 3, 12, 4, 12, 11],
          8,
          ["match", ["get", "display_class"], 2, 18, 3, 18, 4, 18, 17],
          15,
          ["match", ["get", "display_class"], 2, 25, 25]
        ]
      },
      "paint": {
        "text-color": [
          "match",
          ["get", "display_class"],
          2,
          "hsl(0, 0%, 98%)",
          3,
          "hsl(0, 0%, 98%)",
          4,
          "hsl(0, 0%, 98%)",
          "hsl(0, 0%, 95%)"
        ],
        "text-halo-blur": ["step", ["zoom"], 0, 8, 0.5],
        "text-halo-color": "hsl(210, 5%, 15%)",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "Places - State name shadow",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 3],
          ["<", ["zoom"], 4],
          [
            "all",
            ["!=", ["get", "abbr"], " "],
            ["==", ["get", "category"], "state"]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 4],
          [
            "all",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "state"]
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-field": ["step", ["zoom"], ["get", "abbr"], 4, ["get", "name"]],
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.3,
        "text-padding": 2,
        "text-size": {"stops": [[0, 10], [4, 11], [5, 12], [7, 14], [8, 16]]},
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 0%)",
        "text-halo-blur": 1.2,
        "text-halo-color": "hsla(0, 0%, 0%, 0.35)",
        "text-halo-width": 2,
        "text-translate": [0.5, 0.5]
      }
    },
    {
      "id": "Places - State name",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 3],
          ["<", ["zoom"], 4],
          [
            "all",
            ["!=", ["get", "abbr"], " "],
            ["==", ["get", "category"], "state"]
          ]
        ],
        [
          "all",
          [">=", ["zoom"], 4],
          [
            "all",
            ["!=", ["get", "name"], " "],
            ["==", ["get", "category"], "state"]
          ]
        ]
      ],
      "layout": {
        "symbol-placement": "point",
        "text-field": ["step", ["zoom"], ["get", "abbr"], 4, ["get", "name"]],
        "text-font": ["Noto-Regular"],
        "text-letter-spacing": 0.3,
        "text-padding": 2,
        "text-size": {"stops": [[0, 10], [4, 11], [5, 12], [7, 14], [8, 16]]},
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "hsl(0, 0%, 100%)",
        "text-halo-color": "hsl(200, 1%, 30%)",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "Places - Capital",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "minzoom": 3,
      "maxzoom": 15,
      "filter": [
        "any",
        [
          "all",
          [">=", ["zoom"], 3],
          ["!=", ["get", "name"], " "],
          ["has", "icon"],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          ["==", ["get", "capital"], "country"]
        ],
        [
          "all",
          [">=", ["zoom"], 8],
          ["!=", ["get", "name"], " "],
          ["==", ["get", "category"], "settlement"],
          ["==", ["get", "subcategory"], "city"],
          ["==", ["get", "capital"], "country"]
        ]
      ],
      "layout": {
        "icon-image": "{icon}",
        "icon-offset": [0, 2.5],
        "icon-padding": 0.5,
        "icon-size": ["step", ["zoom"], 0.7, 5, 0.9, 6, 1, 8, 0],
        "symbol-placement": "point",
        "symbol-sort-key": [
          "+",
          ["length", ["get", "name"]],
          ["*", ["get", "priority"], 100]
        ],
        "symbol-spacing": 250,
        "text-anchor": "center",
        "text-field": "{name}",
        "text-font": ["Noto-Bold"],
        "text-justify": "auto",
        "text-letter-spacing": 0.05,
        "text-radial-offset": ["step", ["zoom"], 0.62, 8, 0],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          3,
          12,
          8,
          18,
          15,
          25
        ],
        "text-variable-anchor": ["top", "bottom", "left", "right"]
      },
      "paint": {
        "text-color": "hsl(0, 0%, 98%)",
        "text-halo-blur": 0.5,
        "text-halo-color": "hsl(210, 2%, 10%)",
        "text-halo-width": 1.2
      }
    },
    {
      "id": "Places - Country name",
      "type": "symbol",
      "metadata": {"group": "places_label"},
      "source": "vectorTiles",
      "source-layer": "places",
      "filter": ["all", ["!=", "name", " "], ["==", "category", "country"]],
      "layout": {
        "symbol-placement": "point",
        "text-field": "{name}",
        "text-font": ["Noto-Medium"],
        "text-letter-spacing": 0.05,
        "text-max-width": 8,
        "text-padding": 2,
        "text-size": {
          "stops": [[0, 10], [4, 14], [5, 16], [6, 18], [7, 20], [8, 24]]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "hsla(0, 0%, 98%, 1)",
        "text-halo-color": "hsl(0, 0%, 0%)",
        "text-halo-width": {"stops": [[1, 0.75], [5, 1]]}
      }
    }
  ],
  "id": "p8hsokg85"
}

export default satelliteConfig;