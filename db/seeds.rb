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

demo = User.create!(username:"user",email:"user17", password:"user123")
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
# name = User.create!(username:"shahab",email:"shahab@gmail.com", password:"user123")

# groupname = Group.create!(title:"", organizer_id: shahab.id,image_url:"")
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

Bon appétit! Con gusto! Itadakimasu! ...(Can you suggest additional phrases in another language?)",
organizer_id: sky.id, image_url:"https://s26.postimg.cc/i809pisxl/food.jpg")

groupname = Group.create!(title:"", organizer_id: shahab.id,
image_url:"")

lgbt = Group.create!(title:"LGBTQ Self Defense Classes",description:"Thanks to Supervisor Ken Yeager, the Board of Supervisors has funded self defense classes for the LGBTQ community.
These classes are free, and you can attend as many as you like. Classes are taught through Defense-ability in Campbell. (defense-ability.com)
Regular classes are offered monthly, but we can also accommodate those who would like to take the class as a group activity. So if you belong to a LGBTQ book club, bowling league, softball team, etc., contact us to book free classes for your group!
Please join us and take advantage of this opportunity!", organizer_id: shahab.id,
image_url:"https://s26.postimg.cc/6y7juh0q1/lgbt.jpg")
