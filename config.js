var config = {
    style: 'mapbox://styles/zacstanley/ckx3g4nux53vs14lgfdzel31p',
    accessToken: 'pk.eyJ1IjoiemFjc3RhbmxleSIsImEiOiJCS20zaVR3In0._oaGhAVLz04gbE3M2HKHGA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The United States as Viewed by California (very unofficial)',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Zac Stanley for New Maps Plus, MAP701 Final Project',
     footer: 'Sources: <a href="https://collections.leventhalmap.org/search/commonwealth:st74cw264">Norman B. Leventhal Map Center Collection</a> <br> Jeremy Crampton, “The Power of Maps,” in Paul Cloke, Philip Crang, and Mark Goodwin, eds., Introducing Human Geographies (Routledge, 2013) <br> Judith Tyner, “Persuasive Cartography,” in Mark Monmonier, ed., The History of Cartography, vol. 6 (University of Chicago Press, 2015)'
    ,
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'This map by Ernest Dudley Chase was published in 1940',
            //image: './path/to/image/source.png',
            description: "It uses many cartographic techniques that summarize what I assume to be Chase's absorbing of the way California was being presented in the culture at the time. Chase employs many themes explored throughout MAP701, in an openly intentional and satirical way. The title and notes on the map provide an introduction to this. The map uses  distortion to suggest California's outsized role in the economy and culture of the U.S.. Finally, Chase uses symbology to what could be considered a melodramatic effect. Spiderwebs envelope most of the country; planes and trains simply view this area as one to be passed through. The result of this is a cartographic curiosity that, if nothing else was making fun of the way California was being marketed and mythologized to the rest of the country",
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
            id: 'title1',
            alignment: 'right',
            hidden: false,
            title: 'Distortion was intentional and persuasion was deliberate',
            //image: './path/to/image/source.png',
            description: "The title of the map states Chase's intention unequivocally in the text when it says 'Distorted and Drawn by'. Tyner notes that 'Unless the map author provided notes for the map, which is rarely the case, there is usually no reliable way to determine whether the persuasion was deliberate'. Not so here. She goes on to say that 'the cartographer's intent is most easily identified in the text and title of the map.' <br><br> <b>How does Chase know what Californian's think about about the rest of the United States?</b><br> I think it's worth considering what moved Chase to make this map. 1940 was before the defense boom spurred on by World War II took hold in southern California, really it was a place known for tourism, the film industry and citrus fruit, this is evidenced in the map as well. Why then all of the cartographic hyperbole suggesting Californian's perception? Perhaps Chase trying to consolidate what advertisers were selling about California and what his fellow New Englander's relayed to him upon return from their sun and surf filled vacations? ",
            location: {
                center: [-103.376, 17.243],
                zoom: 4.94,
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
            id: 'projections',
            alignment: 'right',
            hidden: false,
            title: "Using map projections to minimize equal representation as a technique",
            //image: './path/to/image/source.png',
            description: "California takes up roughly 1/3 of the U.S. in this map. In distorting California to consume so much map space, Chase is suggesting the outsize role that Californian's have of themselves in relation to the rest of the country. The effectiveness of this as a technique is supported by Crampton when he quotes Arno Peters in describing the Mercator projection, saying 'this geographical view of the world is designed to eternalize the personal overestimation of the white man'. Essentially, Chase uses the relative size of the state to show Californian's as overestimating themselves.",
            location: {
                center: [-97.564, 38.844],
                zoom: 4.12,
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
            id: 'symbology1',
            alignment: 'left',
            hidden: false,
            title: "'Map symbology is a very important part of the power of maps. Sometimes this is very explicit and almost impossible to miss' - Crampton",
            //image: './path/to/image/source.png',
            description: "This map is laden with impossible to miss examples of symbology. It uses commonly understood facts and hyperbole about California to 'support and highlight positive virtues' as Crampton calls them. Consider the person holding olives the size of watermelons called 'Super colossal Olives' or the label 'Oranges that ARE ORANGES!'",
            location: {
                center: [-106.906, 28.436],
                zoom: 6.00,
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
            id: 'symbology2',
            alignment: 'left',
            hidden: false,
            title: "Symbology continued",
            //image: './path/to/image/source.png',
            description: "The image of a train called 'California's fast Fruit and Vegetable Special' carrying produce that stretches out over the length of three plus states uses symbology to push the narrative of California's outsized role in the U.S. economy, especially as it relates agricultural exports.",
            location: {
                center: [-92.510, 30.374],
                zoom: 6.45,
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
            id: 'symbology3',
            alignment: 'right',
            hidden: false,
            title: "Symbology continued",
            //image: './path/to/image/source.png',
            description: "Finally, this symbology pushes the well known myth that in California the sun shines every day. It does so by employing a zen'd out (long before zen was fashionable) sun whose rays cleanly stop at the states eastern and western borders. Meanwhile, the rest of the U.S. is bleak, shrouded in clouds and icicles",
            location: {
                center: [-101.797, 53.770],
                zoom: 5.00,
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
            id: 'takingSides',
            alignment: 'right',
            hidden: false,
            title: "The map, though satirical leans on the propaganda cartographers toolkit",
            //image: './path/to/image/source.png',
            description: "Tyner notes that 'following the rules of propaganda, the cartographer will use stereotypes, name calling, selection, lying, repetition and assertion'. This section of the map uses selection. Though the focus of the map is California, Chase gives slightly more map space than the rest of the country to New England, presumably this is because he hails from there. <br> He notes 'New England! Kissed by the sun part of the time. After all, many Californian's and their forebears came from this section'. This example along with the projection example detailed previously highlight explicit choices Chase made to do what Crampton describes as 'framing the narrative' about his understanding of how Californian's see themselves and potentially his loyalty to New England.",
            location: {
                center: [-71.307, 51.499],
                zoom: 5.00,
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
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion',
            //image: './path/to/image/source.png',
            description: "This map is effective and it highglights many of the themes explored in MAP701. These include, direct language, distortion to emphasize some areas and minimize others, the use of explicit symbology to amplify existing perceptions, and carotgraphic selection to frame a specific narrative. The sum of these techniques result in a map that push the myths and truth's of California.",
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
        
    ]
};
