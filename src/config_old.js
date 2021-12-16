var config = {
    style: 'mapbox://styles/zacstanley/ckx3g4nux53vs14lgfdzel31p',
    accessToken: 'pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The United States as Viewed by California (very unofficial)',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Zac Stanley for MAP701 Final Project',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'This map by Ernest Dudley Chase was published in 1940.......',
            //image: './path/to/image/source.png',
            description: "It uses many cartographic techniques that summarize what I assume to be Chase's absorbing of the way California was being presented in the culture at the time. Dudley employs many themes explored throughout MAP701, though in an openly intentional and satirical way. The title and notes on the map provide an introduction to this intent. The map uses projections and distortions to suggest California's outsized role in economy and culture of the U.S.. Finally, he uses symbology to what could be considered a melodramatic effect. Spiderwebs envelope most of the country and planes and trains simply view this area as one to be passed through. The result of this is a cartographic curiosity that, depending on the reader could have resulted in the creation of new knowledge or at minimum framed a certain narrative.",
            location: {
                center: [-95.361, 43.755],
                zoom: 2.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'mapTitle',
            alignment: 'right',
            hidden: false,
            title: 'Distortion was intentional and persuasion was deliberate....',
            description: "The title of the map states Chase's intention unequivocally in the text when it says 'Distorted and Drawn by'. Tyner notes that 'Unless the map author provided notes for the map, which is rarely the case, there is usually no reliable way to determine whether the persuasion was deliberate'. Not so here. She goes on to say that 'the cartographer's intent is most easily identified in the text and title of the map.'",
            
           
            location: {
                center: [-103.376, 17.243],
                zoom: 4.94
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'mapTitle',
            alignment: 'right',
            hidden: false,
            title: "How does Chase know what Californian's think about about the rest of the United States? ",
            description: "I think it's worth considering what moved Chase to make this map. 1940 was before the defense boom spurred on by World War II took hold in southern California, really it was a place known for tourism, the film industry and citrus fruit and this is evidenced in the map. Why then all of the cartographic hyperbole suggesting Californian's perception? Perhaps Chase trying to consolidate what advertisers were selling about California and what his fellow New Englander's relayed to him upon return from their sun and surf filled vacations." ,
            location: {
                center: [-103.376, 17.243],
                zoom: 4.94
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mapTitle',
            alignment: 'left',
            hidden: false,
            title: "Using map projections to minimize  equal representation as a technique",
            description: "I think it's worth considering what moved Chase to make this map. 1940 was before the defense boom spurred on by World War II took hold in southern California, really it was a place known for tourism, the film industry and citrus fruit and this is evidenced in the map. Why then all of the cartographic hyperbole suggesting Californian's perception? Perhaps Chase trying to consolidate what advertisers were selling about California and what his fellow New Englander's relayed to him upon return from their sun and surf filled vacations." ,
            location: {
                center: [-95.361, 43.755],
                zoom: 2.8
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'This map by Ernest Dudley Chase was published in 1940.......',
            //image: './path/to/image/source.png',
            description: "It uses many cartographic techniques that summarize what I assume to be Chase's absorbing of the way California was being presented in the culture at the time. Dudley employs many themes explored throughout MAP701, though in an openly intentional and satirical way. The title and notes on the map provide an introduction to this intent. The map uses projections and distortions to suggest California's outsized role in economy and culture of the U.S.. Finally, he uses symbology to what could be considered a melodramatic effect. Spiderwebs envelope most of the country and planes and trains simply view this area as one to be passed through. The result of this is a cartographic curiosity that, depending on the reader could have resulted in the creation of new knowledge or at minimum framed a certain narrative.",
            location: {
                center: [-94.957, 38.933],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
]       
};
