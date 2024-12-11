import { atom } from "jotai";

export const mediaAtom = atom([
    {
        "title": "Fight Club",
        "mediaType": "movie",
        "description": "A depressed man forms an underground fight club with a soap salesman to challenge the societal norms, which spirals out of control.",
        "genres": ["Drama", "Action", "Thriller"],
        "directors": ["David Fincher"],
        "writers": ["Chuck Palahniuk (novel)", "Jim Uhls (screenplay)"],
        "stars": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        "rating": 8.8,
        "year": 1999,
        "runtime": "2h 19m",
        "parental_guide_rating": "R",
        "match_percentage": 95,
        "cover_image": "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        "banner_image": "https://www.mensjournal.com/.image/MTk2MTM2Nzc1MjQ5MjQxNjA1/fight-club-mainer-main.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/SUXWAEX2jlg",
            "https://www.youtube-nocookie.com/embed/qtRKdVHc6JY"
        ],
        "general_consensus": "A gritty and thought-provoking film that critiques modern consumer culture while providing a twisted, unforgettable narrative.",
        "reviews": [
            {
                "author": "John Doe",
                "rating": 5.0,
                "message": "A masterpiece that blends dark humor with deep philosophical questions."
            },
            {
                "author": "Jane Smith",
                "rating": 4.7,
                "message": "A challenging and mind-bending experience, though not for everyone."
            },
            {
                "author": "Alex Johnson",
                "rating": 4.9,
                "message": "An intense, exhilarating ride that redefines what a film can be."
            }
        ]
    },
    {
        "title": "Conclave",
        "mediaType": "movie",
        "description": "In a time of crisis, a group of cardinals gather to elect a new pope, facing the intense pressure of secrecy, power, and their own personal dilemmas.",
        "genres": ["Drama", "Mystery", "Thriller"],
        "directors": ["Rolando Colla"],
        "writers": ["Gianrico Carofiglio (novel)", "Andrea Porporati"],
        "stars": ["Fabrizio Gifuni", "Thomas Schmauser", "Remo Girone"],
        "rating": 3.25, // made up
        "year": 2024,
        "runtime": "1h 38m",
        "parental_guide_rating": "PG-13",
        "match_percentage": 78,
        "cover_image": "https://image.tmdb.org/t/p/original/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg",
        "banner_image": "https://m.media-amazon.com/images/M/MV5BNGM4OGNiODUtZWQxYy00ZWYwLWI0ODUtZGU5NjYxYjJkOTgyXkEyXkFqcGdeQWFybm8@._V1_.jpg",
        "alreadyWatched": false,
        "onWatchlist": true,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/qkS7yZt8aMk",
            "https://www.youtube-nocookie.com/embed/K8B4kIzRdcg"
        ],
        "general_consensus": "A tense and atmospheric political drama, though the slow pacing may limit its appeal to a broader audience.",
        "reviews": [
            {
                "author": "John Doe",
                "rating": 4.5,
                "message": "An intriguing glimpse into the complexities of power within the Church, though a bit too slow for my taste."
            },
            {
                "author": "Jane Smith",
                "rating": 4.0,
                "message": "A strong, atmospheric drama that takes its time to build tension, but it pays off in the end."
            }
        ]
    },
    {
        "title": "The Maze Runner",
        "mediaType": "movie",
        "description": "A group of teens wake up in a mysterious maze with no memory of the outside world. They must work together to escape and uncover the truth behind the maze.",
        "genres": ["Action", "Adventure", "Sci-Fi"],
        "directors": ["Wes Ball"],
        "writers": ["James Dashner (novel)", "Noah Oppenheim (screenplay)"],
        "stars": ["Dylan O'Brien", "Kaya Scodelario", "Thomas Brodie-Sangster"],
        "rating": 3.4, // made up
        "year": 2014,
        "runtime": "1h 53m",
        "parental_guide_rating": "PG-13",
        "match_percentage": 80,
        "cover_image": "https://image.tmdb.org/t/p/original/ode14q7WtDugFDp78fo9lCsmay9.jpg",
        "banner_image": "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/9/17/1410979503316/c74d8a19-c691-4d7f-ab6a-5cf9742603d4-1020x612.png",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/64-iSYVmJ2Y",
            "https://www.youtube-nocookie.com/embed/mS0wYbAMtZI"
        ],
        "general_consensus": "A gripping, fast-paced adventure that introduces a fresh take on dystopian thrillers, though its pacing can feel uneven at times.",
        "reviews": [
            {
                "author": "John Doe",
                "rating": 4.7,
                "message": "An exciting and suspenseful adventure that keeps you hooked till the very end."
            },
            {
                "author": "Jane Smith",
                "rating": 4.0,
                "message": "Great premise, but the world-building could have been deeper."
            }
        ]
    },
    {
        "title": "Inception",
        "mediaType": "movie",
        "description": "A thief who enters the dreams of others to steal secrets must plant an idea in someone's mind for a chance at redemption.",
        "genres": ["Action", "Adventure", "Sci-Fi"],
        "directors": ["Christopher Nolan"],
        "writers": ["Christopher Nolan"],
        "stars": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "rating": 4.8,
        "year": 2010,
        "runtime": "2h 28m",
        "parental_guide_rating": "PG-13",
        "match_percentage": 87,
        "cover_image": "https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        "banner_image": "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png?format=2500w",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/YoHD9XEInc0",
            "https://www.youtube-nocookie.com/embed/d3A3-zSOBT4",
            "https://www.youtube-nocookie.com/embed/66TuSJo4dZM",
            "https://www.youtube-nocookie.com/embed/8hP9D6kZseM",
            "https://www.youtube-nocookie.com/embed/U8ZsUivELbs"
        ],
        "general_consensus": "A visually stunning and intellectually ambitious heist thriller, 'Inception' is a masterpiece of modern cinema.",
        "reviews": [
            {
                "author": "John Doe",
                "rating": 5.0,
                "message": "A brilliant and mind-bending experience that redefines the boundaries of filmmaking."
            },
            {
                "author": "Jane Smith",
                "rating": 4.5,
                "message": "Exceptional direction and stunning visuals, though the story can be a bit complex at times."
            },
            {
                "author": "Alex Johnson",
                "rating": 5,
                "message": "Christopher Nolan's magnum opus is a feast for the eyes and the mind."
            },
            {
                "author": "Emily Davis",
                "rating": 4.5,
                "message": "A rollercoaster ride of emotions and suspense. Highly recommended!"
            },
            {
                "author": "Michael Brown",
                "rating": 4.5,
                "message": "Inception delivers an unforgettable cinematic experience that keeps you thinking long after it ends."
            }
        ]
    },
    {
        "title": "Gladiator II",
        "mediaType": "movie",
        "description": "Sixteen years after the death of Marcus Aurelius, Rome is ruled by the corrupt twin emperors Geta and Caracalla. Aurelius' grandson, Lucius Verus Aurelius, lives under the alias \"Hanno\" with his wife, Arishat, in Numidia. General Acacius' Roman army invades and conquers the city, killing Arishat and enslaving Lucius. To advertise the slaves as potential gladiators, the Romans pit them against feral baboons. Lucius savagely kills a baboon, impressing the stable master Macrinus, who promises Lucius an opportunity to kill Acacius if he wins enough fights in Rome.",
        "genres": ["Action", "Drama", "Adventure"],
        "directors": ["Ridley Scott"],
        "writers": ["David Franzoni", "John Logan", "Ridley Scott"],
        "stars": ["Denzel Washington", "Pedro Pascal", "Connie Nielsen", "Paul Mescal"],
        "rating": 4.3, // estimated rating based on early reviews
        "year": 2024,
        "runtime": "2h 45m",
        "parental_guide_rating": "R",
        "match_percentage": 88,
        "cover_image": "https://image.tmdb.org/t/p/original/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "banner_image": "https://knightedgemedia.com/wp-content/uploads/2024/07/gladiator2-full-theatrical-trailer-banner.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/YZf8zpchbXE",
        ],
        "general_consensus": "A highly anticipated sequel that dives deep into the political machinations of the Roman Empire while delivering intense action sequences and emotional drama.",
        "reviews": [
            {
                "author": "MJordn95",
                "rating": 5.0,
                "message": "Ridley Scott does it again! This sequel perfectly continues from his last film and brings the glory of Gladiator to the silver screen."
            },
            {
                "author": "KinoLiebe47",
                "rating": 4,
                "message": "A solid film. Some historical inaccuracies here and there but you have to suspend your disbelief for a moment in any fictional story."
            },
            {
                "author": "bond007blonde",
                "rating": 4.5,
                "message": "Love seeing Denzel on the screen! I hope him or Idris Elba become the next Bond :)"
            },
            {
                "author": "GladVlad7",
                "rating": 3,
                "message": "I thought it was just okay. A little disappointed coming from the first movie, but nonetheless an experience."
            },
            {
                "author": "RealLegionnaire476",
                "rating": 4.0,
                "message": "Squalos... In colosseo? Certe historica bella navalia... sed squalis? Gravissime? Ave imperator, in morte te salutant!"
            }
        ]
    },
    {
        "title": "You Don't Mess with the Two Bromine",
        "mediaType": "movie",
        "description": "When 5 Carbon atoms, 8 Hydrogen atoms, and Bromine get involved, you get 2 Bromine! Atom Sandler and Carl Jacob Lowig team up in this film to make the comedy duo you never knew you needed! After a collision between numerous atoms, the two bromine brothers rise from the ashes and must find who caused their creation. With help from guest star brothers Seth Rogen and Joe Rogan, the two bromine are out for blood!",
        "genres": ["Comedy", "Action", "Adventure"],
        "directors": ["Atom Sandler", "Francis Coppola", "NileRed"],
        "writers": ["Atom Sandler", "Slavoj Zizek"],
        "stars": ["Atom Sandler", "Seth Rogen", "Joe Rogan"],
        "rating": 5,
        "year": 2044,
        "runtime": "4h 23m",
        "parental_guide_rating": "R",
        "match_percentage": 100,
        "cover_image": "/covers/bromine23.png",
        "banner_image": "",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "",
        "reviews": [
            {
                "author": "John Doe",
                "rating": 5.0,
                "message": "A brilliant and mind-bending experience that redefines the boundaries of filmmaking."
            },
            {
                "author": "Jane Smith",
                "rating": 4.5,
                "message": "Exceptional direction and stunning visuals, though the story can be a bit complex at times."
            },
            {
                "author": "Alex Johnson",
                "rating": 4.8,
                "message": "Christopher Nolan's magnum opus is a feast for the eyes and the mind."
            },
            {
                "author": "Emily Davis",
                "rating": 4.7,
                "message": "A rollercoaster ride of emotions and suspense. Highly recommended!"
            },
            {
                "author": "Michael Brown",
                "rating": 4.6,
                "message": "Inception delivers an unforgettable cinematic experience that keeps you thinking long after it ends."
            }
        ]
    },
    {
        "title": "The Hurt Locker",
        "mediaType": "movie",
        "description": "During the Iraq War, an elite Army bomb squad unit must come together in a city where everyone is a potential enemy, and every object could be a deadly bomb. The story follows Staff Sergeant William James, whose unorthodox methods put him at odds with his team as they navigate the high-stakes world of bomb disposal.",
        "genres": ["Drama", "War", "Thriller"],
        "directors": ["Kathryn Bigelow"],
        "writers": ["Mark Boal"],
        "stars": ["Jeremy Renner", "Anthony Mackie", "Brian Geraghty", "Guy Pearce", "Ralph Fiennes"],
        "rating": 4.5,
        "year": 2008,
        "runtime": "2h 11m",
        "parental_guide_rating": "R",
        "match_percentage": 92,
        "cover_image": "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/189/2024/11/18151844/m2duGsKjBOl3BB8uFOTnRUzdEhg.jpg",
        "banner_image": "https://lightbox-prod.imgix.net/images/assets/BANNER_LANDSCAPE_mac_10224148_60255B80-AB58-465D-8FEB55169378A26A.jpg",
        "alreadyWatched": true,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/AIbFvqFYRT4"
        ],
        "general_consensus": "A gripping and intense war drama that masterfully portrays the psychological toll of war while delivering high-stakes action and suspense.",
        "reviews": [
            {
                "author": "FilmBuff123",
                "rating": 5.0,
                "message": "Kathryn Bigelow's direction is phenomenal. The Hurt Locker is one of the best war movies of our time."
            },
            {
                "author": "ActionFan88",
                "rating": 4.5,
                "message": "The intensity never lets up, and Jeremy Renner's performance is simply outstanding."
            },
            {
                "author": "CinemaCritique74",
                "rating": 4.0,
                "message": "A thought-provoking and well-executed look at the Iraq War. Some parts felt a bit exaggerated but overall excellent."
            },
            {
                "author": "VeteranVoice47",
                "rating": 3.5,
                "message": "While the drama and action are compelling, the portrayal of bomb disposal teams isn't entirely realistic."
            },
            {
                "author": "EpicFilmLover",
                "rating": 4.5,
                "message": "The Hurt Locker keeps you on the edge of your seat. A must-watch for fans of realistic war thrillers."
            }
        ]
    },
    {
        "title": "Fury",
        "mediaType": "movie",
        "description": "In the final days of World War II, a battle-hardened Army sergeant named Don 'Wardaddy' Collier commands a Sherman tank and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds as they fight their way across Germany.",
        "genres": ["Action", "Drama", "War"],
        "directors": ["David Ayer"],
        "writers": ["David Ayer"],
        "stars": ["Brad Pitt", "Shia LaBeouf", "Logan Lerman", "Michael Peña", "Jon Bernthal"],
        "rating": 4.2,
        "year": 2014,
        "runtime": "2h 14m",
        "parental_guide_rating": "R",
        "match_percentage": 90,
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Fury_2014_poster.jpg/220px-Fury_2014_poster.jpg",
        "banner_image": "https://lightbox-prod.imgix.net/images/assets/BANNER_WIDE_mac_10554266_777E0FC7-B171-4BD5-931C2DC3F29F22B1.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/q94n3eWOWXM"
        ],
        "general_consensus": "A gritty and intense war drama showcasing the harsh realities of combat through stellar performances and visceral action sequences.",
        "reviews": [
            {
                "author": "WarMovieFan92",
                "rating": 5.0,
                "message": "Fury delivers an unflinching look at war with incredible performances, especially from Brad Pitt and Logan Lerman."
            },
            {
                "author": "TankBuff007",
                "rating": 4.5,
                "message": "The tank battles are thrilling and realistic. A must-watch for anyone interested in World War II history."
            },
            {
                "author": "CriticOnFilm",
                "rating": 4.0,
                "message": "A powerful film that balances action with emotional depth, though it occasionally relies on war movie clichés."
            },
            {
                "author": "CinemaGeek",
                "rating": 3.5,
                "message": "Good action and performances, but some parts felt a bit predictable. Still a solid war movie."
            },
            {
                "author": "MovieFanatic101",
                "rating": 4.0,
                "message": "Fury is intense, gritty, and emotional—a great addition to the war movie genre."
            }
        ]
    },
    {
        "title": "Wicked",
        "mediaType": "movie",
        "description": "Before Dorothy arrives, two young women meet in the Land of Oz. One, born with emerald-green skin, is smart, fiery, and misunderstood. The other is beautiful, ambitious, and popular. *Wicked* explores the untold story of the witches of Oz and their unlikely friendship as they navigate love, betrayal, and the forces that shape their destinies.",
        "genres": ["Musical", "Fantasy", "Drama"],
        "directors": ["Jon M. Chu"],
        "writers": ["Winnie Holzman", "Stephen Schwartz"],
        "stars": ["Ariana Grande", "Cynthia Erivo", "Jonathan Bailey", "Jeff Goldblum"],
        "rating": 4.7,
        "year": 2024,
        "runtime": "2h 40m",
        "parental_guide_rating": "PG-13",
        "match_percentage": 95,
        "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKiTPhoKd66UuI3A2GDTzutcE8AipmgaPkw&s",
        "banner_image": "https://movies.universalpictures.com/media/05-wkd-dm-mobile-banner-1080x745-now-rr-f01-111524-6741160ddc91b-1.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/G-OnUavOiIQ"
        ],
        "general_consensus": "A magical and heartfelt adaptation of the beloved Broadway musical, capturing the essence of the original while adding cinematic grandeur.",
        "reviews": [
            {
                "author": "BroadwayLover99",
                "rating": 5.0,
                "message": "A spectacular adaptation! The performances by Cynthia Erivo and Ariana Grande are breathtaking."
            },
            {
                "author": "FilmFanatic88",
                "rating": 4.5,
                "message": "Visually stunning with incredible music. A must-watch for fans of the musical."
            },
            {
                "author": "WizardofOzCritic",
                "rating": 4.0,
                "message": "A solid adaptation that stays true to the essence of the stage production, though some scenes feel a bit drawn out."
            },
            {
                "author": "FantasyFilmFan",
                "rating": 4.0,
                "message": "The Land of Oz comes alive like never before. Great performances and direction make this a magical experience."
            },
            {
                "author": "MusicIsLife",
                "rating": 4.5,
                "message": "The soundtrack alone is worth it. Hearing 'Defying Gravity' on the big screen is a dream come true!"
            }
        ]
    },
    {
        "title": "Deadpool & Wolverine",
        "mediaType": "movie",
        "description": "In the highly anticipated sequel, Deadpool teams up with Wolverine for a chaotic adventure through time, space, and alternate dimensions. As the fourth wall shatters like never before, the Merc with a Mouth and the adamantium-clawed mutant face unexpected foes and hilariously bizarre situations.",
        "genres": ["Action", "Comedy", "Superhero"],
        "directors": ["Shawn Levy"],
        "writers": ["Rhett Reese", "Paul Wernick", "Shawn Levy"],
        "stars": ["Ryan Reynolds", "Hugh Jackman", "Jennifer Garner", "Matthew Macfadyen"],
        "rating": 4.6,
        "year": 2024,
        "runtime": "2h 18m",
        "parental_guide_rating": "R",
        "match_percentage": 93,
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
        "banner_image": "https://preview.redd.it/deadpool-and-wolverine-textless-banner-wallpaper-v0-vs0sop0uel1d1.png?width=1080&crop=smart&auto=webp&s=4a91a3c67ea7fd049df61eb525ae81a60c14aec2",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/73_1biulkYk"
        ],
        "general_consensus": "A wildly entertaining mix of action and comedy, *Deadpool 3* elevates the series with the addition of Hugh Jackman as Wolverine and its daring, irreverent storytelling.",
        "reviews": [
            {
                "author": "MarvelManiac88",
                "rating": 5.0,
                "message": "The dynamic between Deadpool and Wolverine is everything fans hoped for and more!"
            },
            {
                "author": "ComicBookCritic",
                "rating": 4.5,
                "message": "Hilarious and action-packed. Ryan Reynolds and Hugh Jackman are a perfect duo."
            },
            {
                "author": "FilmCritic21",
                "rating": 4.0,
                "message": "Great movie overall, though some of the humor felt a bit over the top at times."
            },
            {
                "author": "ActionFan32",
                "rating": 4.5,
                "message": "The fight scenes are incredible, and the fourth-wall breaks are next-level."
            },
            {
                "author": "SuperHeroFanatic",
                "rating": 4.7,
                "message": "An epic Marvel movie with tons of laughs, action, and surprises!"
            }
        ]
    },
    {
        "title": "Deadpool",
        "mediaType": "movie",
        "description": "Wade Wilson, a former special forces operative turned mercenary, undergoes an experiment that leaves him with accelerated healing powers but severe disfigurement. Armed with his twisted sense of humor, he sets out to hunt down the man responsible for ruining his life.",
        "genres": ["Action", "Comedy", "Adventure"],
        "directors": ["Tim Miller"],
        "writers": ["Rhett Reese", "Paul Wernick"],
        "stars": ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller", "Ed Skrein", "Gina Carano"],
        "rating": 4.6,
        "year": 2016,
        "runtime": "1h 48m",
        "parental_guide_rating": "R",
        "match_percentage": 93,
        "cover_image": "https://i.ebayimg.com/images/g/RaQAAOSwr7ZW71CS/s-l1200.jpg",
        "banner_image": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/12/11/deadpool.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/ONHBaC-pfsk"
        ],
        "general_consensus": "An irreverent, action-packed adventure with a perfect blend of humor, violence, and heart, brought to life by Ryan Reynolds' iconic performance.",
        "reviews": [
            {
                "author": "SuperheroFan24",
                "rating": 5.0,
                "message": "Deadpool redefines superhero movies with its humor and unique storytelling."
            },
            {
                "author": "ComedyCritic101",
                "rating": 4.5,
                "message": "A hilarious and action-packed film that doesn't take itself too seriously."
            },
            {
                "author": "MovieBuff99",
                "rating": 4.0,
                "message": "A breath of fresh air in the superhero genre, though the humor may not be for everyone."
            },
            {
                "author": "ActionJunkie88",
                "rating": 4.5,
                "message": "The perfect mix of action and comedy. Ryan Reynolds was born to play Deadpool."
            },
            {
                "author": "CasualViewer123",
                "rating": 4.0,
                "message": "It's fun, over-the-top, and wildly entertaining. Definitely worth a watch."
            }
        ]
    },
    {
        "title": "Logan",
        "mediaType": "movie",
        "description": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. However, Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
        "genres": ["Action", "Drama", "Science Fiction"],
        "directors": ["James Mangold"],
        "writers": ["Scott Frank", "James Mangold", "Michael Green"],
        "stars": ["Hugh Jackman", "Patrick Stewart", "Dafne Keen", "Boyd Holbrook", "Stephen Merchant"],
        "rating": 4.8,
        "year": 2017,
        "runtime": "2h 17m",
        "parental_guide_rating": "R",
        "match_percentage": 97,
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Logan_2017_poster.jpg/220px-Logan_2017_poster.jpg",
        "banner_image": "https://tommygirard.wordpress.com/wp-content/uploads/2017/03/logan-movie-poster-1.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/Div0iP65aZo"
        ],
        "general_consensus": "An emotional and raw conclusion to Wolverine's journey, *Logan* delivers powerful storytelling, intense action, and a gripping farewell to one of Marvel's most iconic heroes.",
        "reviews": [
            {
                "author": "MarvelFan21",
                "rating": 5.0,
                "message": "Logan is not just a superhero movie, it's a heartfelt drama that stays with you long after the credits roll."
            },
            {
                "author": "XMenLover",
                "rating": 4.8,
                "message": "A brilliant send-off for Hugh Jackman's Wolverine. Emotional and action-packed."
            },
            {
                "author": "FilmCriticJoe",
                "rating": 4.5,
                "message": "A darker, grittier take on the superhero genre. Logan is a masterpiece."
            },
            {
                "author": "SciFiFan99",
                "rating": 4.7,
                "message": "It's Wolverine like you've never seen him before. Brutal and beautiful."
            },
            {
                "author": "CasualCinemaGoer",
                "rating": 4.5,
                "message": "A must-watch for fans and non-fans alike. Logan transcends its genre."
            }
        ]
    },
    {
        "title": "Breaking Bad",
        "mediaType": "tv",
        "description": "A high school chemistry teacher turned methamphetamine producer partners with a former student to create a criminal empire while battling personal and professional challenges.",
        "genres": ["Crime", "Drama", "Thriller"],
        "directors": ["Vince Gilligan"],
        "writers": ["Vince Gilligan"],
        "stars": ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris", "Bob Odenkirk"],
        "rating": 4.9,
        "year": 2008,
        "runtime": "S5 E62",
        "parental_guide_rating": "TV-MA",
        "match_percentage": 98,
        "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s",
        "banner_image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7e4abe-8847-4e05-a39a-26790d0cc2c1/d5628z3-4c1941a4-1f8a-4c3a-afc1-f1e2d83b68ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2U0YWJlLTg4NDctNGUwNS1hMzlhLTI2NzkwZDBjYzJjMVwvZDU2Mjh6My00YzE5NDFhNC0xZjhhLTRjM2EtYWZjMS1mMWUyZDgzYjY4ZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vagRzQF0N1Xs_jnF12Cy3aFNtIouU09tZ9TBNixygxw",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/HhesaQXLuRY"
        ],
        "general_consensus": "One of the most gripping and critically acclaimed dramas ever made, with masterful performances and edge-of-your-seat storytelling.",
        "reviews": [
            {
                "author": "CrimeDramaLover",
                "rating": 5.0,
                "message": "Bryan Cranston's portrayal of Walter White is unmatched. This is a modern classic."
            },
            {
                "author": "ThrillerAddict",
                "rating": 4.8,
                "message": "The character development is unparalleled. An absolute masterpiece. Bravo Vince"
            }
        ]
    },
    {
        "title": "Better Call Saul",
        "mediaType": "tv",
        "description": "A prequel to Breaking Bad, this series follows the transformation of Jimmy McGill into the morally challenged lawyer Saul Goodman.",
        "genres": ["Crime", "Drama"],
        "directors": ["Vince Gilligan", "Peter Gould"],
        "writers": ["Vince Gilligan", "Peter Gould"],
        "stars": ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks", "Michael Mando"],
        "rating": 4.8,
        "year": 2015,
        "runtime": "S6 E63",
        "parental_guide_rating": "TV-MA",
        "match_percentage": 97,
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/1/1c/Better_Call_Saul_season_1.jpg",
        "banner_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWwRspIhTcw2ygMJXu1pBhrD6Z18LjAAyXg&s",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/l1xIGfVFb-U"
        ],
        "general_consensus": "A nuanced and compelling prequel that enriches the Breaking Bad universe with its own brand of drama and moral complexity.",
        "reviews": [
            {
                "author": "LegalDramaFan",
                "rating": 4.9,
                "message": "Bob Odenkirk and Rhea Seehorn give career-defining performances."
            },
            {
                "author": "PrequelLover",
                "rating": 4.7,
                "message": "A slow burn but incredibly rewarding. One of the best TV dramas ever. Bravo Vince"
            }
        ]
    },
    {
        "title": "Narcos",
        "mediaType": "tv",
        "description": "The story of the rise and fall of Colombian drug kingpins, including the infamous Pablo Escobar, and the law enforcement efforts to take them down.",
        "genres": ["Crime", "Drama", "Biography"],
        "directors": ["Chris Brancato", "Carlo Bernard", "Doug Miro"],
        "writers": ["Chris Brancato", "Carlo Bernard", "Doug Miro"],
        "stars": ["Wagner Moura", "Pedro Pascal", "Boyd Holbrook"],
        "rating": 4.7,
        "year": 2015,
        "runtime": "S3 E30",
        "parental_guide_rating": "TV-MA",
        "match_percentage": 94,
        "cover_image": "https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_.jpg",
        "banner_image": "https://cameronmoviesandtv.wordpress.com/wp-content/uploads/2015/09/narcos-poster.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/xl8zdCY-abw"
        ],
        "general_consensus": "A gripping series that delves into the complexities of the drug trade with authenticity and intense storytelling.",
        "reviews": [
            {
                "author": "HistoricalFan",
                "rating": 4.8,
                "message": "Wagner Moura’s portrayal of Pablo Escobar is incredible. A must-watch for history buffs."
            },
            {
                "author": "DramaAddict99",
                "rating": 4.6,
                "message": "Intense and well-crafted. The storytelling is top-notch."
            }
        ]
    },
    {
        "title": "Prison Break",
        "mediaType": "tv",
        "description": "An engineer deliberately gets himself sent to prison in order to help his wrongfully convicted brother escape, setting off a thrilling chain of events.",
        "genres": ["Action", "Crime", "Drama"],
        "directors": ["Paul Scheuring"],
        "writers": ["Paul Scheuring"],
        "stars": ["Wentworth Miller", "Dominic Purcell", "Sarah Wayne Callies"],
        "rating": 4.5,
        "year": 2005,
        "runtime": "S5 E90",
        "parental_guide_rating": "TV-14",
        "match_percentage": 92,
        "cover_image": "https://i.ebayimg.com/images/g/Q-IAAOxyDgRQ9wHy/s-l500.jpg",
        "banner_image": "https://prison-break.creator-spring.com/_next/image?url=https%3A%2F%2Fteespring-storecontent.s3.amazonaws.com%2F4juN8pwObdOREebkE98dqw_store_banner_image%3F1491371669197&w=3840&q=75",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/AL9zLctDJaU"
        ],
        "general_consensus": "A thrilling and intense series with ingenious twists and compelling characters.",
        "reviews": [
            {
                "author": "ActionLover87",
                "rating": 5.0,
                "message": "The first season is absolutely gripping! One of the best escape plots ever written."
            },
            {
                "author": "DramaQueen19",
                "rating": 4.7,
                "message": "It does slow down in later seasons, but the characters keep you invested."
            },
            {
                "author": "ThrillSeeker",
                "rating": 4.2,
                "message": "Great suspense and action, though some parts are a bit far-fetched."
            }
        ]
    },
    {
        "title": "House",
        "mediaType": "tv",
        "description": "A brilliant but antisocial doctor solves medical mysteries while battling his own demons.",
        "genres": ["Drama", "Mystery"],
        "directors": ["David Shore"],
        "writers": ["David Shore"],
        "stars": ["Hugh Laurie", "Robert Sean Leonard", "Lisa Edelstein"],
        "rating": 4.6,
        "year": 2004,
        "runtime": "S8 E177",
        "parental_guide_rating": "TV-14",
        "match_percentage": 94,
        "cover_image": "https://m.media-amazon.com/images/I/51O1v+q5MUL._AC_UF1000,1000_QL80_.jpg",
        "banner_image": "https://m.media-amazon.com/images/S/aplus-media/sota/4f66290f-d0a9-4bee-945b-e57845a4cb55.__CR0,0,970,300_PT0_SX970_V1___.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/MczMB8nU1sY"
        ],
        "general_consensus": "A compelling medical drama with sharp writing and an unforgettable lead performance.",
        "reviews": [
            {
                "author": "MedicineBuff",
                "rating": 5.0,
                "message": "Hugh Laurie’s performance is phenomenal. A must-watch for fans of medical dramas."
            },
            {
                "author": "MysteryFan91",
                "rating": 4.6,
                "message": "The cases are intriguing, and the character dynamics are fantastic."
            },
            {
                "author": "DramaEnthusiast",
                "rating": 4.5,
                "message": "An addictive watch, although the later seasons are a bit repetitive."
            }
        ]
    },
    {
        "title": "Dexter",
        "mediaType": "tv",
        "description": "A blood-spatter analyst for Miami Metro Police moonlights as a vigilante serial killer, targeting criminals who have evaded justice.",
        "genres": ["Crime", "Drama", "Mystery"],
        "directors": ["James Manos Jr."],
        "writers": ["Jeff Lindsay", "James Manos Jr."],
        "stars": ["Michael C. Hall", "Jennifer Carpenter", "David Zayas"],
        "rating": 4.4,
        "year": 2006,
        "runtime": "S9 E96",
        "parental_guide_rating": "TV-MA",
        "match_percentage": 91,
        "cover_image": "https://m.media-amazon.com/images/I/61HVyYXfpvL._AC_UF894,1000_QL80_.jpg",
        "banner_image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ccd3427-49f2-49d8-8a7c-c51ed9194771/d4n8tks-138677ba-4d09-465d-89b6-0c09143c5f63.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljY2QzNDI3LTQ5ZjItNDlkOC04YTdjLWM1MWVkOTE5NDc3MVwvZDRuOHRrcy0xMzg2NzdiYS00ZDA5LTQ2NWQtODliNi0wYzA5MTQzYzVmNjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Qq1AJ15pPZ2R7dU1IDIytRCmbIePANU5WuZ49fGtC3o",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/YQeUmSD1c3g"
        ],
        "general_consensus": "A dark and thrilling show with an unforgettable antihero, though it struggles to maintain its high quality throughout all seasons.",
        "reviews": [
            {
                "author": "CrimeFanatic",
                "rating": 4.8,
                "message": "The first four seasons are some of the best TV ever made!"
            },
            {
                "author": "SerialDrama",
                "rating": 4.2,
                "message": "Michael C. Hall carries the show, but the finale was a disappointment."
            },
            {
                "author": "DarkThrillerLover",
                "rating": 4.3,
                "message": "A unique concept executed brilliantly, especially in the earlier seasons."
            }
        ]
    },
    {
        "title": "Doctor Who",
        "mediaType": "tv",
        "description": "The adventures of a Time Lord known as the Doctor, who travels through time and space to save civilizations and defeat foes.",
        "genres": ["Adventure", "Drama", "Sci-Fi"],
        "directors": ["Sydney Newman"],
        "writers": ["Sydney Newman", "C. E. Webber", "Donald Wilson"],
        "stars": ["Jodie Whittaker", "David Tennant", "Matt Smith"],
        "rating": 4.7,
        "year": 1963,
        "runtime": "S13 E870",
        "parental_guide_rating": "TV-PG",
        "match_percentage": 95,
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/3/39/Doctor_Who_Series_11.png",
        "banner_image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/83f66663-da4e-4cb4-b822-7feb69345f7f/d2gasc5-3b2c9db6-dc5c-4b75-b3a1-c84193877708.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzZjY2NjYzLWRhNGUtNGNiNC1iODIyLTdmZWI2OTM0NWY3ZlwvZDJnYXNjNS0zYjJjOWRiNi1kYzVjLTRiNzUtYjNhMS1jODQxOTM4Nzc3MDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P9Iu1dkjzYqLT1X3o1T5eSqgwuLMxFOFeEyQSLkgvpY",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/B2ndr6SnILI"
        ],
        "general_consensus": "A groundbreaking and enduring sci-fi series known for its creativity, compelling stories, and iconic lead character.",
        "reviews": [
            {
                "author": "SciFiFanatic",
                "rating": 5.0,
                "message": "An epic series that constantly reinvents itself with every new Doctor."
            },
            {
                "author": "TimeTravelLover",
                "rating": 4.8,
                "message": "Some uneven episodes, but overall, it’s a masterpiece in storytelling."
            },
            {
                "author": "Whovian42",
                "rating": 4.5,
                "message": "Fantastic for longtime fans and newcomers alike!"
            }
        ]
    },
    {
        "title": "Downton Abbey",
        "mediaType": "tv",
        "description": "The lives of the aristocratic Crawley family and their servants unfold in the early 20th century, blending drama, romance, and historical intrigue.",
        "genres": ["Drama", "Historical"],
        "directors": ["Julian Fellowes"],
        "writers": ["Julian Fellowes"],
        "stars": ["Hugh Bonneville", "Maggie Smith", "Michelle Dockery"],
        "rating": 4.6,
        "year": 2010,
        "runtime": "S6 E52",
        "parental_guide_rating": "TV-PG",
        "match_percentage": 92,
        "cover_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81Mr5jFYSS6F3xDPX4Q2ZNNGj0OpYLyp5PA&s",
        "banner_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTA7Eyiu0XCFI2h3HGyInNPXV1XyutlWF7g&s",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/EOM3y4P8TEM"
        ],
        "general_consensus": "A beautifully crafted period drama with engaging characters and rich storytelling.",
        "reviews": [
            {
                "author": "PeriodDramaFan",
                "rating": 4.9,
                "message": "A stunning depiction of early 20th-century England with phenomenal performances."
            },
            {
                "author": "CrawleyAddict",
                "rating": 4.7,
                "message": "Beautifully detailed and deeply emotional."
            },
            {
                "author": "HistoricalBuff88",
                "rating": 4.5,
                "message": "Sometimes a bit slow, but overall a masterpiece of its genre."
            }
        ]
    },
    {
        "title": "Sherlock",
        "mediaType": "tv",
        "description": "A modern adaptation of Arthur Conan Doyle's detective stories, following Sherlock Holmes and Dr. John Watson as they solve mysteries in 21st-century London.",
        "genres": ["Crime", "Drama", "Mystery"],
        "directors": ["Mark Gatiss", "Steven Moffat"],
        "writers": ["Mark Gatiss", "Steven Moffat"],
        "stars": ["Benedict Cumberbatch", "Martin Freeman", "Andrew Scott"],
        "rating": 4.8,
        "year": 2010,
        "runtime": "S4 E13",
        "parental_guide_rating": "TV-14",
        "match_percentage": 96,
        "cover_image": "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg",
        "banner_image": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e6fd3532032273.566b40caa5ef7.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/xK7S9mrFWL4"
        ],
        "general_consensus": "A thrilling and sharp modern take on Sherlock Holmes with captivating performances.",
        "reviews": [
            {
                "author": "MysteryManiac",
                "rating": 5.0,
                "message": "An excellent adaptation with brilliant performances by the entire cast."
            },
            {
                "author": "HolmesFan42",
                "rating": 4.7,
                "message": "Sherlock and Moriarty’s dynamic is absolutely electrifying!"
            },
            {
                "author": "CrimeSeriesAddict",
                "rating": 4.6,
                "message": "A bit inconsistent in later seasons, but still an exceptional show."
            }
        ]
    },
    {
        "title": "Neon Genesis Evangelion",
        "mediaType": "tv",
        "description": "In a post-apocalyptic world, a group of teenagers pilot giant mechs to protect humanity from mysterious beings called Angels.",
        "genres": ["Anime", "Sci-Fi", "Psychological"],
        "directors": ["Hideaki Anno"],
        "writers": ["Hideaki Anno"],
        "stars": ["Megumi Ogata", "Kotono Mitsuishi", "Spike Spencer"],
        "rating": 4.8,
        "year": 1995,
        "runtime": "S1 E26",
        "parental_guide_rating": "TV-MA",
        "match_percentage": 94,
        "cover_image": "https://i.ebayimg.com/images/g/uMUAAOSwyLlXppRj/s-l400.jpg",
        "banner_image": "https://writedrunkeditdrunk.com/wp-content/uploads/2019/10/end-of-evangelion-banner.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [
            "https://www.youtube-nocookie.com/embed/13nSISwxrY4"
        ],
        "general_consensus": "A deeply philosophical and groundbreaking anime that redefined the mecha genre.",
        "reviews": [
            {
                "author": "AnimeFan23",
                "rating": 5.0,
                "message": "A masterpiece of storytelling and character development."
            },
            {
                "author": "EvaPilot",
                "rating": 4.9,
                "message": "The psychological depth and symbolism are unmatched."
            },
            {
                "author": "MechaLover42",
                "rating": 4.7,
                "message": "The ending is divisive, but the journey is unforgettable."
            }
        ]
    },
    {
        "title": "1984",
        "mediaType": "book",
        "description": "In a dystopian future where the government controls every aspect of life, Winston Smith, a low-ranking member of the Party, begins to rebel against the totalitarian regime.",
        "genres": ["Dystopian", "Science Fiction", "Political Fiction"],
        "authors": ["George Orwell"],
        "rating": 4.7,
        "year": 1949,
        "runtime": "328 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 92,
        "cover_image": "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg",
        "banner_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkALv1lX6j8uCuDwSUH0g2GiO1KSvJWULSlg&s",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A chilling portrayal of a totalitarian future, and a brilliant critique of surveillance and censorship.",
        "reviews": [
            {
                "author": "LitFan91",
                "rating": 5.0,
                "message": "A timeless classic that is just as relevant today as when it was first written."
            },
            {
                "author": "PoliticalReader23",
                "rating": 4.8,
                "message": "A haunting look at a world where freedom and privacy are nonexistent."
            },
            {
                "author": "BookLover42",
                "rating": 4.5,
                "message": "A disturbing, thought-provoking novel that makes you question authority."
            }
        ]
    },
    {
        "title": "To Kill a Mockingbird",
        "mediaType": "book",
        "description": "Scout Finch, a young girl in the 1930s South, recounts the story of her father, Atticus Finch, as he defends a black man falsely accused of raping a white woman.",
        "genres": ["Classic", "Historical Fiction"],
        "authors": ["Harper Lee"],
        "rating": 4.9,
        "year": 1960,
        "runtime": "281 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 98,
        "cover_image": "https://m.media-amazon.com/images/I/811NqsxadrS._AC_UF1000,1000_QL80_.jpg",
        "banner_image": "https://truthunites.org/wp-content/uploads/2016/03/showpage-mockingbird.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A beautifully written novel that explores themes of racism, injustice, and moral growth.",
        "reviews": [
            {
                "author": "Bookworm23",
                "rating": 5.0,
                "message": "A masterpiece that continues to resonate with readers of all ages."
            },
            {
                "author": "HistoryLover",
                "rating": 4.9,
                "message": "An unforgettable story that tackles difficult issues with grace and power."
            },
            {
                "author": "Reader22",
                "rating": 4.8,
                "message": "A poignant tale that stays with you long after reading."
            }
        ]
    },
    {
        "title": "The Catcher in the Rye",
        "mediaType": "book",
        "description": "Holden Caulfield, a troubled teenager, narrates his life story as he struggles with identity, depression, and the complexities of adulthood.",
        "genres": ["Classic", "Coming-of-Age"],
        "authors": ["J.D. Salinger"],
        "rating": 4.3,
        "year": 1951,
        "runtime": "277 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 90,
        "cover_image": "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
        "banner_image": "hhttps://img.sparknotes.com/content/sparklife/sparktalk/Blogging_Catcher_LargeWide.jpeg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A gritty, honest look into the mind of a confused and disillusioned young man, resonating with readers on a deep emotional level.",
        "reviews": [
            {
                "author": "LiteraryFanatic",
                "rating": 4.8,
                "message": "A haunting novel that speaks to the angst and disillusionment of adolescence."
            },
            {
                "author": "ClassicLover",
                "rating": 4.6,
                "message": "A deeply personal, emotionally raw exploration of one boy's world."
            },
            {
                "author": "ModernReader",
                "rating": 4.5,
                "message": "Holden’s journey feels timeless and universally relatable."
            }
        ]
    },
    {
        "title": "The Great Gatsby",
        "mediaType": "book",
        "description": "Jay Gatsby, a wealthy man with a mysterious past, throws extravagant parties in hopes of rekindling a lost romance with Daisy Buchanan.",
        "genres": ["Classic", "Romance", "Tragedy"],
        "authors": ["F. Scott Fitzgerald"],
        "rating": 4.5,
        "year": 1925,
        "runtime": "180 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 94,
        "cover_image": "https://m.media-amazon.com/images/I/61z0MrB6qOS._AC_UF1000,1000_QL80_.jpg",
        "banner_image": "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/TunedIn_TheGreatGatsby_large.jpg?itok=lE1SzQra",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A tragic, romantic tale that explores the American Dream, wealth, and love in a way that continues to captivate readers.",
        "reviews": [
            {
                "author": "FictionLover",
                "rating": 5.0,
                "message": "A timeless classic that explores the fleeting nature of wealth and romance."
            },
            {
                "author": "RomanceReader",
                "rating": 4.7,
                "message": "A beautifully written exploration of love, loss, and desire."
            },
            {
                "author": "HistoryBuff",
                "rating": 4.5,
                "message": "A masterful portrayal of the Jazz Age and the dangers of excess."
            }
        ]
    },
    {
        "title": "Moby-Dick",
        "mediaType": "book",
        "description": "The obsessive Captain Ahab pursues the white whale, Moby-Dick, with relentless determination, leading his crew on a dangerous and ultimately doomed voyage.",
        "genres": ["Classic", "Adventure"],
        "authors": ["Herman Melville"],
        "rating": 4.2,
        "year": 1851,
        "runtime": "585 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 85,
        "cover_image": "https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg",
        "banner_image": "https://rosenbach.org/wp-content/uploads/2018/09/Moby-Dick-graphic-1500x500.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A deeply philosophical novel exploring obsession, revenge, and the sea, though its dense language and long passages can be difficult for some readers.",
        "reviews": [
            {
                "author": "LiteraryExpert",
                "rating": 4.8,
                "message": "A complex and profound exploration of the human condition."
            },
            {
                "author": "AdventureLover",
                "rating": 4.5,
                "message": "A thrilling, though sometimes overwhelming, adventure on the high seas."
            },
            {
                "author": "ClassicReader",
                "rating": 4.2,
                "message": "A masterwork, though not for the faint-hearted due to its length and style."
            }
        ]
    },
    {
        "title": "Pride and Prejudice",
        "mediaType": "book",
        "description": "Elizabeth Bennet navigates issues of love, class, and family in 19th-century England, especially her complicated relationship with the wealthy and proud Mr. Darcy.",
        "genres": ["Romance", "Classic"],
        "authors": ["Jane Austen"],
        "rating": 4.6,
        "year": 1813,
        "runtime": "432 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 98,
        "cover_image": "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
        "banner_image": "https://kingsleyplayers.co.uk/wp-content/uploads/2017/01/featured_prideprejudice.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A delightful and timeless exploration of love, misunderstandings, and societal expectations.",
        "reviews": [
            {
                "author": "RomanticReader",
                "rating": 5.0,
                "message": "A perfect blend of romance, wit, and social commentary."
            },
            {
                "author": "PeriodDramaFan",
                "rating": 4.8,
                "message": "A beautifully written novel that captures the complexities of love and social status."
            },
            {
                "author": "ClassicLover",
                "rating": 4.7,
                "message": "Endlessly charming, with some of the most memorable characters in literature."
            }
        ]
    },
    {
        "title": "The Hobbit",
        "mediaType": "book",
        "description": "Bilbo Baggins, a hobbit, embarks on an adventure with a group of dwarves to reclaim a stolen treasure from the dragon Smaug.",
        "genres": ["Fantasy", "Adventure"],
        "authors": ["J.R.R. Tolkien"],
        "rating": 4.7,
        "year": 1937,
        "runtime": "310 pages",
        "parental_guide_rating": "All Ages",
        "match_percentage": 96,
        "cover_image": "https://m.media-amazon.com/images/I/712cDO7d73L.jpg",
        "banner_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KkwXJkpeOvSVyl_HS84n1IghFUe0Tb08Aw&s",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A charming and adventurous tale, full of wonder and imagination.",
        "reviews": [
            {
                "author": "FantasyFan123",
                "rating": 5.0,
                "message": "An enchanting journey with richly developed characters and a captivating world."
            },
            {
                "author": "TolkienLover",
                "rating": 4.8,
                "message": "A whimsical, yet profound, fantasy adventure."
            },
            {
                "author": "BookExplorer",
                "rating": 4.7,
                "message": "A timeless fantasy classic that continues to inspire readers of all ages."
            }
        ]
    },
    {
        "title": "Frankenstein",
        "mediaType": "book",
        "description": "Dr. Victor Frankenstein creates a monster in an attempt to defy nature, only to face the tragic consequences of his hubris.",
        "genres": ["Gothic Fiction", "Horror", "Science Fiction"],
        "authors": ["Mary Shelley"],
        "rating": 4.6,
        "year": 1818,
        "runtime": "280 pages",
        "parental_guide_rating": "Mature",
        "match_percentage": 94,
        "cover_image": "https://www.printmag.com/wp-content/uploads/2017/10/2a34d8_7edc06080c344f958cde383a3fa6f3f1mv2.jpg",
        "banner_image": "https://www.abaa.org/images/blog/_wide-head/CABF-Frankenstein-Horizontal.png",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A profound and chilling exploration of scientific ambition, isolation, and the consequences of defying nature.",
        "reviews": [
            {
                "author": "GothicFan",
                "rating": 5.0,
                "message": "A chilling and thought-provoking tale that remains relevant today."
            },
            {
                "author": "HorrorBuff",
                "rating": 4.8,
                "message": "A Gothic masterpiece with lasting cultural significance."
            },
            {
                "author": "PhilosophyReader",
                "rating": 4.7,
                "message": "A profound examination of creation, responsibility, and the limits of science."
            }
        ]
    },
    {
        "title": "The Lord of the Rings",
        "mediaType": "book",
        "description": "Frodo Baggins and a fellowship of friends set out to destroy the One Ring, a powerful artifact that can control the world, in a quest to save Middle-earth from the dark lord Sauron.",
        "genres": ["Fantasy", "Adventure"],
        "authors": ["J.R.R. Tolkien"],
        "rating": 4.9,
        "year": 1954,
        "runtime": "1,000 pages",
        "parental_guide_rating": "All Ages",
        "match_percentage": 99,
        "cover_image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
        "banner_image": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/lord-of-the-rings-trilogy-header.jpg",
        "alreadyWatched": false,
        "onWatchlist": false,
        "trailers": [],
        "general_consensus": "A monumental achievement in fantasy literature, filled with breathtaking adventure, deep lore, and unforgettable characters.",
        "reviews": [
            {
                "author": "EpicFantasyFan",
                "rating": 5.0,
                "message": "A legendary epic that defines the fantasy genre."
            },
            {
                "author": "MiddleEarthLover",
                "rating": 4.9,
                "message": "A rich, complex, and inspiring tale of friendship and courage."
            },
            {
                "author": "FantasyAddict",
                "rating": 5.0,
                "message": "Simply unparalleled in scope and imagination."
            }
        ]
    }


]);