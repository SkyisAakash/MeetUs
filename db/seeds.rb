# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# DELETE FROM Group
# DELETE FROM GroupMember
# DELETE FROM User
Group.delete_all
GroupMember.delete_all
User.delete_all
Event.delete_all
EventMember.delete_all

demo = User.create!(username:"stephen",email:"stephen@gmail.com", password:"user123")
sky = User.create!(username:"sky",email:"sky@gmail.com", password:"user123")
mark = User.create!(username:"mark",email:"mark@gmail.com", password:"user123")
kevin = User.create!(username:"kevin",email:"kwvin@gmail.com", password:"user123")
jose = User.create!(username:"jose",email:"jose@gmail.com", password:"user123")
mike = User.create!(username:"mike",email:"mike@gmail.com", password:"user123")
gui = User.create!(username:"gui",email:"gui@gmail.com", password:"user123")
stephen = User.create!(username:"stephen",email:"stephen@gmail.com", password:"user123")
bob = User.create!(username:"bob",email:"bob@gmail.com", password:"user123")
charlie = User.create!(username:"charlie",email:"charlie@gmail.com", password:"user123")
shahab = User.create!(username:"shahab",email:"shahab@gmail.com", password:"user123")
yatu = User.create!(username:"yatu",email:"yatu@gmail.com", password:"user123")
milk = User.create!(username:"milk",email:"milk@gmail.com", password:"user123")
veer = User.create!(username:"veer",email:"veer@gmail.com", password:"user123")
jay = User.create!(username:"jay",email:"jay@gmail.com", password:"user123")
vee = User.create!(username:"vee",email:"vee@gmail.com", password:"user123")
josh = User.create!(username:"josh",email:"josh@gmail.com", password:"user123")
ram = User.create!(username:"ram",email:"ram@gmail.com", password:"user123")
ville = User.create!(username:"ville",email:"ville@gmail.com", password:"user123")
mj = User.create!(username:"mj",email:"mj@gmail.com", password:"user123")
harsh = User.create!(username:"harsh",email:"harsh@gmail.com", password:"user123")
shy = User.create!(username:"shy",email:"shy@gmail.com", password:"user123")
jeni = User.create!(username:"jeni",email:"jeni@gmail.com", password:"user123")
alex = User.create!(username:"alex",email:"alex@gmail.com", password:"user123")
joy = User.create!(username:"joy",email:"joy@gmail.com", password:"user123")
serena = User.create!(username:"serena",email:"serena@gmail.com", password:"user123")
venus = User.create!(username:"venus",email:"venus@gmail.com", password:"user123")
william = User.create!(username:"william",email:"william@gmail.com", password:"user123")
simona = User.create!(username:"simona",email:"simona@gmail.com", password:"user123")
roger = User.create!(username:"roger",email:"roger@gmail.com", password:"user123")
mari = User.create!(username:"mari",email:"mari@gmail.com", password:"user123")
juan = User.create!(username:"juan",email:"juan@gmail.com", password:"user123")
kev = User.create!(username:"kev",email:"kev@gmail.com", password:"user123")
john = User.create!(username:"john",email:"john@gmail.com", password:"user123")
pablo = User.create!(username:"pablo",email:"pablo@gmail.com", password:"user123")
jack = User.create!(username:"jack",email:"jack@gmail.com", password:"user123")
sam = User.create!(username:"sam",email:"sam@gmail.com", password:"user123")
kyle = User.create!(username:"kyle",email:"kyle@gmail.com", password:"user123")
fab = User.create!(username:"fab",email:"fab@gmail.com", password:"user123")
key = User.create!(username:"key",email:"key@gmail.com", password:"user123")
deni = User.create!(username:"deni",email:"deni@gmail.com", password:"user123")
mil = User.create!(username:"mil",email:"mil@gmail.com", password:"user123")
david = User.create!(username:"david",email:"david@gmail.com", password:"user123")
rob = User.create!(username:"rob",email:"rob@gmail.com", password:"user123")
robin = User.create!(username:"robin",email:"robin@gmail.com", password:"user123")
steve = User.create!(username:"steve",email:"steve@gmail.com", password:"user123")
chetan = User.create!(username:"chetan",email:"chetan@gmail.com", password:"user123")
jao = User.create!(username:"jao",email:"jao@gmail.com", password:"user123")
sep = User.create!(username:"sep",email:"sep@gmail.com", password:"user123")
jo = User.create!(username:"jo",email:"jo@gmail.com", password:"user123")


htas = Group.create!(title:"SF Ethereum Developers", organizer_id: demo.id,description: "Welcome! This is a group for developers in and near San Francisco to learn about Ethereum and to aid in developing decentralized applications (Dapps).
  We have meetings on development tools for Ethereum, example contracts, in-depth look at various companies, and on technical details of the protocol.
  See also our sister community, the Silicon Valley Ethereum meetup ",image_url:"https://s26.postimg.cc/fj2av3cfd/braden-jarvis-625463-unsplash.jpg")

haas = Group.create!(title:"NodeSchool SF", organizer_id: sky.id,
  description: "NodeSchool San Francisco is a monthly meetup dedicated to helping people learn JavaScript.
  We help people of all skill levels–from beginners to experts–discover what\'s possible with JavaScript.
  Bring yourself, your computer, and the desire to learn to our next event!", image_url:"https://s26.postimg.cc/8av9jp9op/rawpixel-649916-unsplash.jpg")

bar = Group.create!(title:"Bar & Bitcoin – Hosted by bitFlyer", organizer_id: mark.id, description: "Grab drinks and network with fellow Bitcoin community members in San Francisco\’s Financial District!

Hosted by bitFlyer ( https://bitflyer.com/en-us/ ), Japan\’s largest Bitcoin and Blockchain company that recently touched down in the states, this Meetup is for anyone interested the applications of
Bitcoin, Blockchain, and the direction of cryptocurrency moving forward.

Each gathering consists of casual networking time to meet and get to know others in the industry, with drinks provided by bitFlyer. Discuss current projects you're working on, troubleshoot problems you might be facing, review interesting articles and applications, and connect with others in the space. We hope to bring in guest speakers for engaging discussion opportunities in the future. Join us every other Thursday at Harrington\’s Bar & Grill!", image_url:"https://s26.postimg.cc/l29fq7yw9/brooke-lark-194252-unsplash.jpg")
brue = Group.create!(title:"Neo4j Online Meetup", organizer_id: kevin.id, description: "In this Meetup we want to reach across borders and run online sessions for everyone around the world to join. Topics will range from data modeling and import to data science and data journalism.
  Sessions are hosted using YouTube Live on the Neo4j YouTube Channel \(https://youtube.com/neo4j\)\.

We will also run hands-on workshops for developing your own applications and training sessions. Feel free to propose other topics you're interested in.", image_url:"https://s26.postimg.cc/er489kd0p/neonbrand-356967-unsplash.jpg")
women = Group.create!(title:"ARVR Women and Allies", organizer_id: jose.id, description: "ARVR Women is dedicated to supporting inclusion for under-represented groups as creators for the next computing platform: Virtual and Augmented Reality. Our goal is 50/50 in 5, or a gender balanced industry in five years. Right now, coders in the primary gaming engine around the globe, and the most important tool for creating AR/VR, are made up of roughly 97% men and 3% women. When systems are small and young, they are much more susceptable to change and responsive to new trajectories, however, as systems become more entrenched they become much more rigid and harder to shift. So we at ARVR Women are focusing our efforts now on the birth of this new system, incorporating all the wisdom of the new century, inclusion, clear communication, and respect for difference (different perspectives, challenges and experiences). This is a new dawn. Join us in ensuring the future will be brighter for everyone. We want everybody on this rocket-ship.

\"ARVR women fills a need in an industry where women felt unheard and overlooked and managed to pull together the largest group of women ARVR developers and enthusiasts in the country. As a former student of their academy, I can say I learned the most about this awe-inspiring technology from this group. It was truly a gift in my life to work with such talented women with decades of industry experience. The founder created a rose from concrete to where hundreds of ARVR professionals are now within a few degrees of separation from each other", image_url:"https://res.cloudinary.com/df4s95pqa/image/upload/v1528910750/Womens_group.jpg")
men = Group.create!(title:"SF Data Meetup", organizer_id: mike.id, description: "This is a new meetup group for data science and data engineering practitioners from companies in the SF bay area.
  We\’ve seen that across many companies, data teams are solving very similar problems with similar tools. In this meetup we aim to share best practices that our teams have learned from their experiences working with large-scale distributed systems in production environments.

Talks will focus on a holistic systems view of theory & practice for production data use cases, including:

• Data engineering, and building ETL pipelines across batch and streaming
• Experiments / A/B testing theory and practice, including infrastructure, randomization/assignment, and analysis
• Machine learning, bridging from theory to production systems, including deep learning, offline training, online inference, production model serving, and metrics/monitoring", image_url:"https://s26.postimg.cc/5w3dz2j3d/rawpixel-649910-unsplash.jpg")
son = Group.create!(title:"Deep Learning Textbook Study Group", organizer_id: gui.id, description: "Hello there!! This study group will be centered around the \"Deep Learning\" (quite literally its name at the moment) textbook being written by Ian Goodfellow, Yoshua Bengio and Aaron Courville. This study group is intended for those that are serious about ML. The textbook is dense and math intensive, so expect to put in at least a couple of hours a week.", image_url:"https://s26.postimg.cc/lhkpj1i6x/walter-walraven-628474-unsplash.jpg")
father = Group.create!(title:"#MonitorSF", organizer_id: stephen.id, description: "We're a San Francisco based group that discusses web service centric monitoring.", image_url:"https://s26.postimg.cc/v24c5y2e1/nikolay-tarashchenko-551722-unsplash.jpg")
fat = Group.create!(title:"Mobile Monday Silicon Valley", organizer_id: bob.id, description: "Since 1999, we have led the effort to educate our community and move our industry forward. We have been at the forefront of nearly every major technology in mobile and connected thing from the start.
", image_url:"https://s26.postimg.cc/8nmnpzuk9/rawpixel-267082-unsplash.jpg")
mango = Group.create!(title:"SF Prometheus Meetup Group", organizer_id: charlie.id, description: "This is a meetup group for anyone interested in learning more about or just curious about Prometheus, a fully open source monitoring and alerting system, and the second project admitted to the Cloud Native Computing Foundation.", image_url:"https://s26.postimg.cc/d9irydayh/rawpixel-659501-unsplash.jpg")
chery = Group.create!(title:"Starfish Mission", organizer_id: shahab.id, description: "Starfish Mission is a blockchain centric co-working ecosystem inspired by the passion of the local bay area blockchain community. The organization\’s mission is to inspire collaboration, promote education, and unity amongst the many in the community who seek to change the world using blockchain and decentralized ledger technology.", image_url:"https://s26.postimg.cc/7y3vdoc15/rawpixel-558597-unsplash.jpg")
interview = Group.create!(title:"Technical interview prep", organizer_id: yatu.id, description: "Practice your technical interview skills, share your job search strategies and experiences and explain out loud computer science concepts such as big O notation, Algorithms, data structures or anything else that may come up in a technical interview.

Our meetups will be loosely following the outline of Rithm Schools free coursework, but the concepts can be implemented in any language of your choice during the meetup", image_url:"https://s26.postimg.cc/6vtov5o2x/tim-gouw-79563-unsplash.jpg")
travelling = Group.create!(title:"San Francisco World Travelers", organizer_id: milk.id, description: "WELCOME TO THE SAN FRANCISCO WORLD TRAVELERS (SFWT)

We are a friendly group of like minded travelers who share a passion for visiting overseas destinations, or for those thinking about world travel for the first time.

WHAT WE DO (AND WHAT WE DON'T)

We meet monthly for drinks in the city. Our objective is to make new friends, share travel stories, tips and thoughts about exciting places that we've visited, or plan to visit in the near future and to remind ourselves why people who travel the world are such good fun to be around.

We don't make presentations, organize slide shows, group trips, or push commercial ventures on you. Unlike some other groups we're not affiliated with travel companies looking to promote their commercial services.
", image_url:"https://s26.postimg.cc/rspwzuoop/jon-tyson-277923-unsplash.jpg")
gree = Group.create!(title:"DevOps Exchange San Francisco", organizer_id: veer.id, description: "The DevOps Exchange London (DOXLON (https://www.meetup.com/DevOps-Exchange-London/)) comes to San Francisco!

We are now the worlds largest DevOps meetup - if you're interested in DevOps, this will hopefully be an interesting meetup for you to join..

We started this event as we love DevOps and have seen an insatiable demand for more knowledge about it from teams running online/cloud services in London.

We now run DOXLON monthly and have become London's largest DevOps Meetup attracting some inspiring speakers along with a great and loyal crowd interested in sharing the best ideas around DevOps with the community.

The DevOps Exchange is an opportunity to exchange some of the latest ideas and technologies for running online services through 2-3 short presentations by invited speakers, and a chance to chat it after over drinks/snacks with new friends.

DOXLON has now crossed the Atlantic and we are looking to bring some exciting events to San Francisco in the near future - we hope to see you at an event soon!", image_url:"https://s26.postimg.cc/olvdgawjt/rawpixel-557123-unsplash.jpg")
unit = Group.create!(title:"Serverless", organizer_id: jay.id, description: "A group for anyone interested in building web, mobile and Internet-of-Things applications with serverless architectures using the Serverless Framework and more! We'll focus heavily on Amazon Web Services and discuss AWS Lambda as the focal point of AWS.", image_url:"https://s26.postimg.cc/bhpt3nmih/rawpixel-574844-unsplash.jpg")
uno = Group.create!(title:"Black Girls in the Marina", organizer_id: vee.id, description: "We\’re a group of black females in their 20s and 30\’s looking to hang out, make friends, explore the Bay, and build community. Ugly sweater parties, the opera, brunch, Lands End, First Fridays – you name it, we\’ve done it. All black and african american women welcome. Come kick it with us.", image_url:"https://res.cloudinary.com/df4s95pqa/image/upload/v1528910871/black_girls.jpg")
dc = Group.create!(title:"BlackChain", organizer_id: josh.id, description: "A group of blockchain enthusiasts across all Blockchain and DAG communities.", image_url:"https://s26.postimg.cc/kqrzdd2zt/jim-beaudoin-628555-unsplash.jpg")
divide = Group.create!(title:"SF Cryptocurrency Devs", organizer_id: ram.id, description: "Every week, we host the best engineer and developer presentations to share their projects and papers on innovation occurring in the cryptocurrency ecosystem.

This includes all crypto technologies, including bitcoin, ethereum, and other blockchains.", image_url:"https://s26.postimg.cc/5i21zlwgp/andre-francois-518771-unsplash.jpg")
kon = Group.create!(title:"SpanFran: French/Spanish/English Language Exchange", organizer_id: ville.id, description: "Practicing is the best way to learn a language

Join us for a free, weekly language exchange at Bissap Baobab Wednesday nights in the Mission. All levels welcome.

• ES: Mejora tu inglés mientras conoces a nativos.

• FR: Progresse en anglais et rencontre des anglophones.

• 6 - 7 pm: Arrive for casual conversation at the bar (get a drink or something to eat)

• 7 pm: The event begins and continues until about 9

The group is divided into French and Spanish speakers. You'll have conversations with native speakers, visiting foreigners, locals, and other language learners. It's a social event where you can meet new people and discover other cultures.

When talking to people, remember that this is an exchange. During the evening, feel free to move to new conversation partners. If the conversation has been in one language for a long time, be generous to your partners and offer to speak in the other language.

The event is free. Please support the restaurant and purchase at least one drink (all of Bissap's fruity cocktails are available without alcohol. Under 21 allowed).

We also accept tips to cover a few hundred dollars in annual expenses that the group incurs.

Each week, there's a host. A group of volunteers run the group. If you have ideas for the group or are interested in helping out, message us here or let your host know.", image_url:"https://s26.postimg.cc/hjxftwy15/helena-lopes-592971-unsplash.jpg")
lots = Group.create!(title:"Direct Action Everywhere: Vegans For Animals", organizer_id: mj.id, description: "We are a group for animal activists, vegans, vegetarians and the veg-curious. Our belief is that every animal (human or non-human) has an equal right to be safe, happy, and free.

Join the big and fast-growing community of DxE members with 100's in the SF Bay Area alone. Our members are diverse, friendly and out-spoken for animals. Events include community-building like pot-lucks, dinners, drinks and activities as well as protests for Animals rights.", image_url:"https://s26.postimg.cc/fs4gz11tl/smit-patel-344842-unsplash.jpg")
wall = Group.create!(title:"Buildings and Beers", organizer_id: harsh.id, description: "This is a casual meet up for architects, brokers, builders, designers, developers, and anyone in the real estate field. Lets have a beer and talk buildings!", image_url:"https://s26.postimg.cc/tlsto69vd/tiomothy-swope-116695-unsplash.jpg")
fan = Group.create!(title:"San Francisco Screenwriting Group", organizer_id: shy.id, description: "The San Francisco Screenwriting Group is a collection of people who are interested in screenwriting as art. We meet every week with the aims of improving our own work, understanding the art, and better appreciating movies in general.", image_url:"https://s26.postimg.cc/4sj9nj6ah/rawpixel-651362-unsplash.jpg")
jonn = Group.create!(title:"SF Code & Coffee", organizer_id: jeni.id, description: "SF Code & Coffee is an informal get together to write code and drink coffee. We're going with Saturday mornings because weekdays and evenings are typically busy. Why add to the chaos of user groups, yoga, and happy hours? There are no requirements other than the willingness to come, meet new people, and work on projects!", image_url:"https://s26.postimg.cc/i9g86h17d/nathan-dumlao-290152-unsplash.jpg")
lasty = Group.create!(title:"DC/OS Online Meetup", organizer_id: alex.id, description: "Welcome to the DC/OS (https://dcos.io/) Online Meetup: a weekly meeting to highlight community work, updates, and contribution opportunities! We have regular meetings on Thursdays at 10 am Pacific time and occasional one-time meetings for special occasions.

Our meetings happen by Zoom, which requires a meeting client. If you don't have it yet you can download it here:

https://zoom.us/download#client_4meeting

We have a Slack channel (#officehour) to discuss these meetings, propose topics, or raise technical issues. You can get an invitation at:

http://chat.dcos.io/

All our meetings are recorded! Catch up with previous office hours by checking out the YouTube playlist at:

https://www.youtube.com/playlist?list=PLVWq... (https://www.youtube.com/playlist?list=PLVWqoBEzghqdpHYXcOESRPLJseA6cRT_q)", image_url:"https://s26.postimg.cc/y7oxwmikp/headway-537308-unsplash.jpg")
dron = Group.create!(title:"The San Francisco Figure Drawing Group", organizer_id: joy.id, description: "The San Francisco Figure Drawing group has multiple organizers each doing different workshops. We offer many venues and days and times to best fit your needs for drawing and painting. ENJOY! More...", image_url:"https://s26.postimg.cc/r4h2h10ah/dino-demopoulos-437664-unsplash.jpg")
help = Group.create!(title:"Get Volunteering", organizer_id: serena.id, description: "Time on your hands during the working week?

Join us for short (2 - 4 hour) volunteer shifts during business hours with non-profit organizations around San Francisco and Oakland.

We aim to get out and help others through volunteering.", image_url:"https://s26.postimg.cc/gvolamri1/alex-boyd-260336-unsplash.jpg")
finfet = Group.create!(title:"Bay Area FinTech Meetup", organizer_id: venus.id, description: "Meetups and conferences on all things FinTech including Cryptocurrencies and Blockchain in San Francisco Bay Area!", image_url:"https://s26.postimg.cc/z616447wp/rawpixel-678089-unsplash.jpg")
mosfet = Group.create!(title:"Tout's All-Things-Data Meetup", organizer_id: william.id, description: "This is a group for anyone interested in a wide variety of data topics. Ranging from practical Data Science and Machine Learning, to how to build platforms that can enable Data Scientists, ML Practitioners and Engineers at scale. The target audience is a mixed bag of Data Engineers, Scientists and ML Engineers/Practitioners.", image_url:"https://s26.postimg.cc/yt9rxys7t/carlos-muza-84523-unsplash.jpg")
thin = Group.create!(title:"Fintech Devs & PMs", organizer_id: simona.id, description: "Hear about the latest products and problems being worked on by fintech companies.

Presenters have included CreditKarma, Plaid, Wealthfront, Android Pay, Blend, Sindeo, OpenDoor, Google, Plaid, Xignite and many others.", image_url:"https://s26.postimg.cc/jxb8qgojt/rawpixel-665368-unsplash.jpg")
fatty = Group.create!(title:"SF Blockchain Developers", organizer_id: roger.id, description: "This is a group for developers and crypto enthusiasts looking to explore new ways that distributed technologies can address large-scale social challenges. Every month, we will feature prominent speakers and local experts addressing a diverse range of issues at the forefront of the crypto movement. Developers from all backgrounds are welcome - both experienced or new to blockchain tech. The meetup format will be focused on lightning talks and round-tables to quickly get exposed to new topics, areas of research, and emerging possibilities within the space.", image_url:"https://s26.postimg.cc/5qvhvhdrd/kaley-dykstra-10484-unsplash.jpg")
king = Group.create!(title:"Noisebridge Hackerspace", organizer_id: mari.id, description: "We are Noisebridge. Noisebridge is a hackerspace for technical-creative projects, doocratically run by our members. We are a non-profit educational institution intended for public benefit. Come and visit our space a 5,200 square-foot area located in the heart of San Francisco. We teach, we learn, we share.", image_url:"https://s26.postimg.cc/bf1smgaex/pankaj-patel-561360-unsplash.jpg")
megan = Group.create!(title:"LES AMI(E)S FRANCOPHONES DE SAN FRANCISCO", organizer_id: juan.id, description: "Les Amis(es) Francophones de San Francisco is a group of San Francisco francophones who meet each month to converse in French and indulge in other French-related activities. Active participants are a mix of native and non-native French speakers living in the area.", image_url:"https://s26.postimg.cc/41memzii1/franck-v-628397-unsplash.jpg")
yoga = Group.create!(title:"Free Yoga SF", organizer_id: key.id, description: "Our mission will always be to get people to move, breathe, and connect with their community. In order to bring the SF Yoga community together, our events will be weekly downtown for hard-working professionals to attend free yoga classes, along with special monthly events around the city.", image_url:"https://s26.postimg.cc/bgbqfjc55/antonika-chanel-467884-unsplash.jpg")
queen = Group.create!(title:"SF Language Exchange Meetup", organizer_id: john.id, description: "Come join us to exchange languages in a school setting for free. All languages welcome! Make friends while practicing languages, find a language exchange partner, connect with people who speak the language you are learning. People divide up into language groups and practice in pairs or small groups.", image_url:"https://s26.postimg.cc/hh9fcor2h/rawpixel-659493-unsplash.jpg")
pone = Group.create!(title:"San Francisco Entrepreneurs Network", organizer_id: pablo.id, description: "The San Francisco Entrepreneurs Network Meetup (S.F.E.N) is a community of active and aspiring small business owners and entrepreneurs.

S.F.E.N holds inexpensive, high-quality seminars and networking events on a regular basis. These events help small business owners, entrepreneurs and marketing professionals learn, network and grow. They learn new tactics, tools and techniques. They network with like-minded people. They grow their networks, their businesses and their characters. S.F.E.N\’s seminars address just about every business topic imaginable including traditional, online and mobile marketing, personal development, social media, sales, networking, raising capital, crowd sourcing, gamification, branding, search engine optimization, web design and much much more. Start growing your business or advancing your career today by checking us out. The best way to do this is to attend one of our meetings.

S.F.E.N is a branch of Entrepreneurs International Network. Please email the organizer of this group to become an event host if you like to hold local events to for entrepreneurs.", image_url:"https://res.cloudinary.com/df4s95pqa/image/upload/v1528910593/enterpreneur.jpg")
dillon = Group.create!(title:"'NorCal Hikers (20s & 30s)'", organizer_id: jack.id, description: "The Best Things in Life Are Free! So, Come hang out with us in nature:-)

Are you an outdoor enthusiasts looking to Hike? Are you in San Francisco Bay Area? Or even in San Jose/Santa Cruz? Come be social. New in Town? Looking to Meet New People or Friendships? 20's or 30's Something? Here is a group designed for people with similar interests who enjoys Hiking, Climbing, Backpacking, Mountaineering, Skiing and Outdoor Adventures. However, we do include occasional social events such as Wine tasting, Beer tasting, Sporting, Concerts, Happy Hours, Salsa and whatever else that attracts interest. Or even anything that Sounds Fun in the open Fresh Air, far from Urban Civilization to be in good Company around Campfires.

Of course, Food is almost always a part of our hikes, often both during (of course) and after, and we welcome both New and Old Friends!", image_url:"https://res.cloudinary.com/df4s95pqa/image/upload/v1528910206/survival.jpg")
sideway = Group.create!(title:"Weave Online User Group", organizer_id: sam.id, description: "This group meets online (starting in February 2017) to discuss your burning questions about microservices, Kubernetes, Prometheus, container management, orchestration, visualization, and security, and much more; from intro topics to advanced discussion.

Learn about Weave Cloud and Weaveworks open source projects, and meet other Weave users to help solve problems.", image_url:"https://res.cloudinary.com/df4s95pqa/image/upload/v1528911015/weave.jpg")
unicorn = Group.create!(title:"Seele Intercontinental Appraisal", organizer_id: kyle.id, description: "Seele\’s vision has always been grand. We aim to fundamentally transform the blockchain experience on a global scale. To achieve such lofty goals, international talent, as well as supporters, is an absolute must! Our team members have been working on that front over the past few months by setting up offices in tech hotspots (e.g. San Francisco, Shenzhen, Singapore, and London) and recruiting local talent.

To further our efforts in enhancing Seele\’s global brand and operations, our team has decided to go on our roadshow! This will provide an invaluable opportunity for interested parties (e.g. supporters, investors, strategic partners, etc.) to become better acquainted with Seele and vice versa. Senior members of our operations, management, and technology teams will be present to answer questions.", image_url:"https://s26.postimg.cc/6ho814389/rawpixel-658248-unsplash.jpg")
wishly = Group.create!(title:"San Francisco Blocultural Blockchain Meetup", organizer_id: fab.id, description: "We host events, workshops and hackathons to educate and inform the SF community including blockchain startup founders, cryptoenthusiasts and anyone curious about blockchain technology.", image_url:"https://s26.postimg.cc/fqqeb2z7t/patrick-hendry-227811-unsplash.jpg")
amazon = Group.create!(title:"Blockchain Networking - Presented by Hilo", organizer_id: key.id, description: "Come grab a drink and network with your fellow Blockchain community members. We will be doing a Ledger give away at each event.

This MeetUp group is for anyone interested in cryptocurrencies or blockchain technology. We meet every Wednesday to network and discuss the future of blockchain.

Our organizer, Hilo, is a social platform for crypto traders. Hilo is backed by many industry leaders such as Vinny Lingham (CEO of Civic), Steven Waterhouse (CEO of Orchid Labs), Angelo Adam (CEO of Bounty0x), and many more. Follow us @HiloCrypto", image_url:"https://s26.postimg.cc/9d1b7x22h/md-duran-628447-unsplash.jpg")
forest = Group.create!(title:"Techqueria - Latinxs in Tech - Bay Area", organizer_id: deni.id, description: "Calling all Latinxs in tech! Whether you just got here last week or your family has been in the country for decades, we have a lot to share and be proud of. Join us to keep posted on the latest events. We welcome those from all positions within the tech industry (from marketing to programming and more), as well as those who are interested in joining the field. Though our events are Bay Area-based, we welcome members from across the globe. Come share your experiences with the community.", image_url:"https://s26.postimg.cc/wsj8d0e15/helloquence-61189-unsplash.jpg")
viewer = Group.create!(title:"Deep Learning Study Group", organizer_id: mil.id, description: "Hello there!! This study group will be centered around the \"Deep Learning\" (quite literally its name at the moment) textbook being written by Ian Goodfellow, Yoshua Bengio and Aaron Courville. This study group is intended for those that are serious about ML. The textbook is dense and math intensive, so expect to put in at least a couple of hours a week.", image_url:"https://s26.postimg.cc/4sf4ssfqh/inaki-del-olmo-602632-unsplash.jpg")
latenight = Group.create!(title:"Learn Web Development @ Rithm", organizer_id: david.id, description: "Let's explore beginning and intermediate topics in web development. This meetup is for absolutely anyone who is interested in building their coding skill set. We pride ourselves on comprehensive & engaging lectures, small class sizes, and experienced instructors that will help you get coding quickly (or level-up your current skills).", image_url:"https://s26.postimg.cc/kdwgd2ccp/luca-bravo-217276-unsplash.jpg")
street = Group.create!(title:"CircleCI User Group", organizer_id: rob.id, description: "We want to meet the developers and software teams who use CircleCI and hear about all the great things you are doing! Our meetups feature a 20-40 minute Customer Speaker Series followed by an open Q+A, networking, and live personalized support from our CircleCI engineers. We\’re here to hear all about your recent projects, successes and help with everything from getting started and troubleshooting to highly technical issues on your specific use case. Bring your business cards, laptop, appetite and your questions for the CircleCI User Group.

CircleCI\’s continuous integration and continuous delivery platform helps software teams rapidly release code they trust by automating the build, test, and deploy process. Learn more at circleci.com (http://circleci.com/).", image_url:"https://s26.postimg.cc/fgivrppqh/vadim-sherbakov-36-unsplash.jpg")
iron = Group.create!(title:"Cryptogaming SF", organizer_id: robin.id, description: "Cryptogaming SF is a group for game developers who are passionate about exploring ways to build decentralized autonomous games. We will be meeting on a regular basis to discuss how tech and economical innovations with distributed ledger technology could be adopted by game industry.", image_url:"https://s26.postimg.cc/6y9fnelsp/norbert-levajsics-203627-unsplash.jpg")
bayarea = Group.create!(title:"Analytics & Data Science by Dataiku San Francisco", organizer_id: steve.id, description: "Bringing data enthusiasts together to foster the exchange of ideas and the intellectual growth of the data community. Our series of #DataConnect meetups showcase the work of talented data professionals across industries, for you to get insider tips and tricks to turn data into actionable insights (read more here ( https://blog.dataiku.com/announcing-dataconnect-meetups-nyc )).
All types of data professionals, scientists, engineers, analysts, and students welcome!

Want to collaborate?

We partner with companies, schools, and individuals to organize meetups and showcase the work of inspiring data professionals to a broad audience.
Get in touch to contribute! ( https://pages.dataiku.com/collaborate-with-dataiku-to-uplift-data-science-community )

About Dataiku:

Dataiku develops the unique advanced analytics software solution that enables companies to build and deliver their own data products more efficiently. Its collaborative, team-based user interface works for all profiles, from data scientists to beginner analysts, and the unified framework allows for both development and deployment of data projects. Learn more at www.dataiku.com ( http://www.dataiku.com/ )

Connect with us on social media:

• Follow us on Twitter ( http://www.twitter.com/dataiku )
• Connect with us on LinkedIn ( https://www.linkedin.com/company-beta/2770554/ )
• Like our Facebook page ( https://www.facebook.com/dataiku/ )", image_url:"https://s26.postimg.cc/446aa147t/markus-spiske-666905-unsplash.jpg")
windsor = Group.create!(title:"DevOps Online Meetup- San Franscisco", organizer_id: chetan.id, description: "This is a group for anyone interested in DevOps. All skill levels are welcome and it is open to everyone around the world.", image_url:"https://s26.postimg.cc/dopwx1yqh/emile-perron-190221-unsplash.jpg")
local = Group.create!(title:"CageChain", organizer_id: jao.id, description: "ageChain.io focuses on educating the public, investors, and businesses on the value and features of blockchain/crypto currency startups. We have been growing an active community in the bay area since mid last year.", image_url:"https://s26.postimg.cc/up8t5t42x/maxime-rossignol-266384-unsplash.jpg")
sing = Group.create!(title:"Big Data Developers in San Francisco", organizer_id: sep.id, description: "This is an IBM sponsored Meetup group geared towards developers, data scientists, data engineers, and ALL Big Data enthusiasts. Our Meetups provide an opportunity to learn, to work hands on with the solutions and tools in our Big Data portfolio, and to interact and share knowledge with experts at IBM and in our extended community.

Our Meetups typically include a 45-60 minute presentation that serves as an introduction and overview for a specific Data or Cognitive topic, as well as other topics that the community is interested in. It is followed by a possible demonstration or networking with fellow developers to collaborate on applying your data skills. Depending upon the location, we can provide a cloud environment with the technologies needed, that you can use from your laptop at NO cost to you. Our meetups are FREE.

Meetup topics include (but are not limited to):

- Cognitive Solutions
- Artificial Intelligence
- Data Science
- Machine Learning
- Cloud Technologies
- Internet of Things (IoT)
- Data Visualization
- Java development
- Open Source Technologies: Apache Spark, Apache Hadoop, Python, R and others
- Data-centric Application Development
- Open Source Hadoop, SQL on Hadoop, R on Hadoop, Integration, Governance, ...
- Real Time Analytics & Stream Computing
- Text Analytics
- Relational and NOSQL Databases
- Predictive/Prescriptive Analytics
- Deep dives into the technologies that makes big data processing possible

Join us today to learn more about what is possible with software development and topics important to your community.", image_url:"https://s26.postimg.cc/gwue9ynjd/hack-capital-568971-unsplash.jpg")
orange = Group.create!(title:"Mobius Meetup", organizer_id: jo.id, description: "The official meetup group for developers, blockchain enthusiasts, and entreprenuers interested in Mobius (MOBI) in the Bay Area. We will host meetups, workshops, and hackathons. We also encourage members to meet, chat, come up with new ideas and build DApps together.", image_url:"https://s26.postimg.cc/k4yvmu21l/imgix-391813-unsplash.jpg")


food = Group.create!(title:"Bay Area Creative Cooking",description:"
Greetings Bay Area Creative Cooking Enthusiasts!

Do you love to cook gourmet dishes, or just wish you knew how to cook? Maybe you have (or, maybe you haven't before) traveled to places like Indonesia, South Korea, Philippines, Ghana, Ethiopia, Morocco, Iran, France, Russia, Columbia, Jamaica, or Alabama, but wish you could taste some of these and other authentic foods right in your own back yard. You never know what interesting or famous person you might meet at any given event. But can you \"throw down\" in the kitchen (or, maybe you don't even know what that means...LoL!)? New to the San Francisco Bay Area, or, only in town for a stint and don't have your own kitchen? Care to get coached on new ways to eat healthy foods that add balance to your busy lifestyle? Are you friendly, forgiving, not a gossip or a whiner, and yet are you always willing to learn or share with all kinds of people? If you answered \"Yes,\" to any of the above questions, then the \"Bay Area Creative Cooking\" (BACC) Meetup group welcomes you!

We think cooking is more enjoyable if it is shared--both the process and the results. So... We want to use this fun opportunity to learn how to creatively prepare, cook, clean-up, and store the kinds of food that we love to eat together. Our organizing theme is to have creative fun cooking, eating & chatting together while building genuine friendships.

Bay Area Creative Cooking (BACC) events are best organized via Members' creative suggestions and helpful assistance:

home cooking events (monthly rotating venue, learn to prepare, cook, clean up, store & eat food!)

potluck dinner parties (your place got space? cook it & then bring it!)

outdoors Bar B-Que picnics (the BACC large-group event!)

group field trips (cooking classes, dining out specials, regional foodie events, etc...)

cooking demonstrations by 'Chez Louis' (or, uuh...well, by somebody professional!)

interesting taste-specific events (exotic fruit, chocolates & cheese anyone?)

Volunteering at special events! (holidays are great for sharing what we like to do!)

The Bay Area Creative Cooking (BACC) Meetup may charge a value-priced fee, or a typical nominal fee, or be little-to-nothing per each event. All priced events will require a non-refundable, advance payment (if online via PayPal, or Amazon Payments, your eligible credit card, or cash). Also, BACC Membership Fees will be coming due, to help our Meetup group thrive. Your funds will defray the cost of organizing events and keeping BACC online, while all extra proceeds shall become donated to charities that alleviate hunger in SF Bay Area communities. (Legal, details & rules forthcoming; please kindly e-mail me with your input and past successful experiences.)

\"I hope that you will consider the BACC Meetup group as your community and take the time to foster genuine friendships when possible. As an East Bay resident, I would definitely appreciate your help with creative ideas, and with organizing well-hosted events for this group. I really look forward to connecting in creatively positive ways with a diverse community of friendly people.\"

- \"Boi-Blue\" (Meetup Organizer)
Bay Area Creative Cooking (http://meetup.com/Bay-Area-Creative-Cooking)

Bon appÃ©tit! Con gusto! Itadakimasu! ...(Can you suggest additional phrases in another language?)",
organizer_id: sky.id, image_url:"https://s26.postimg.cc/i809pisxl/food.jpg")

Event.create!(
 title: "Wine and Socialize",
 description:
  "\n• What we'll do\nHey guys,\n\nLet's get together and enjoy great wine. Our second Meetup was a success and looking forward to this one. I will be providing Spanish wine and cheese. It would be great if all members can bring a bottle of wine to have more variety. If you guys have any questions feel free to call / text me at 408.420.6993\n\nHope to see you all!\n\nDPR.\n\n• What to bring\n1 Bottle of wine",
 address: "904, ketny street, santa clara, ca",
 organizer_id: sky.id,
 group_id: food.id,
 image_url:
  "https://res.cloudinary.com/df4s95pqa/image/upload/v1528685232/hclmbuvvrbwmswryoham.jpg",
 start_date: "2018-06-04",
 end_date: "2018-06-04",
 start_time: "08:01",
 end_time: "17:00")
Event.create!(
 title: "Oakland's Eat Real Festival",
 description:
  "Your Bay Area Creative Cooking group cordially invites you to enjoy this year's annual \"Eat Real Festival,\" a street-food block party festival designed to celebrate good local food, that's held at Jack London Square, Oakland. As a naturally creative group made up of chefs/cooks/noobs-in-the-kitchen, our goal is to see how many food and beverage vendors we can collectively visit, while sharing up samples from one another's purchased dish. Bring your cash, camera, your smile, a positive sharing attitude, and a hearty appetite as we walk and learn what we can from chefs and vendors!\n

More importantly enjoy spending your time and cash getting to know other Members in our Meetup community, and let your inner foodie become well known! (Additional details will be posted here in updates.)
\n
ABOUT\n
\"At the Eat Real Festival, participants learn where food comes from, who grows it, and how to make it. Eat Real Festival attendance is 100% free of charge, all street food at the festival costs $10 or less, and incorporates delicious, regionally-sourced, and sustainably-produced ingredients. Eat Real is the premier educational program of the Food Craft Institute, a non-profit organization focused on creating and making viable small to medium-scale, handmade, artisan food companies in the United States. Eat Real\’s mission is to help revitalize regional food systems, build public awareness of and respect for the craft of making good food and to encourage the growth of American food entrepreneurs\" (http://eatrealfest.com/about/).
\n
**This event is easily accessible by the Ferry and BART!
\n
***Please drink responsibly! If you do plan to drink alcohol, please order yourself a rideshare (Lyft/Uber), or plan to use public transportation when leaving this activity.

",
 address: "904, ketny street, Oaklans, ca 95843",
 organizer_id: sky.id,
 group_id: food.id,
 image_url:
  "https://res.cloudinary.com/df4s95pqa/image/upload/v1528912563/oakland.jpg",
 start_date: "2019-06-04",
 end_date: "2019-06-04",
 start_time: "08:01",
 end_time: "17:00")
Event.create!(
 title: "Pizza Party",
 description:
  "Your Bay Area Creative Cooking group cordially invites you to enjoy this year's annual \"Eat Real Festival,\" a street-food block party festival designed to celebrate good local food, that's held at Jack London Square, Oakland. As a naturally creative group made up of chefs/cooks/noobs-in-the-kitchen, our goal is to see how many food and beverage vendors we can collectively visit, while sharing up samples from one another's purchased dish. Bring your cash, camera, your smile, a positive sharing attitude, and a hearty appetite as we walk and learn what we can from chefs and vendors!\n

More importantly enjoy spending your time and cash getting to know other Members in our Meetup community, and let your inner foodie become well known! (Additional details will be posted here in updates.)
\n
ABOUT\n
\"At the Eat Real Festival, participants learn where food comes from, who grows it, and how to make it. Eat Real Festival attendance is 100% free of charge, all street food at the festival costs $10 or less, and incorporates delicious, regionally-sourced, and sustainably-produced ingredients. Eat Real is the premier educational program of the Food Craft Institute, a non-profit organization focused on creating and making viable small to medium-scale, handmade, artisan food companies in the United States. Eat Real\’s mission is to help revitalize regional food systems, build public awareness of and respect for the craft of making good food and to encourage the growth of American food entrepreneurs\" (http://eatrealfest.com/about/).
\n
**This event is easily accessible by the Ferry and BART!
\n
***Please drink responsibly! If you do plan to drink alcohol, please order yourself a rideshare (Lyft/Uber), or plan to use public transportation when leaving this activity.

",
 address: "904, ketny street, Oaklans, ca 95843",
 organizer_id: sky.id,
 group_id: food.id,
 image_url:
  "https://res.cloudinary.com/df4s95pqa/image/upload/v1528912746/pizza.jpg",
 start_date: "2019-09-04",
 end_date: "2019-12-04",
 start_time: "08:01",
 end_time: "17:00")



lgbt = Group.create!(title:"LGBTQ Self Defense Classes",description:"Thanks to Supervisor Ken Yeager, the Board of Supervisors has funded self defense classes for the LGBTQ community.
These classes are free, and you can attend as many as you like. Classes are taught through Defense-ability in Campbell. (defense-ability.com)
Regular classes are offered monthly, but we can also accommodate those who would like to take the class as a group activity. So if you belong to a LGBTQ book club, bowling league, softball team, etc., contact us to book free classes for your group!
Please join us and take advantage of this opportunity!", organizer_id: shahab.id,
image_url:"https://s26.postimg.cc/6y7juh0q1/lgbt.jpg")
burgersandbeers = Event.create!(title:"Eureka! Burgers and Beer",description:"I\'ve never been here and have been meaning to check it out.
http://eurekarestaurantgroup.com/eat/",address:"Some place, San Jose, CA",start_date:"2018-12-03", end_date:"2018-12-03", start_time:"12:34", end_time:"14:53",organizer_id:sky.id, group_id:food.id, image_url:"https://res.cloudinary.com/df4s95pqa/image/upload/v1528667262/events/burger.jpg")
