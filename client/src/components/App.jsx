import React from 'react';
// import axios from 'react';
import axios from 'axios';

import Overview from './Overview/Overview.jsx';
import QuestionAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [
        {
            "id": 37311,
            "campus": "hr-rfe",
            "name": "Camo Onesie",
            "slogan": "Blend in to your crowd",
            "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
            "category": "Jackets",
            "default_price": "140.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37312,
            "campus": "hr-rfe",
            "name": "Bright Future Sunglasses",
            "slogan": "You've got to wear shades",
            "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
            "category": "Accessories",
            "default_price": "69.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37313,
            "campus": "hr-rfe",
            "name": "Morning Joggers",
            "slogan": "Make yourself a morning person",
            "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
            "category": "Pants",
            "default_price": "40.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37314,
            "campus": "hr-rfe",
            "name": "Slacker's Slacks",
            "slogan": "Comfortable for everything, or nothing",
            "description": "I'll tell you how great they are after I nap for a bit.",
            "category": "Pants",
            "default_price": "65.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37315,
            "campus": "hr-rfe",
            "name": "Heir Force Ones",
            "slogan": "A sneaker dynasty",
            "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
            "category": "Kicks",
            "default_price": "99.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37316,
            "campus": "hr-rfe",
            "name": "Pumped Up Kicks",
            "slogan": "Faster than a just about anything",
            "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
            "category": "Kicks",
            "default_price": "89.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37317,
            "campus": "hr-rfe",
            "name": "Blues Suede Shoes",
            "slogan": "2019 Stanley Cup Limited Edition",
            "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
            "category": "Dress Shoes",
            "default_price": "120.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37318,
            "campus": "hr-rfe",
            "name": "YEasy 350",
            "slogan": "Just jumped over jumpman",
            "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
            "category": "Kicks",
            "default_price": "450.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37319,
            "campus": "hr-rfe",
            "name": "Summer Shoes",
            "slogan": "A risky call in the spring or fall",
            "description": "Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.",
            "category": "Kicks",
            "default_price": "59.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37320,
            "campus": "hr-rfe",
            "name": "Infinity Stone",
            "slogan": "Reality is often disappointing. That is, it was. Now, reality can be whatever I want.",
            "description": "The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.",
            "category": "Accessories",
            "default_price": "50000000.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37321,
            "campus": "hr-rfe",
            "name": "Air Minis 250",
            "slogan": "Full court support",
            "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
            "category": "Basketball Shoes",
            "default_price": "49.00",
            "created_at": "2021-08-13T14:37:33.145Z",
            "updated_at": "2021-08-13T14:37:33.145Z"
        },
        {
            "id": 37322,
            "campus": "hr-rfe",
            "name": "Garrick Hoodie",
            "slogan": "Dolor officia eos non.",
            "description": "Officia aliquid deserunt voluptate. Nobis modi eius deserunt rerum inventore eos sed distinctio unde. Commodi impedit praesentium atque iste aut et autem quisquam architecto. Non optio natus et in corporis. Et quo omnis eaque aspernatur libero molestiae.",
            "category": "Hoodie",
            "default_price": "947.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37323,
            "campus": "hr-rfe",
            "name": "Alvena Hoodie",
            "slogan": "Recusandae illum dolor non quo.",
            "description": "Laborum eos optio voluptatibus quod. Voluptatem quis repellendus ea quia repellat. Sed laborum necessitatibus quas modi. Ad dolorum ad id molestiae. Dolorem omnis fugiat dolores beatae.",
            "category": "Hoodie",
            "default_price": "572.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37324,
            "campus": "hr-rfe",
            "name": "Jaylen Backpack",
            "slogan": "Porro molestiae ut libero.",
            "description": "Voluptatem et nihil nisi ut vel. Dolores facere nisi vel ab. Rerum cupiditate tempore molestiae quis. Ut eos culpa eos quo voluptas rerum. Modi necessitatibus sunt nam aut quo molestiae at est eius.",
            "category": "Backpack",
            "default_price": "278.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37325,
            "campus": "hr-rfe",
            "name": "Lela Pants",
            "slogan": "Voluptatum eveniet aliquam magni ratione repudiandae praesentium.",
            "description": "Blanditiis est aliquam architecto quia. Saepe quis eum. Officiis nihil est.",
            "category": "Pants",
            "default_price": "120.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37326,
            "campus": "hr-rfe",
            "name": "Jayden Hat",
            "slogan": "Sit deserunt eos temporibus.",
            "description": "Voluptatem repellendus fugit iure ut quidem ex sed. Dolores quod veniam ut doloremque deserunt voluptatum. Quia ratione harum numquam. Ut aliquam autem. Commodi necessitatibus laudantium nisi ducimus nesciunt nisi voluptatum et.",
            "category": "Hat",
            "default_price": "933.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37327,
            "campus": "hr-rfe",
            "name": "Dorris 400 Tank Top",
            "slogan": "Rerum alias numquam nobis rem ex quasi voluptatem veritatis.",
            "description": "Modi et est excepturi occaecati asperiores nulla in dicta et. Ex nihil inventore reprehenderit impedit atque qui. Iusto quis fuga. Velit similique molestiae perferendis ea. Itaque repellendus tenetur enim harum ipsa voluptatem rerum magni. Repellat eligendi qui recusandae quas.",
            "category": "Tank Top",
            "default_price": "830.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37328,
            "campus": "hr-rfe",
            "name": "Precious Sweater",
            "slogan": "Placeat illum et quam vitae.",
            "description": "Sint modi autem rerum numquam voluptas possimus. Et quis cum error eos. Ullam molestias praesentium quia esse recusandae ut. Assumenda quas voluptates iste reiciendis doloribus provident nemo. Vel autem placeat magni est asperiores.",
            "category": "Sweater",
            "default_price": "857.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37329,
            "campus": "hr-rfe",
            "name": "Zoila Sunglasses",
            "slogan": "Eaque rem sapiente illum quaerat aliquam quae enim eum.",
            "description": "Ut sint qui. Dolor molestiae repellendus praesentium omnis unde ut similique. Qui occaecati ut fugit qui necessitatibus fuga sint atque dolorum. Eaque corporis debitis culpa ut.",
            "category": "Sunglasses",
            "default_price": "676.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37330,
            "campus": "hr-rfe",
            "name": "Waylon Slacks",
            "slogan": "Neque fugiat laudantium minus est voluptatem assumenda ratione quo.",
            "description": "Consequatur est corporis qui. Et repudiandae aut ut. Voluptatem et voluptatem modi et dolorum. Qui sint est quidem rerum aspernatur assumenda ut ad libero. Mollitia voluptates illo aliquam qui. Ex at dolores aut voluptas blanditiis a quia ut corporis.",
            "category": "Slacks",
            "default_price": "768.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37331,
            "campus": "hr-rfe",
            "name": "Mavis Sweater",
            "slogan": "Et numquam omnis non voluptatem blanditiis.",
            "description": "Qui nesciunt perspiciatis non qui culpa dolorem mollitia id. Porro consequuntur sunt. Autem tempore magni. Animi et voluptatem assumenda nostrum impedit quos velit minus quas.",
            "category": "Sweater",
            "default_price": "143.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37332,
            "campus": "hr-rfe",
            "name": "Leonel 1250 Socks",
            "slogan": "Blanditiis ut vel non.",
            "description": "Accusantium vero et et sint qui sunt. Veniam et repellat voluptate iste vero. Reprehenderit amet rerum vel et et minima.",
            "category": "Socks",
            "default_price": "892.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37333,
            "campus": "hr-rfe",
            "name": "Sandra Tank Top",
            "slogan": "Inventore inventore provident sunt veritatis ullam quasi consequuntur.",
            "description": "Neque veniam minima facere tempora consequatur. Voluptate voluptatem quaerat corrupti repellendus et sed corporis minus laborum. Reprehenderit illum ea eius libero natus et voluptatem itaque ducimus. Maxime atque nostrum blanditiis fuga voluptas cum quis. Aut repudiandae ex error et ad praesentium consectetur et similique.",
            "category": "Tank Top",
            "default_price": "15.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37334,
            "campus": "hr-rfe",
            "name": "Laurianne Shorts",
            "slogan": "Ipsum laudantium nihil provident eos nihil earum illo.",
            "description": "Omnis possimus est nemo ut voluptatem ipsam eaque voluptates. Officiis et accusantium qui non rerum aliquam. Consectetur est voluptatem exercitationem ut omnis explicabo enim quo alias. Eveniet sunt sequi.",
            "category": "Shorts",
            "default_price": "774.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37335,
            "campus": "hr-rfe",
            "name": "Odessa Cap",
            "slogan": "Dignissimos voluptas qui.",
            "description": "Sapiente omnis saepe quae possimus et. Nostrum tenetur quaerat dolor assumenda labore. Praesentium molestiae magnam odio sunt rem amet. Cum a officiis eligendi vero nihil quis sit dolorem. Necessitatibus ducimus delectus. Asperiores quos sit unde.",
            "category": "Cap",
            "default_price": "147.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37336,
            "campus": "hr-rfe",
            "name": "Naomi Heels",
            "slogan": "Nesciunt ullam quos minima impedit aut quos at labore.",
            "description": "Soluta alias ut et exercitationem magnam accusamus. Voluptatibus quia quos. Quaerat atque culpa quod dolorem omnis. Distinctio facilis voluptate voluptas.",
            "category": "Heels",
            "default_price": "592.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37337,
            "campus": "hr-rfe",
            "name": "Lester Sweater",
            "slogan": "Nihil et aliquid fugiat exercitationem aut.",
            "description": "Eum labore tempora incidunt pariatur. Natus nobis ut beatae quia minima. Sed qui illo iure nihil inventore ut maiores totam ut.",
            "category": "Sweater",
            "default_price": "309.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37338,
            "campus": "hr-rfe",
            "name": "Luz Sunglasses",
            "slogan": "Eligendi error at doloribus laborum vero et vero.",
            "description": "Nihil sed dignissimos ut totam voluptatem. Ducimus blanditiis cum velit enim. At iusto ex. Omnis officiis et quas fugit aut perspiciatis sequi voluptas. Exercitationem aperiam soluta incidunt soluta id aut illo. Ea voluptates quibusdam aut atque consequatur neque nam.",
            "category": "Sunglasses",
            "default_price": "210.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37339,
            "campus": "hr-rfe",
            "name": "Silas Shoes",
            "slogan": "Aperiam eius iusto at eos.",
            "description": "Sequi quia et dolor qui sed aut consequatur illum nobis. Est esse qui voluptatem eius unde qui quod quia quisquam. Beatae libero omnis officia. Dignissimos aut autem. Assumenda nesciunt laudantium qui quae in quam voluptates. Voluptatem eligendi consequatur fugit temporibus molestiae ipsam.",
            "category": "Shoes",
            "default_price": "745.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37340,
            "campus": "hr-rfe",
            "name": "Amina Hat",
            "slogan": "Officia ut quia.",
            "description": "Nihil incidunt inventore quo et minus accusamus dolorum. Quam dolorem porro magni ea eius eos impedit qui aut. Cum deleniti expedita qui natus eum.",
            "category": "Hat",
            "default_price": "796.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37341,
            "campus": "hr-rfe",
            "name": "Aleen Trousers",
            "slogan": "Suscipit voluptatem sint.",
            "description": "Et cum nemo voluptatem eaque eos amet est sapiente. Pariatur ea porro. Repellat consectetur ipsam sapiente id aut aliquid quasi. Molestiae qui autem quo.",
            "category": "Trousers",
            "default_price": "280.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37342,
            "campus": "hr-rfe",
            "name": "Aaron Suit",
            "slogan": "Provident et hic impedit sapiente.",
            "description": "Ut eos veniam quaerat magni necessitatibus illo odio. Enim dolor mollitia incidunt non sit. Tenetur et suscipit doloremque animi. Ut veritatis modi. Quaerat laudantium dolores maxime.",
            "category": "Suit",
            "default_price": "763.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37343,
            "campus": "hr-rfe",
            "name": "Vivienne Romper",
            "slogan": "Nisi eos deserunt vitae quia ut.",
            "description": "Nihil magnam animi voluptatibus. Architecto temporibus et laudantium consequuntur. Quisquam facilis debitis in. Dolorem sint facilis error rerum. Alias deserunt suscipit eos vel unde.",
            "category": "Romper",
            "default_price": "446.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37344,
            "campus": "hr-rfe",
            "name": "Tara Shorts",
            "slogan": "At aut et.",
            "description": "Odit et mollitia ducimus sit. Omnis tempora recusandae in. Dignissimos sapiente pariatur vero maxime nisi ut consectetur quod.",
            "category": "Shorts",
            "default_price": "623.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37345,
            "campus": "hr-rfe",
            "name": "Sedrick Trousers",
            "slogan": "Et ut impedit ut rerum suscipit.",
            "description": "Reprehenderit velit sed est non dignissimos laborum porro eos. Accusantium ut est necessitatibus laudantium vero asperiores eum optio autem. Et eveniet ut expedita reprehenderit sed non. Nostrum et neque dignissimos suscipit sint molestiae quis totam velit. Et quibusdam vel.",
            "category": "Trousers",
            "default_price": "691.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37346,
            "campus": "hr-rfe",
            "name": "Orville Sweater",
            "slogan": "Optio doloremque dolor quae veritatis ratione.",
            "description": "Vel exercitationem et perferendis dolor. Reiciendis explicabo sint et iusto quod natus id voluptas soluta. Incidunt consectetur saepe numquam sapiente qui dolorum ipsa optio quo. Ducimus qui deserunt nam perferendis. Quia sint corporis repellendus.",
            "category": "Sweater",
            "default_price": "438.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37347,
            "campus": "hr-rfe",
            "name": "Danial Sweater",
            "slogan": "Nulla dolor sit nam.",
            "description": "Impedit nemo laudantium est accusantium laborum iure officiis. Libero voluptatem voluptatem fugit minus qui sunt dolorum tenetur. Ratione vel voluptatum id amet voluptatem.",
            "category": "Sweater",
            "default_price": "700.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37348,
            "campus": "hr-rfe",
            "name": "Yadira Hoodie",
            "slogan": "Enim et doloribus ipsa ea rerum dolorem.",
            "description": "Est dolore voluptatum natus necessitatibus repellendus aperiam. Excepturi sit modi totam architecto explicabo. Voluptatibus et totam ut quae dolorum ipsa nihil sunt. Voluptatibus odio doloremque eum. Et sunt id a quos et asperiores quo.",
            "category": "Hoodie",
            "default_price": "814.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37349,
            "campus": "hr-rfe",
            "name": "Kadin Dress",
            "slogan": "Ab quisquam officiis omnis ipsa.",
            "description": "Molestiae est atque praesentium cum natus eum. Illum enim aliquid. Eligendi eum cupiditate vel. Quibusdam qui sed. Consequuntur qui voluptatum placeat magni aliquid amet. Sed maiores laboriosam dolorem ut libero facilis.",
            "category": "Dress",
            "default_price": "149.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37350,
            "campus": "hr-rfe",
            "name": "Mittie Dress",
            "slogan": "Pariatur reiciendis quidem officia.",
            "description": "Neque voluptatem vero ipsum voluptatem atque quia sint. Voluptas blanditiis et minima illum aperiam deserunt aut atque magnam. Nemo corporis quia quidem harum similique. Quis repellendus asperiores. Eum in nam dicta eius sint.",
            "category": "Dress",
            "default_price": "347.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37351,
            "campus": "hr-rfe",
            "name": "The Jannie Hat",
            "slogan": "Dolorem delectus dolore ut.",
            "description": "Aspernatur sit nesciunt quas sit qui et tempore. Et cumque sint rerum ut at et explicabo inventore in. Mollitia doloribus reprehenderit repudiandae dolore eaque ducimus eaque nesciunt. Magnam dignissimos exercitationem. Nam illo voluptatem odit. Nihil et maxime.",
            "category": "Hat",
            "default_price": "626.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37352,
            "campus": "hr-rfe",
            "name": "Cristina Shorts",
            "slogan": "Asperiores corporis rerum quam accusantium.",
            "description": "Quaerat minus fuga possimus assumenda et. Impedit laborum eos aliquam voluptatem cumque nisi. Id velit qui. Iste sed expedita repellat non autem vel iste.",
            "category": "Shorts",
            "default_price": "82.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37353,
            "campus": "hr-rfe",
            "name": "Osvaldo Coat",
            "slogan": "Ex libero sunt ipsam ratione omnis.",
            "description": "Impedit quod voluptatem. In rerum doloribus laborum cum nemo sint quaerat suscipit sint. Eos illo tenetur quis consequatur autem perferendis.",
            "category": "Coat",
            "default_price": "534.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37354,
            "campus": "hr-rfe",
            "name": "Friedrich Jacket",
            "slogan": "Iste et rerum aperiam reiciendis ut deleniti.",
            "description": "Voluptatem alias perspiciatis cupiditate quo. Quo fugit architecto. Quia possimus cum.",
            "category": "Jacket",
            "default_price": "425.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37355,
            "campus": "hr-rfe",
            "name": "Hank Cap",
            "slogan": "Labore voluptates at quos recusandae ut.",
            "description": "Magnam explicabo possimus iusto quia et. Et fugit occaecati ex. Maxime et maiores. Dolores nobis ut distinctio id dignissimos doloribus dolorem voluptatem maxime. Et aut non. Quia iure corrupti perspiciatis perspiciatis.",
            "category": "Cap",
            "default_price": "952.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37356,
            "campus": "hr-rfe",
            "name": "The Marcelina Shoes",
            "slogan": "Quisquam neque reiciendis.",
            "description": "Nisi minus et ut dicta sequi nostrum voluptatem sed aut. Aut et reprehenderit explicabo aspernatur iure ullam vel consectetur. Totam nemo id qui harum illum quis aspernatur iusto temporibus. Quae occaecati aut. Corporis illum laboriosam voluptatem.",
            "category": "Shoes",
            "default_price": "601.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37357,
            "campus": "hr-rfe",
            "name": "Alexis Slacks",
            "slogan": "Aperiam qui totam labore qui praesentium et ea eius.",
            "description": "Corporis corporis quos consequatur omnis magnam. Ut labore eius qui totam dolor aut inventore. Aut voluptatem voluptas enim. Est cumque accusamus recusandae molestias dolorem ut vitae. Nam in in iste voluptatum voluptate sapiente. Fugit soluta occaecati iure dolor reiciendis.",
            "category": "Slacks",
            "default_price": "566.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37358,
            "campus": "hr-rfe",
            "name": "Mathias Shorts",
            "slogan": "Minima similique sunt est ut deserunt ipsam et ut exercitationem.",
            "description": "A omnis ea tempore delectus ad qui vel. Dolores sunt repellat voluptatum veritatis minus esse optio. Aut eos asperiores. Id omnis natus ipsam quia corrupti.",
            "category": "Shorts",
            "default_price": "675.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37359,
            "campus": "hr-rfe",
            "name": "Jenifer Shirt",
            "slogan": "Corporis est rerum ea impedit.",
            "description": "Velit nemo quasi dolores. Ut aut natus doloremque laudantium. Iste nulla omnis nam nihil. Sit perspiciatis similique commodi sapiente sit at voluptas. Quas blanditiis at.",
            "category": "Shirt",
            "default_price": "535.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37360,
            "campus": "hr-rfe",
            "name": "Brown Romper",
            "slogan": "Eos pariatur reiciendis.",
            "description": "Recusandae ullam illum repellendus iusto. Enim consequatur inventore voluptate. Quidem et aut qui amet mollitia eveniet.",
            "category": "Romper",
            "default_price": "638.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37361,
            "campus": "hr-rfe",
            "name": "Fanny Trousers",
            "slogan": "Quis tempora qui debitis quia tempore magnam.",
            "description": "Autem et quo est eos. Enim aut voluptas reiciendis quasi nostrum reprehenderit saepe error. Hic voluptatibus modi ullam. Esse blanditiis aut. Culpa vel aliquid minima aliquid delectus nulla occaecati ducimus.",
            "category": "Trousers",
            "default_price": "468.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37362,
            "campus": "hr-rfe",
            "name": "Lowell Romper",
            "slogan": "Amet aut dolorum et repellat expedita omnis impedit fugiat veritatis.",
            "description": "Dolores ipsum cum voluptatem quos. Quis sit at id cumque in nostrum numquam ipsa quae. Repudiandae assumenda minus natus ullam omnis at hic natus.",
            "category": "Romper",
            "default_price": "719.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37363,
            "campus": "hr-rfe",
            "name": "Cesar Sunglasses",
            "slogan": "Inventore blanditiis hic minima.",
            "description": "Et dicta et voluptates eligendi sit dolor. Eum quas et aut dignissimos. Eaque dignissimos pariatur in nostrum velit maxime tenetur et inventore. Incidunt sequi neque similique. Voluptates pariatur magnam ipsum nostrum voluptatem molestias sunt delectus.",
            "category": "Sunglasses",
            "default_price": "214.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37364,
            "campus": "hr-rfe",
            "name": "Kenyon Slacks",
            "slogan": "Est ea tenetur mollitia est nihil fuga numquam sed.",
            "description": "Neque ex doloribus soluta consequuntur accusantium ea ullam. Velit blanditiis quis fugiat non. Qui et velit nihil iure cumque rerum. Sint voluptatum incidunt delectus.",
            "category": "Slacks",
            "default_price": "818.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37365,
            "campus": "hr-rfe",
            "name": "Arlene Dress",
            "slogan": "Officia deserunt perferendis est alias sint quis.",
            "description": "Corrupti nemo asperiores quam. Exercitationem dolorem magnam ipsa et. Eius debitis voluptates voluptate non aliquam laborum nisi quis labore. Earum totam minus vero sint alias. Mollitia culpa aut ducimus veniam. Nulla sed qui ut dolores maxime quisquam suscipit sit.",
            "category": "Dress",
            "default_price": "381.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37366,
            "campus": "hr-rfe",
            "name": "Salvador Romper",
            "slogan": "Eum voluptatem nesciunt delectus non suscipit.",
            "description": "Blanditiis aut suscipit quia perferendis quia aut harum. Commodi et illo consequatur distinctio a. Laboriosam ad nisi. Qui id perferendis praesentium. Et cumque ipsum animi repudiandae.",
            "category": "Romper",
            "default_price": "806.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37367,
            "campus": "hr-rfe",
            "name": "Macie Shirt",
            "slogan": "Tempora consequatur corporis rem necessitatibus.",
            "description": "Explicabo enim voluptatem excepturi qui ducimus commodi culpa dignissimos. Totam nihil voluptatibus consequatur dignissimos repudiandae nam ut est. Nihil nesciunt ducimus. Suscipit ipsa impedit ut perferendis. In nemo non ipsum dolor similique aut in hic.",
            "category": "Shirt",
            "default_price": "565.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37368,
            "campus": "hr-rfe",
            "name": "Delbert Sweater",
            "slogan": "Et quia quam qui aut aut omnis.",
            "description": "Nesciunt unde rem dolor. Vitae velit beatae minima exercitationem in non. Nobis quod voluptatem incidunt repellat numquam esse nihil. Et fugit aut qui id amet impedit in error nihil.",
            "category": "Sweater",
            "default_price": "550.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37369,
            "campus": "hr-rfe",
            "name": "Magnus Dress",
            "slogan": "Dolorum vel omnis laudantium.",
            "description": "In quae nam est ab. Sunt corrupti et eius aut odio totam in a sit. Quas ratione dolore dignissimos aliquam. Enim est possimus delectus quaerat illum.",
            "category": "Dress",
            "default_price": "760.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37370,
            "campus": "hr-rfe",
            "name": "Zelma Shirt",
            "slogan": "Maiores aut doloremque odio quae sed cupiditate repellat consequatur aliquid.",
            "description": "Fuga quaerat exercitationem et animi. Dicta sequi minus nesciunt atque quia. Quia nostrum et consequatur veritatis occaecati asperiores repellat temporibus explicabo. Vero accusamus voluptas. Dolorum aperiam est dolores eveniet facilis qui ea. Est deleniti maiores velit.",
            "category": "Shirt",
            "default_price": "974.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37371,
            "campus": "hr-rfe",
            "name": "Dawson Jacket",
            "slogan": "Nobis aperiam architecto cupiditate a omnis atque.",
            "description": "Tenetur laborum iure ea nemo deserunt beatae. Voluptatibus a adipisci. Velit voluptates architecto numquam fuga laudantium accusamus ut nam. Omnis odit in labore dolor ut. Qui et quia minus soluta architecto quas vero dicta eos.",
            "category": "Jacket",
            "default_price": "585.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37372,
            "campus": "hr-rfe",
            "name": "Monserrat Skirt",
            "slogan": "Quidem eum voluptas.",
            "description": "Et et mollitia ipsa at doloremque fugit. Suscipit architecto reiciendis debitis quasi dolores fugit. Voluptas et velit voluptas et amet magni. Repellat quod soluta nisi.",
            "category": "Skirt",
            "default_price": "773.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37373,
            "campus": "hr-rfe",
            "name": "Betty Jacket",
            "slogan": "Odit dolore aut sit dicta nam perferendis similique quisquam praesentium.",
            "description": "Reiciendis non ad nemo mollitia et deserunt rerum qui iusto. Est odit nam cum qui rerum quis quia sunt. Est quaerat officia nulla et consequatur qui quia error. Facilis ut vitae odio aut et. Velit iure ab saepe quo dolorum sed inventore nulla.",
            "category": "Jacket",
            "default_price": "569.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37374,
            "campus": "hr-rfe",
            "name": "Janet Shirt",
            "slogan": "Cupiditate ea saepe aut ut expedita voluptas assumenda.",
            "description": "In exercitationem vero quod id. Qui perferendis est dicta a voluptas dolor voluptas. Libero distinctio incidunt tempore tenetur expedita sit. Fugiat rem quam quo dolorum nihil. Ut fuga enim qui pariatur iure dolorem numquam ad. Voluptate enim eveniet omnis qui eligendi rerum et voluptatem ea.",
            "category": "Shirt",
            "default_price": "368.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37375,
            "campus": "hr-rfe",
            "name": "Erwin Socks",
            "slogan": "Aut amet mollitia dolores voluptatem aliquid facere.",
            "description": "Dolorem minima nulla cumque dolorum et. A dolorem quia. Numquam minima tempora voluptatem quam in. Dolor adipisci quasi nihil et corrupti ex enim. Voluptas rerum dolore temporibus.",
            "category": "Socks",
            "default_price": "415.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37376,
            "campus": "hr-rfe",
            "name": "Domenic Sweatpants",
            "slogan": "Nemo adipisci dolor repudiandae eius qui omnis.",
            "description": "Eius iste in sint impedit. Et quo porro perspiciatis sed et est dicta. Cupiditate totam ut perspiciatis accusamus similique itaque blanditiis.",
            "category": "Sweatpants",
            "default_price": "475.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37377,
            "campus": "hr-rfe",
            "name": "Brionna Jacket",
            "slogan": "Ut velit cupiditate et nesciunt rerum maxime illum.",
            "description": "Expedita natus aut adipisci. Doloribus eos quia sit. Eos molestiae non dolor voluptatem. Saepe quasi iusto placeat est qui nesciunt expedita.",
            "category": "Jacket",
            "default_price": "42.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37378,
            "campus": "hr-rfe",
            "name": "Gina Sweater",
            "slogan": "Non qui repudiandae dolorem fugiat.",
            "description": "Expedita hic numquam ipsam et eos. Et ut voluptatem vitae occaecati quis voluptatum. Nemo aut ea cumque rem unde assumenda. Molestias rem sed ut sunt facere ut aut dolor aut. Sint esse expedita fuga ea neque. Ut facilis et odit.",
            "category": "Sweater",
            "default_price": "461.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37379,
            "campus": "hr-rfe",
            "name": "Grayson Hoodie",
            "slogan": "Iure est voluptatem quasi facere reiciendis voluptatibus optio voluptate.",
            "description": "A illo voluptatem voluptatum. Temporibus reiciendis id veritatis consequatur quis. Distinctio facere sunt. Porro exercitationem deserunt molestiae illo doloremque veritatis quia repellendus non. Consectetur quam sint aspernatur voluptatem reiciendis consequatur cumque error voluptatem.",
            "category": "Hoodie",
            "default_price": "839.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37380,
            "campus": "hr-rfe",
            "name": "Garnet Coat",
            "slogan": "Reprehenderit iure aspernatur placeat.",
            "description": "Est dolorem tempora porro. Voluptatum hic asperiores dolorem non atque. Quod maxime quia aliquam. Ullam libero voluptatum animi doloribus quidem consequatur aut optio.",
            "category": "Coat",
            "default_price": "133.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37381,
            "campus": "hr-rfe",
            "name": "Brennon 600 Dress",
            "slogan": "Corporis illo temporibus.",
            "description": "Ut soluta et tempore earum possimus non et est. Ut occaecati ipsa reprehenderit. Sint sapiente repudiandae quo. Dolores ea qui ea quis velit quia placeat ipsam laborum.",
            "category": "Dress",
            "default_price": "206.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37382,
            "campus": "hr-rfe",
            "name": "Jazlyn Shorts",
            "slogan": "Nemo tempora eum porro necessitatibus quibusdam alias aut saepe itaque.",
            "description": "Dolorum doloremque quod atque pariatur consequatur rerum consequatur ut voluptas. Voluptatem et mollitia sint placeat. Voluptas dolorem animi non dolor et facilis et ea non. Qui voluptas adipisci et aspernatur consequatur. Sed voluptatem pariatur fugit. Voluptas repudiandae fugiat quia cumque eos.",
            "category": "Shorts",
            "default_price": "167.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37383,
            "campus": "hr-rfe",
            "name": "Tomas Backpack",
            "slogan": "Excepturi error deleniti et accusantium hic.",
            "description": "Velit est est iure amet quia ab modi quasi quasi. Dolorem accusantium optio ab a nam voluptatibus. Temporibus iusto libero.",
            "category": "Backpack",
            "default_price": "351.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37384,
            "campus": "hr-rfe",
            "name": "Abel Jacket",
            "slogan": "Qui velit magni molestiae sit molestiae qui asperiores.",
            "description": "Eum at illum eius placeat beatae cupiditate et quisquam et. Ut aut odit ut ea iusto laborum soluta non. Cum aut molestias consequatur consequatur eaque quia assumenda consequatur. Et vel tempore expedita eum voluptatum ut eos ea aliquam. Dolores qui quidem laborum molestiae libero maiores reprehenderit. Soluta saepe corporis est.",
            "category": "Jacket",
            "default_price": "149.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37385,
            "campus": "hr-rfe",
            "name": "Jasmin Pants",
            "slogan": "Ipsum quo sunt.",
            "description": "Voluptatem sit quam asperiores odio. Neque omnis ad ratione. Quod velit aut eligendi rerum.",
            "category": "Pants",
            "default_price": "459.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37386,
            "campus": "hr-rfe",
            "name": "Caden Hat",
            "slogan": "Omnis a corrupti alias est qui repudiandae.",
            "description": "Dolores non itaque nesciunt iste adipisci eveniet exercitationem aut. Error debitis quod. Veritatis nihil debitis ducimus ea laboriosam itaque fugit officiis minus. Amet est eum eum neque dolor sint odio aut.",
            "category": "Hat",
            "default_price": "842.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37387,
            "campus": "hr-rfe",
            "name": "Clinton Tank Top",
            "slogan": "Velit nesciunt a harum rem enim et reiciendis.",
            "description": "Soluta velit rerum fuga laudantium deserunt labore et. Odio unde ut. Quaerat vitae atque dolores odit et iste quia. Occaecati fugit quod qui numquam laboriosam in possimus mollitia. Deserunt error sit et qui doloribus. Magni vel eum.",
            "category": "Tank Top",
            "default_price": "80.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37388,
            "campus": "hr-rfe",
            "name": "Araceli Hoodie",
            "slogan": "Est vitae ullam et exercitationem dolores assumenda explicabo ducimus.",
            "description": "Est deleniti consectetur amet alias accusantium dolorum. Sunt voluptate alias molestiae sunt. Voluptatibus molestiae repellendus est doloremque est dolores iste.",
            "category": "Hoodie",
            "default_price": "996.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37389,
            "campus": "hr-rfe",
            "name": "Tad Slacks",
            "slogan": "Itaque omnis qui adipisci.",
            "description": "Autem architecto sed voluptatem neque quaerat quis sit iste qui. Repellat velit ut. Quasi eum illo amet saepe animi veniam. Et laboriosam qui. Dolorem nisi animi debitis incidunt labore.",
            "category": "Slacks",
            "default_price": "604.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37390,
            "campus": "hr-rfe",
            "name": "The Hester Trousers",
            "slogan": "In quia iure maxime at asperiores ut velit.",
            "description": "Consectetur tempore eos nesciunt. Facilis reiciendis suscipit dolores repellat odit. Cumque tempore amet aut. Placeat dolores tempora quia. Laboriosam consequatur debitis et ex. Delectus qui vero consequatur quos ad esse explicabo delectus.",
            "category": "Trousers",
            "default_price": "850.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37391,
            "campus": "hr-rfe",
            "name": "Kirk Hoodie",
            "slogan": "Labore maxime quibusdam pariatur iusto harum ut facere et eligendi.",
            "description": "Cupiditate illum animi ipsum fugiat quia tenetur error et. Fuga qui voluptas molestias cupiditate ut odio sunt delectus corrupti. Labore molestiae sit recusandae consequuntur aperiam commodi quia dolore. Sunt porro quas nesciunt officia est amet expedita. Odio qui non est exercitationem exercitationem sit consequatur nam. Veniam unde expedita aut.",
            "category": "Hoodie",
            "default_price": "488.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37392,
            "campus": "hr-rfe",
            "name": "Alia Sweatpants",
            "slogan": "Eius qui reiciendis expedita culpa dolores sed dolorum.",
            "description": "Nulla neque tempore error magni iure omnis ratione accusantium exercitationem. Voluptas nesciunt recusandae nisi. Id ex qui et saepe eos.",
            "category": "Sweatpants",
            "default_price": "733.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37393,
            "campus": "hr-rfe",
            "name": "Delphia Hat",
            "slogan": "In perspiciatis sint at quia optio voluptatibus.",
            "description": "Molestias est nostrum amet velit ullam at cumque. Culpa placeat excepturi aliquid ullam. Occaecati dolorum hic repellendus ut harum sunt recusandae ducimus quo.",
            "category": "Hat",
            "default_price": "420.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37394,
            "campus": "hr-rfe",
            "name": "Maximillian Tank Top",
            "slogan": "Nostrum aperiam officiis unde.",
            "description": "Voluptatum earum excepturi expedita cum accusantium et sed possimus veritatis. Ex impedit adipisci id. Est expedita hic distinctio blanditiis aut maxime dicta debitis.",
            "category": "Tank Top",
            "default_price": "982.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37395,
            "campus": "hr-rfe",
            "name": "Walter Jacket",
            "slogan": "Quam culpa sint molestiae voluptatem.",
            "description": "Ipsum earum ipsum recusandae. Sint similique saepe autem labore. Et expedita totam in et est quibusdam occaecati. Est tempore sed harum iusto neque odio incidunt. Veniam impedit maxime adipisci non. Quibusdam voluptatibus non et et soluta sequi pariatur.",
            "category": "Jacket",
            "default_price": "782.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37396,
            "campus": "hr-rfe",
            "name": "Clare Trousers",
            "slogan": "Corrupti nihil adipisci vel eum.",
            "description": "Assumenda ea est ab porro aliquam. Et eius eum culpa quaerat. Ea recusandae perspiciatis eligendi pariatur accusantium architecto porro facilis.",
            "category": "Trousers",
            "default_price": "580.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37397,
            "campus": "hr-rfe",
            "name": "Rashad Heels",
            "slogan": "Provident nostrum voluptas sed ut id voluptatem vitae.",
            "description": "Qui a et occaecati. Qui optio minus ea veritatis nulla modi sed. Autem eum voluptatem sit consequatur eveniet. Enim doloremque corporis aliquam ut quibusdam consequatur dolores. Quo a ipsam quia eveniet unde corrupti harum impedit in. Possimus est natus accusantium qui voluptas quis fuga.",
            "category": "Heels",
            "default_price": "533.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37398,
            "campus": "hr-rfe",
            "name": "Kameron Shirt",
            "slogan": "Commodi sit consequatur debitis eum consequatur non ratione eius ipsa.",
            "description": "Enim consequatur dolore deserunt hic. A laudantium iste minima. Quam soluta accusantium. Voluptas cum voluptate vel. Sint asperiores vero non nostrum id molestiae non quod eligendi. Eos quis tempora iure praesentium vero earum fugiat reiciendis.",
            "category": "Shirt",
            "default_price": "827.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37399,
            "campus": "hr-rfe",
            "name": "Sven Coat",
            "slogan": "Explicabo laudantium et quae expedita quasi dolorem tempore alias.",
            "description": "Voluptas dignissimos et earum non labore deleniti ut cumque dolores. Repellendus quisquam ad inventore tenetur dicta. Accusamus est nemo quia qui libero vel eveniet nulla. Magnam repellendus doloribus ea odio quisquam autem. Odio vel fuga repudiandae perspiciatis voluptatem assumenda ducimus voluptates ducimus. Suscipit qui ducimus rerum labore.",
            "category": "Coat",
            "default_price": "361.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37400,
            "campus": "hr-rfe",
            "name": "Hope Socks",
            "slogan": "Quas totam sed omnis voluptas nisi minima.",
            "description": "Magnam aperiam maiores ullam ab. Dolorum dolorem consectetur. Adipisci rem in et nihil qui. Ut voluptas iure quos officiis illum ad quia nisi repellat. Quae sequi id sed qui.",
            "category": "Socks",
            "default_price": "302.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37401,
            "campus": "hr-rfe",
            "name": "Khalid Sweatpants",
            "slogan": "Qui deserunt quidem dolor.",
            "description": "Ut natus beatae quia numquam soluta eum earum. Quidem tempore blanditiis iusto nulla optio dicta ratione ut corrupti. Illum modi laboriosam molestiae illo. Soluta fugit aut qui rem.",
            "category": "Sweatpants",
            "default_price": "401.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37402,
            "campus": "hr-rfe",
            "name": "Romaine Cap",
            "slogan": "Recusandae rerum possimus quia accusantium facilis culpa in id perspiciatis.",
            "description": "Inventore at consectetur suscipit odit molestias non. Fuga vero facilis odit. Illo libero quia consequuntur.",
            "category": "Cap",
            "default_price": "611.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37403,
            "campus": "hr-rfe",
            "name": "Emmy 1050 Skirt",
            "slogan": "Aspernatur architecto adipisci et.",
            "description": "Non at culpa. Et adipisci omnis repellendus debitis et et. Pariatur et et qui excepturi voluptatem voluptas cupiditate. Nihil neque ipsam eos similique minima quibusdam consequatur sed sit. Est voluptatem est dolores ex et.",
            "category": "Skirt",
            "default_price": "484.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37404,
            "campus": "hr-rfe",
            "name": "Mae Jacket",
            "slogan": "Impedit consectetur ut fugit qui quidem fugit delectus quod.",
            "description": "Sed doloribus neque. Laboriosam nihil atque. Facere ea corrupti animi at facere.",
            "category": "Jacket",
            "default_price": "901.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37405,
            "campus": "hr-rfe",
            "name": "Aletha Suit",
            "slogan": "Magnam aliquam beatae quasi sit perspiciatis accusamus commodi.",
            "description": "Voluptatem natus sint autem esse dolor. Consequatur aperiam repellendus quisquam omnis temporibus. Occaecati eveniet eaque. Voluptates et aut nihil ut tempora aut ut eos. Provident esse molestiae voluptatem incidunt velit dolorum assumenda accusamus. Eos et suscipit animi unde laborum.",
            "category": "Suit",
            "default_price": "515.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37406,
            "campus": "hr-rfe",
            "name": "Rahul Socks",
            "slogan": "Non ut iste.",
            "description": "Corrupti ratione quasi quidem quia quis consequuntur sapiente nobis. Cupiditate at in. Facilis quod beatae possimus illum non qui earum illo. Veniam cupiditate autem ut et facilis repudiandae vitae ut ut. Nam eligendi beatae officiis sunt dolorem dicta. Est quod aperiam alias voluptate officia voluptatibus.",
            "category": "Socks",
            "default_price": "376.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37407,
            "campus": "hr-rfe",
            "name": "Trevor Sunglasses",
            "slogan": "Sit quia ipsa eaque vero.",
            "description": "Accusantium aperiam velit eum qui aut provident. Itaque quae alias qui explicabo ipsam. Occaecati aspernatur qui mollitia voluptas officiis voluptatem.",
            "category": "Sunglasses",
            "default_price": "605.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37408,
            "campus": "hr-rfe",
            "name": "Leopold Pants",
            "slogan": "Et saepe ad saepe sed repellat quis.",
            "description": "Consequuntur consequatur est. In et quis esse magnam ea non nihil. Et eos libero et eveniet quidem consequatur officiis omnis qui. Molestiae est ut placeat vel ipsa. Aut architecto dolorem dolor rerum. Et iure omnis nostrum eos voluptate voluptas.",
            "category": "Pants",
            "default_price": "723.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37409,
            "campus": "hr-rfe",
            "name": "Holden Socks",
            "slogan": "Repellendus asperiores minus atque voluptates qui est doloribus incidunt ea.",
            "description": "Vero eaque laboriosam. Repellendus consequuntur consequuntur consectetur. Laudantium aspernatur nulla in et fugiat et ipsam. Illum sunt qui. Ea perferendis aut doloremque sit dignissimos repudiandae eveniet in. Voluptate cupiditate quidem dolor minus dolorem vel tempora nihil.",
            "category": "Socks",
            "default_price": "144.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37410,
            "campus": "hr-rfe",
            "name": "Rosella Jacket",
            "slogan": "Autem commodi voluptates.",
            "description": "Repellat voluptatibus ipsa neque tempore ipsa et. Voluptatem velit impedit voluptatem optio. Nulla minus error blanditiis rerum alias. Aspernatur et dolor id quasi dolorem.",
            "category": "Jacket",
            "default_price": "479.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37411,
            "campus": "hr-rfe",
            "name": "Emmitt Skirt",
            "slogan": "Eos libero autem saepe esse.",
            "description": "Voluptate voluptas labore non eius eos cumque nobis dignissimos. Amet vel totam et dolorum magni ea voluptas. Magni occaecati adipisci distinctio et sunt fugiat.",
            "category": "Skirt",
            "default_price": "312.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37412,
            "campus": "hr-rfe",
            "name": "Stefan Coat",
            "slogan": "Rem est officiis voluptatum ab unde eius.",
            "description": "Nobis reprehenderit corporis praesentium in vero vitae. Ab rerum cupiditate fugit praesentium et natus. Placeat commodi quia laborum dicta et tenetur ut.",
            "category": "Coat",
            "default_price": "407.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37413,
            "campus": "hr-rfe",
            "name": "Cassidy Pants",
            "slogan": "Corporis voluptas ab ratione esse molestiae voluptatum.",
            "description": "Ipsa quia tempore nobis autem sit est consequatur. Excepturi et sequi harum facilis. Adipisci cumque ad ab. Laboriosam et atque et possimus accusantium. Inventore blanditiis neque nulla quos repellendus sint deserunt dolor.",
            "category": "Pants",
            "default_price": "405.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37414,
            "campus": "hr-rfe",
            "name": "Emie Heels",
            "slogan": "Quia qui tempore impedit voluptates illum sit.",
            "description": "Ipsa nemo error qui. Harum repellendus amet repellendus qui est totam aliquam quibusdam error. Suscipit ducimus expedita voluptatem eum rerum possimus esse sapiente. Quia iusto et deserunt delectus aut aut aut. Est voluptate at voluptas inventore aut odit. Qui quam nemo magni.",
            "category": "Heels",
            "default_price": "220.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37415,
            "campus": "hr-rfe",
            "name": "Maude Hoodie",
            "slogan": "Quia sit consequatur.",
            "description": "Ratione sed assumenda qui magni explicabo. Iure est voluptatibus ullam. Optio impedit incidunt fugit et ipsum enim quae iure qui. Architecto in sed consequatur et quia excepturi esse quis quam.",
            "category": "Hoodie",
            "default_price": "192.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37416,
            "campus": "hr-rfe",
            "name": "Rachel 400 Shirt",
            "slogan": "Et dolorem aut saepe dolor laborum.",
            "description": "Quia similique beatae doloremque atque eos eligendi. Porro provident iure voluptas tempora reprehenderit ipsum dolorem. Aut nesciunt delectus aut inventore. Exercitationem non voluptatum a rerum. Ratione minima maxime quod dolores. Aut molestiae expedita et.",
            "category": "Shirt",
            "default_price": "520.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37417,
            "campus": "hr-rfe",
            "name": "Stephon Shorts",
            "slogan": "Voluptas harum unde quidem in est autem.",
            "description": "Est soluta vel maxime eligendi quos. Temporibus ut quis a eum eligendi. Velit cupiditate libero. Quo reprehenderit sint sint. Quae ut enim rerum ipsum est aperiam velit. Quia aut quos mollitia impedit voluptates explicabo ducimus vel.",
            "category": "Shorts",
            "default_price": "356.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37418,
            "campus": "hr-rfe",
            "name": "Will Shorts",
            "slogan": "Consequuntur temporibus et quia.",
            "description": "Aspernatur rerum dolorum dolorem quo unde. Doloremque quasi ut beatae. Molestiae eius et vel consequuntur corrupti. Nostrum commodi odit porro. Odio eum nobis non perferendis provident et eius quia quas.",
            "category": "Shorts",
            "default_price": "672.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37419,
            "campus": "hr-rfe",
            "name": "Rosalind Tank Top",
            "slogan": "Qui enim animi totam est ea esse harum illum sed.",
            "description": "Delectus eius exercitationem et sed quia in dolor. Sed ipsum est laborum repudiandae tenetur eveniet et. Dolores optio esse ullam rerum laborum voluptas illum. Eveniet fuga quisquam fugiat sed earum tempora aut maiores consectetur. Ad ut aut quae ea adipisci at.",
            "category": "Tank Top",
            "default_price": "938.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37420,
            "campus": "hr-rfe",
            "name": "Mariano Shorts",
            "slogan": "Et commodi porro non praesentium qui.",
            "description": "Earum expedita assumenda dolore placeat error eum fugiat. Quo placeat sapiente inventore. Enim molestiae magnam quas iusto placeat.",
            "category": "Shorts",
            "default_price": "689.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37421,
            "campus": "hr-rfe",
            "name": "Cleta Shorts",
            "slogan": "Ipsam est animi hic delectus itaque delectus sint placeat.",
            "description": "Voluptatem ipsa repellat. Debitis commodi atque blanditiis aperiam. Quia autem incidunt deleniti esse modi natus similique molestiae. Fugiat ducimus nobis voluptatum. Omnis reprehenderit ut exercitationem. Veniam labore dolore minus vitae.",
            "category": "Shorts",
            "default_price": "445.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37422,
            "campus": "hr-rfe",
            "name": "Jennie Socks",
            "slogan": "Voluptas vero odit qui eligendi voluptatum molestias eum.",
            "description": "Excepturi in maxime non rerum ex eveniet. Accusantium rerum autem magni. Vitae minima natus. Aut et eligendi et.",
            "category": "Socks",
            "default_price": "136.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37423,
            "campus": "hr-rfe",
            "name": "Ciara Shorts",
            "slogan": "Aut dolores id sit minima distinctio odit ducimus quia.",
            "description": "Quia molestias consequatur culpa quidem. Natus excepturi sit rerum. Eos totam quos dolorum ut. Repellendus repellendus ex enim velit et quas. Sed officia minus qui est facilis quibusdam velit.",
            "category": "Shorts",
            "default_price": "619.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37424,
            "campus": "hr-rfe",
            "name": "Juana Cap",
            "slogan": "Illo magnam cum illum.",
            "description": "Et ea aut magnam. Qui voluptatibus sequi nam. Non quidem et.",
            "category": "Cap",
            "default_price": "901.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37425,
            "campus": "hr-rfe",
            "name": "Elmore 500 Romper",
            "slogan": "Exercitationem cupiditate ea quis aut.",
            "description": "Ipsam laborum cum error. Optio corrupti itaque voluptas nam facilis non accusamus possimus quo. Itaque quia provident quisquam voluptatum consequuntur molestiae recusandae quod. Iusto excepturi debitis maiores modi suscipit dignissimos officia eos. Eligendi maiores ad architecto magnam amet ex. Sunt qui rerum aut qui aliquid eligendi cupiditate.",
            "category": "Romper",
            "default_price": "31.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37426,
            "campus": "hr-rfe",
            "name": "Rocio Jacket",
            "slogan": "Corporis explicabo dolorem ex.",
            "description": "Qui maiores qui quia commodi sunt. Pariatur similique est autem vero. At est repudiandae eligendi. Illo earum maxime sed rerum temporibus aperiam nihil a. Tempore nostrum fugit enim inventore sunt. A voluptatem quibusdam.",
            "category": "Jacket",
            "default_price": "806.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37427,
            "campus": "hr-rfe",
            "name": "Laurel Hoodie",
            "slogan": "Aliquam veniam voluptatem distinctio impedit non quas voluptatem molestiae.",
            "description": "Laboriosam magni aliquid voluptas. Aut asperiores sed iusto dicta velit et illo. Ut saepe quibusdam velit ullam voluptatem.",
            "category": "Hoodie",
            "default_price": "48.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37428,
            "campus": "hr-rfe",
            "name": "Bettye Heels",
            "slogan": "Minus voluptatem est soluta.",
            "description": "Commodi doloribus voluptatum illo ut ut dolorum nihil voluptate. Voluptates qui et et a. Amet inventore in quisquam deleniti tempore. Nemo sed magni ipsam.",
            "category": "Heels",
            "default_price": "401.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37429,
            "campus": "hr-rfe",
            "name": "Mertie Tank Top",
            "slogan": "Laudantium quaerat consequuntur dolor autem consectetur aliquam nam.",
            "description": "Architecto qui aliquid quas corporis quaerat. Itaque molestias non. Esse ipsam cupiditate quae. Asperiores nulla laboriosam quia doloribus vitae perferendis rem. Dolor consectetur sit non et maxime voluptas. Aspernatur ea molestiae qui harum veniam fugiat ut pariatur.",
            "category": "Tank Top",
            "default_price": "986.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37430,
            "campus": "hr-rfe",
            "name": "Delaney Boots",
            "slogan": "Quia sit voluptatem non atque praesentium eaque asperiores.",
            "description": "Praesentium aut voluptatum fuga animi voluptatum ab ut enim. Aliquid voluptate a at delectus adipisci praesentium. Et nemo praesentium.",
            "category": "Boots",
            "default_price": "779.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37431,
            "campus": "hr-rfe",
            "name": "Flavie Sweatpants",
            "slogan": "Adipisci commodi est ut quia qui et dolor.",
            "description": "Facilis optio culpa ea molestias ut nihil. Asperiores voluptas quia nostrum eius ut quam et ut suscipit. Eos et est porro. Debitis natus quos officia.",
            "category": "Sweatpants",
            "default_price": "558.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37432,
            "campus": "hr-rfe",
            "name": "Wendy Cap",
            "slogan": "Voluptatem tempore aut facere delectus id officia eaque ab distinctio.",
            "description": "Sint commodi omnis quaerat. Rerum et optio quia temporibus rerum. Error quis deserunt ex excepturi debitis ut voluptate ipsa voluptates. Et explicabo nisi. Tempora et placeat ut ducimus alias temporibus distinctio sit.",
            "category": "Cap",
            "default_price": "572.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37433,
            "campus": "hr-rfe",
            "name": "Prince Tank Top",
            "slogan": "Voluptatem et delectus praesentium voluptatem dolor ab maxime et.",
            "description": "Vel mollitia voluptatem quam et et. Est et omnis corporis. Officia dignissimos et reiciendis aliquam minima. Voluptas ut autem nostrum veritatis dolorem mollitia voluptatem cum illo. Blanditiis sunt deserunt eum facilis corporis accusamus sed.",
            "category": "Tank Top",
            "default_price": "515.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37434,
            "campus": "hr-rfe",
            "name": "Diana Skirt",
            "slogan": "Quia deserunt error consequatur at a.",
            "description": "Iusto et debitis reiciendis quaerat ut quia dolores necessitatibus totam. Eveniet dolorum maxime iusto tenetur incidunt velit. Ipsum omnis est eos qui consequatur voluptas suscipit possimus. Qui aut et quas et ut. Quia omnis repudiandae. Repellat pariatur temporibus repellat impedit.",
            "category": "Skirt",
            "default_price": "461.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37435,
            "campus": "hr-rfe",
            "name": "Roberta Sweater",
            "slogan": "Tenetur non sed.",
            "description": "Non laboriosam ut voluptas doloribus dolore recusandae quod. Est temporibus aut voluptate autem voluptas dolor est ea nam. Dicta atque maxime facere dolore.",
            "category": "Sweater",
            "default_price": "357.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37436,
            "campus": "hr-rfe",
            "name": "Dexter Shirt",
            "slogan": "Vero quae perferendis pariatur alias est a quo adipisci.",
            "description": "Consequatur nemo architecto neque ad qui consequatur beatae. Est nostrum mollitia et ut eos. Iste quas minima velit a ipsum omnis quo. Dolore voluptas inventore quia quis nihil illo quidem.",
            "category": "Shirt",
            "default_price": "610.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37437,
            "campus": "hr-rfe",
            "name": "Twila Dress",
            "slogan": "Sed dignissimos fugiat.",
            "description": "Assumenda numquam consectetur alias dolorem corrupti. Qui ad eos expedita adipisci iure delectus mollitia. Rerum debitis nesciunt qui non in. Accusamus voluptatibus facilis sint quibusdam. Et aut totam. Error a sint est sit voluptas id necessitatibus quam.",
            "category": "Dress",
            "default_price": "514.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37438,
            "campus": "hr-rfe",
            "name": "The Vilma Pants",
            "slogan": "Dicta et et maxime vero qui quia et temporibus.",
            "description": "Repudiandae quia quasi aut qui voluptas qui temporibus. Atque ex omnis ea sunt modi et qui beatae. Itaque aut dolore. Recusandae tempore officiis debitis et laboriosam. Nam vel doloremque non.",
            "category": "Pants",
            "default_price": "119.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37439,
            "campus": "hr-rfe",
            "name": "Emilio Trousers",
            "slogan": "Officia officiis quod.",
            "description": "Eum ipsum dicta est aut alias est incidunt. Quasi ea voluptatem nam est. Ut dolores soluta consequatur quia suscipit repellat maiores.",
            "category": "Trousers",
            "default_price": "506.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37440,
            "campus": "hr-rfe",
            "name": "Sedrick 300 Suit",
            "slogan": "Consequatur sapiente qui autem.",
            "description": "Culpa voluptatem porro repudiandae earum cumque dolorem accusantium dolor. Est illo voluptatem. Id quia eos eum qui dolores quo. Alias eveniet rerum est sed rerum iste facilis ipsam explicabo.",
            "category": "Suit",
            "default_price": "251.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37441,
            "campus": "hr-rfe",
            "name": "Flavie Cap",
            "slogan": "Illum enim et facere.",
            "description": "Minima tempora consectetur sit ut delectus dolorem et a. Impedit quis sapiente similique omnis atque aut. Inventore rem perspiciatis. Culpa similique vitae rerum. Aliquid rerum quia voluptas esse et omnis et aliquid eos.",
            "category": "Cap",
            "default_price": "833.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37442,
            "campus": "hr-rfe",
            "name": "Margaretta Trousers",
            "slogan": "Saepe occaecati incidunt reprehenderit sed.",
            "description": "Omnis laborum et et quia harum aut officiis. Hic numquam sint aspernatur. Velit natus assumenda quam aspernatur natus dolores quia possimus ullam. At temporibus dolor ad perspiciatis nemo consequatur nam. Harum accusantium minima soluta eveniet. Voluptate dignissimos et maxime autem perspiciatis corporis esse.",
            "category": "Trousers",
            "default_price": "288.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37443,
            "campus": "hr-rfe",
            "name": "Tanner Hoodie",
            "slogan": "Ipsum qui fugiat aliquid beatae rerum molestias molestiae asperiores possimus.",
            "description": "Consequatur inventore et similique laboriosam consequatur et. Doloribus voluptas eligendi harum tempora voluptatem inventore excepturi. Quia et rem vel deserunt aut natus a ut.",
            "category": "Hoodie",
            "default_price": "845.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37444,
            "campus": "hr-rfe",
            "name": "Robin Dress",
            "slogan": "Quaerat officia magnam perferendis voluptatem.",
            "description": "Quia necessitatibus et occaecati nulla doloremque non vitae hic sapiente. Quasi unde unde. Enim et saepe rerum. Atque vero ut earum quae ipsam ullam dicta similique. Quis quis aut. Blanditiis omnis voluptatibus.",
            "category": "Dress",
            "default_price": "738.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37445,
            "campus": "hr-rfe",
            "name": "Davin Romper",
            "slogan": "Molestiae assumenda eos animi ad eveniet et.",
            "description": "Dolore tenetur dolores voluptas quia cum veniam repellendus dolore. Animi libero debitis adipisci placeat. Occaecati veritatis quisquam.",
            "category": "Romper",
            "default_price": "157.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37446,
            "campus": "hr-rfe",
            "name": "Enoch Sweatpants",
            "slogan": "Iste sint exercitationem non ut nisi natus non.",
            "description": "Ut laborum natus illo asperiores ipsum et quae quas. Quam adipisci officiis rem sint natus natus aliquam. Excepturi rerum est porro perferendis sequi alias. Accusantium veniam dolorem ipsum ipsam est sint.",
            "category": "Sweatpants",
            "default_price": "138.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37447,
            "campus": "hr-rfe",
            "name": "Chase Socks",
            "slogan": "Quisquam perspiciatis accusamus aliquam iusto ipsam et illum.",
            "description": "Numquam repellat ad earum ut possimus sint. Et repellat consequuntur et consequatur et inventore. Enim qui facere aperiam.",
            "category": "Socks",
            "default_price": "895.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37448,
            "campus": "hr-rfe",
            "name": "Ruthie Pants",
            "slogan": "Neque voluptatem ut officiis aliquam architecto voluptatem laudantium eos.",
            "description": "Rerum eveniet consectetur. Autem accusamus cupiditate ullam corrupti ex reiciendis repellendus. Est eveniet id aliquam vel numquam ut modi reiciendis eos. Voluptatem fuga iure quod illum et. Rerum blanditiis cupiditate animi quia et enim. Nihil perspiciatis sit et mollitia amet aliquam exercitationem ut.",
            "category": "Pants",
            "default_price": "320.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37449,
            "campus": "hr-rfe",
            "name": "Ezequiel Socks",
            "slogan": "Necessitatibus unde omnis quo enim sunt optio.",
            "description": "Minus eum animi laudantium ex id quo sunt facilis sequi. Eum magni enim sequi. Reiciendis tenetur ut deleniti necessitatibus porro qui qui totam. Vel in sed quia pariatur dolores repudiandae.",
            "category": "Socks",
            "default_price": "591.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37450,
            "campus": "hr-rfe",
            "name": "Carmen 850 Sunglasses",
            "slogan": "Ex quis dicta molestias eum rem iure provident nesciunt voluptatibus.",
            "description": "Nostrum autem accusantium tempore velit earum impedit. Id ut qui quasi nisi modi itaque enim consequuntur. Delectus nesciunt veritatis nobis distinctio. Doloribus repellendus id quo porro magnam omnis. Commodi quis quidem asperiores quisquam ex nihil tempora. Hic iste aut vel.",
            "category": "Sunglasses",
            "default_price": "265.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37451,
            "campus": "hr-rfe",
            "name": "Clay Sunglasses",
            "slogan": "Neque reiciendis dolores ut quae qui autem veniam vel itaque.",
            "description": "Libero eveniet qui vel molestias sit. Rem aut minima natus eum eveniet quo velit dolorum qui. Qui sed vel velit rem error. Voluptatem nobis officia rerum molestiae.",
            "category": "Sunglasses",
            "default_price": "644.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37452,
            "campus": "hr-rfe",
            "name": "Kailey Hat",
            "slogan": "Nisi iste temporibus optio possimus at laudantium.",
            "description": "Cupiditate in veniam. Quia ab minima id deserunt maxime harum. Reprehenderit ipsum ab. Reprehenderit modi dolorem aperiam officiis in suscipit illum sed rerum. Et beatae est aut nulla similique consequatur suscipit corrupti culpa. Quam accusamus cupiditate repudiandae eveniet.",
            "category": "Hat",
            "default_price": "513.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37453,
            "campus": "hr-rfe",
            "name": "Marian Cap",
            "slogan": "Quia aperiam recusandae debitis placeat est ducimus qui modi et.",
            "description": "Id ipsum praesentium. Molestias sint autem. Perspiciatis a alias necessitatibus. Eveniet quae dolor.",
            "category": "Cap",
            "default_price": "927.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37454,
            "campus": "hr-rfe",
            "name": "Dee Tank Top",
            "slogan": "Maiores deleniti dolorem facere id earum accusantium sapiente voluptatem vel.",
            "description": "Qui et accusamus. Magni atque perspiciatis. Nulla ratione ducimus sed et quos et aspernatur fugit ea. Vero laudantium rerum iste minima qui esse.",
            "category": "Tank Top",
            "default_price": "42.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37455,
            "campus": "hr-rfe",
            "name": "Johnny Sunglasses",
            "slogan": "Libero est autem est sed quo nemo.",
            "description": "Velit et dolorem voluptates quidem ad architecto. Consequatur fugit mollitia nobis quasi et nihil quis unde. Inventore sed nemo similique laborum. Explicabo nulla error dolorem et. Quidem et enim pariatur quibusdam. Et modi amet ducimus ipsum cum.",
            "category": "Sunglasses",
            "default_price": "485.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37456,
            "campus": "hr-rfe",
            "name": "The Cheyanne Slacks",
            "slogan": "Qui dolorum vitae id quia fuga.",
            "description": "Voluptatum et dolore laboriosam rerum ipsam accusantium. Quibusdam minus explicabo et sint et. Delectus suscipit mollitia odit ea. Tempora sequi aut consectetur pariatur eos. Maiores in dolore omnis vitae cumque.",
            "category": "Slacks",
            "default_price": "912.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37457,
            "campus": "hr-rfe",
            "name": "Rashawn Cap",
            "slogan": "Et id pariatur autem.",
            "description": "Cum repellendus ex est. A non tempora est atque error. Qui id aperiam voluptates eligendi et illum nobis odio harum. Harum quidem voluptatem id sit quia aliquid numquam ipsum.",
            "category": "Cap",
            "default_price": "721.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37458,
            "campus": "hr-rfe",
            "name": "Lucie Romper",
            "slogan": "Illum aperiam omnis esse ut quae velit ipsa.",
            "description": "Blanditiis facilis provident quos quod sit quis dolorem dolorem. Id delectus facilis autem itaque. Quisquam est qui amet dolorem culpa facere. Est fugit quo facere laudantium nostrum corrupti maxime. Sit consectetur omnis quaerat ut.",
            "category": "Romper",
            "default_price": "157.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37459,
            "campus": "hr-rfe",
            "name": "Corrine Skirt",
            "slogan": "Error alias adipisci voluptas enim tempore iusto tempore sunt.",
            "description": "Qui et doloribus ipsam. Voluptatem veritatis fugiat beatae eaque odio velit. Deleniti quam vitae. Accusamus nihil molestiae. Quis rerum dolor sed eveniet reiciendis tenetur soluta. Dicta aperiam quae officiis molestias asperiores assumenda totam.",
            "category": "Skirt",
            "default_price": "612.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37460,
            "campus": "hr-rfe",
            "name": "Arvel Sweater",
            "slogan": "Odit consequatur libero dolores aliquid dolor qui.",
            "description": "Consectetur maxime quae ea itaque omnis aspernatur. Voluptates aut explicabo laboriosam illum molestiae enim perspiciatis quod adipisci. Aut saepe sit assumenda ut rerum temporibus. Quod qui ipsa vel qui optio nulla alias itaque aut. Occaecati est nesciunt aut.",
            "category": "Sweater",
            "default_price": "124.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37461,
            "campus": "hr-rfe",
            "name": "Toni Heels",
            "slogan": "Perspiciatis fugiat distinctio in quibusdam amet aspernatur pariatur.",
            "description": "Non voluptas et minus atque temporibus tempora in aut assumenda. Necessitatibus quaerat adipisci deleniti eveniet nisi velit animi laudantium. Aut quod rerum repudiandae rerum et possimus voluptas. Ad ullam vitae ut itaque omnis corrupti. Sed itaque error. Amet dolor iure ad.",
            "category": "Heels",
            "default_price": "539.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37462,
            "campus": "hr-rfe",
            "name": "Janice Coat",
            "slogan": "In et quia ut perferendis.",
            "description": "Illum id voluptas neque consectetur cumque ut quos sit. Natus enim voluptas. Molestiae doloribus expedita id distinctio. Est est omnis debitis dolorum occaecati repudiandae.",
            "category": "Coat",
            "default_price": "467.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37463,
            "campus": "hr-rfe",
            "name": "Elyssa Jacket",
            "slogan": "Cum consequatur nisi sed consequuntur quam.",
            "description": "Quam est ducimus. Nesciunt dolore eius nam error temporibus id in eaque quam. Eligendi enim corporis. Eveniet et id nihil aut.",
            "category": "Jacket",
            "default_price": "71.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37464,
            "campus": "hr-rfe",
            "name": "Jean Skirt",
            "slogan": "Et odit soluta saepe.",
            "description": "Non enim ipsa mollitia veniam nihil dignissimos. Doloremque fugit et in. Mollitia et quasi consequatur voluptatem atque consequuntur dolorem. Officia distinctio perspiciatis expedita.",
            "category": "Skirt",
            "default_price": "347.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37465,
            "campus": "hr-rfe",
            "name": "Antonia Suit",
            "slogan": "Minima et et eum tenetur.",
            "description": "Id labore voluptatem molestiae. Qui soluta placeat voluptates. Ipsum commodi qui unde aut voluptatem animi non vero sequi.",
            "category": "Suit",
            "default_price": "272.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37466,
            "campus": "hr-rfe",
            "name": "Georgette Romper",
            "slogan": "Sit illum autem consequatur laborum in amet ut sed.",
            "description": "Ut sed rerum sint nihil voluptatem. Dolorem commodi nisi et minus fuga quas est sint. Corrupti sit cumque doloribus iste ipsum incidunt. Voluptatem ipsa incidunt nisi beatae vero dolores eos pariatur. Velit consequuntur facilis numquam quidem occaecati officia reprehenderit voluptates. Omnis perspiciatis et numquam laborum perspiciatis aut error non.",
            "category": "Romper",
            "default_price": "295.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37467,
            "campus": "hr-rfe",
            "name": "Margarett Hoodie",
            "slogan": "Magnam et molestiae enim.",
            "description": "Impedit culpa in sed aut illum adipisci dolores molestiae fugiat. Illum a deserunt qui et neque atque in tenetur qui. Voluptatem delectus dolor et. Sunt iste nihil magni quis voluptas alias dolor quod modi. Aut eius doloremque aut voluptatem nihil labore doloribus non. Numquam vero est.",
            "category": "Hoodie",
            "default_price": "946.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37468,
            "campus": "hr-rfe",
            "name": "Betsy Trousers",
            "slogan": "Et quos minima aliquid autem voluptatem laudantium.",
            "description": "Deserunt dolorum consequatur. Iusto rerum dolores maiores. Et non saepe rerum rerum. Ut dignissimos nisi voluptate et.",
            "category": "Trousers",
            "default_price": "245.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37469,
            "campus": "hr-rfe",
            "name": "Bennett Sweatpants",
            "slogan": "Expedita temporibus et eos.",
            "description": "Est rem error optio porro et minus iure placeat. Accusantium et qui. Commodi aut et minus asperiores eius vitae et. Suscipit molestiae pariatur eum neque sit.",
            "category": "Sweatpants",
            "default_price": "162.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37470,
            "campus": "hr-rfe",
            "name": "Cleora Shoes",
            "slogan": "Libero dignissimos error iste.",
            "description": "Hic qui ex sit. Quod est hic. Et temporibus labore rerum non ipsum in omnis repellat. Ut officia neque blanditiis ut ex sit possimus.",
            "category": "Shoes",
            "default_price": "618.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37471,
            "campus": "hr-rfe",
            "name": "Leone Romper",
            "slogan": "Corrupti ut architecto rerum dolore molestias.",
            "description": "Ea illum vero incidunt molestiae voluptas. Eum ut voluptas earum ducimus sed. Tenetur quia natus unde nemo asperiores tempore reiciendis. Minus enim quia repellat ducimus magnam.",
            "category": "Romper",
            "default_price": "172.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37472,
            "campus": "hr-rfe",
            "name": "Cameron Slacks",
            "slogan": "Corporis sint et excepturi rerum atque rerum assumenda.",
            "description": "Sint nesciunt est fuga molestiae sed ab consequatur. Sequi error dolorum consequatur dicta dolores dolor rerum quis adipisci. Iusto itaque sed dolorum sit. Aspernatur autem consequatur. Temporibus omnis nihil est. Ut ut quam consequuntur.",
            "category": "Slacks",
            "default_price": "166.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37473,
            "campus": "hr-rfe",
            "name": "Iliana Suit",
            "slogan": "Non consequatur labore.",
            "description": "Hic quos impedit voluptatem a quos dolores officia repellat et. Est sit illum. Non sunt a laudantium deserunt natus. Corrupti molestias aut dolor tempora. Sunt amet veniam natus voluptatem eaque voluptatum voluptatum delectus iure. Dicta suscipit porro asperiores perferendis totam.",
            "category": "Suit",
            "default_price": "252.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37474,
            "campus": "hr-rfe",
            "name": "Mac Heels",
            "slogan": "Ipsum sed ex culpa recusandae dolorem suscipit.",
            "description": "Sit nihil et ullam consequuntur pariatur voluptas sint aspernatur corporis. Deleniti dolores architecto nam. Voluptas qui est ut aut aperiam. Illo consectetur autem nulla officiis tenetur.",
            "category": "Heels",
            "default_price": "492.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37475,
            "campus": "hr-rfe",
            "name": "Tess Skirt",
            "slogan": "Dolore eum dolore a et.",
            "description": "Eos tenetur quo beatae repudiandae voluptatum tempora qui voluptate. Dolorem dolorem corporis dignissimos sint cupiditate. Quis sunt enim aperiam et.",
            "category": "Skirt",
            "default_price": "385.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37476,
            "campus": "hr-rfe",
            "name": "Mariana Hoodie",
            "slogan": "Est labore fuga debitis.",
            "description": "Aperiam a eveniet praesentium expedita. Id blanditiis amet. Est quam et velit. Quas enim ut dignissimos est rerum. Animi ea voluptatem dolor rerum iste maiores. Beatae nihil quis consequatur sunt consequuntur quis.",
            "category": "Hoodie",
            "default_price": "864.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37477,
            "campus": "hr-rfe",
            "name": "Trinity Coat",
            "slogan": "Similique aliquam id doloremque delectus et aut itaque sint ducimus.",
            "description": "Quia sunt aspernatur fuga iure ut cupiditate et consequatur. Rem repellat dolor est nesciunt voluptas. Perspiciatis laudantium ipsum facilis magnam pariatur optio asperiores inventore. Veniam doloribus non et minus rerum facere vel. Ex error sed porro sed nihil.",
            "category": "Coat",
            "default_price": "931.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37478,
            "campus": "hr-rfe",
            "name": "Melyssa Tank Top",
            "slogan": "Quibusdam porro sunt corporis porro.",
            "description": "Quod et suscipit suscipit et cumque impedit. Et similique corrupti vel. Aut esse quia fuga dolores dolorum laudantium alias. Ab et ipsa velit voluptatibus omnis est deleniti doloremque. Quia debitis ullam quibusdam. Sed sapiente quas consequatur alias totam vero sapiente aut nesciunt.",
            "category": "Tank Top",
            "default_price": "418.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37479,
            "campus": "hr-rfe",
            "name": "Raheem Coat",
            "slogan": "Distinctio non vel nostrum.",
            "description": "Sunt qui nisi officiis rerum nulla minus similique iure. Cupiditate sunt molestiae sint architecto rem veniam voluptas recusandae et. Non sint facilis sapiente incidunt sunt numquam iusto voluptate magnam.",
            "category": "Coat",
            "default_price": "870.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37480,
            "campus": "hr-rfe",
            "name": "Toney 1050 Heels",
            "slogan": "Unde natus qui voluptas est at.",
            "description": "Esse molestiae laborum nisi assumenda et quasi in asperiores numquam. Dolor ut quas sunt aut sed quia eaque itaque. Et repudiandae perspiciatis debitis in aut reiciendis assumenda ullam.",
            "category": "Heels",
            "default_price": "573.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37481,
            "campus": "hr-rfe",
            "name": "Ethelyn Socks",
            "slogan": "Repudiandae omnis totam pariatur voluptatibus deserunt tenetur laudantium et vel.",
            "description": "Est est sit at dolores quidem consequatur harum. Autem nostrum officiis iusto. Praesentium tempore omnis vitae dicta nesciunt eveniet.",
            "category": "Socks",
            "default_price": "423.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37482,
            "campus": "hr-rfe",
            "name": "Dashawn Socks",
            "slogan": "Rerum dolorem delectus et quaerat enim maxime.",
            "description": "Autem eligendi consectetur tempora est possimus qui harum totam aut. Voluptas natus dolorem cupiditate vel voluptas. Debitis esse totam quia voluptatem officia nemo tempore sit. Non quo voluptatibus et reiciendis illum consequatur. Ipsa explicabo sit enim consectetur fugiat.",
            "category": "Socks",
            "default_price": "7.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37483,
            "campus": "hr-rfe",
            "name": "Shanel Pants",
            "slogan": "Aliquid magnam maiores non.",
            "description": "A similique autem et. Iure tempore corporis omnis consequuntur placeat ipsam. Consequuntur ut harum animi quidem magnam et laboriosam. Et possimus voluptas nostrum impedit ut et.",
            "category": "Pants",
            "default_price": "324.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37484,
            "campus": "hr-rfe",
            "name": "Oceane Boots",
            "slogan": "Saepe voluptas sit.",
            "description": "Et quia et reiciendis voluptatibus voluptatem. Sunt maiores et eaque et. Possimus voluptas hic consequatur nulla dolorem dolores rerum illum dolores. Qui earum hic aliquam aut consequuntur deserunt.",
            "category": "Boots",
            "default_price": "681.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37485,
            "campus": "hr-rfe",
            "name": "Tyrique Hat",
            "slogan": "Expedita ea adipisci libero sit voluptatem.",
            "description": "Eveniet cum veritatis ab et. Ut provident repudiandae dignissimos vel voluptatibus quia dignissimos occaecati sunt. Aperiam facilis quo tempora et sint eos vel voluptatem. Aspernatur rerum consequatur consectetur ut a debitis cupiditate et.",
            "category": "Hat",
            "default_price": "807.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37486,
            "campus": "hr-rfe",
            "name": "Laurie Coat",
            "slogan": "Aut eum quaerat fugit magni culpa.",
            "description": "Sed ipsum sit corporis eos placeat consequatur. Sint non velit eligendi odit et sit. Aspernatur consequatur non rerum assumenda porro molestias impedit et aut. Consequuntur tempore et aliquam cupiditate magni. Sit quidem aspernatur porro ipsam. Culpa ad ad rerum in ut doloremque nulla.",
            "category": "Coat",
            "default_price": "193.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37487,
            "campus": "hr-rfe",
            "name": "Norris Hoodie",
            "slogan": "Laboriosam quo veniam id numquam eligendi ut.",
            "description": "Adipisci illum autem quod aut quibusdam. Voluptate optio in deserunt odit. Quia expedita architecto qui. Numquam sed sunt impedit excepturi. Et quisquam molestiae molestiae illum qui nesciunt. Quam in mollitia vel dolore.",
            "category": "Hoodie",
            "default_price": "155.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37488,
            "campus": "hr-rfe",
            "name": "Carson Heels",
            "slogan": "Accusantium quas eos ullam ipsum occaecati.",
            "description": "Ut explicabo dolore qui provident. In possimus aliquam. A dolor delectus nulla beatae enim explicabo. Commodi tempora beatae. Magnam asperiores nam aut.",
            "category": "Heels",
            "default_price": "320.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37489,
            "campus": "hr-rfe",
            "name": "Laverna Sweater",
            "slogan": "Aut libero quae in.",
            "description": "Totam maxime facilis cum numquam. Omnis aut error illum non dolore. Dolor minus minus ut occaecati provident voluptatibus quos quidem occaecati.",
            "category": "Sweater",
            "default_price": "967.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37490,
            "campus": "hr-rfe",
            "name": "Porter Heels",
            "slogan": "Velit sed quia.",
            "description": "Corporis voluptatem sit dolore in voluptatibus. Reprehenderit nihil nesciunt odio. Eveniet quas quam. Cupiditate minus non.",
            "category": "Heels",
            "default_price": "281.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37491,
            "campus": "hr-rfe",
            "name": "Peter Pants",
            "slogan": "Unde reprehenderit voluptas corporis quis mollitia quia unde enim occaecati.",
            "description": "Modi eaque aliquam quos iusto qui sunt est quia exercitationem. Doloribus accusantium earum porro doloribus itaque. Qui architecto sint. Animi ut veritatis pariatur. Veniam sunt quo quas consequatur molestiae ex in et qui.",
            "category": "Pants",
            "default_price": "419.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37492,
            "campus": "hr-rfe",
            "name": "Kris Shoes",
            "slogan": "Fugiat rerum quos reiciendis.",
            "description": "Deserunt odio culpa labore sapiente inventore corporis et excepturi. Maxime nam modi magni dolorem quisquam aut vitae sed. Exercitationem autem qui dolorem architecto reprehenderit cum. Repellat sapiente velit doloremque consequatur et voluptatibus rem. Libero magnam ea. Odio dolores sit.",
            "category": "Shoes",
            "default_price": "980.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37493,
            "campus": "hr-rfe",
            "name": "Eldridge Skirt",
            "slogan": "Officiis eum ad vel enim.",
            "description": "Quam maxime libero exercitationem veniam omnis aspernatur. In sint nisi omnis accusantium. Quos provident eligendi provident ratione quae expedita suscipit.",
            "category": "Skirt",
            "default_price": "457.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37494,
            "campus": "hr-rfe",
            "name": "Brant Romper",
            "slogan": "Officia sapiente nesciunt ut aut et ut.",
            "description": "Voluptatem magnam et cumque deleniti qui deserunt et cupiditate. In sequi voluptatem dignissimos quas laborum quos dolor. Quae molestias sed necessitatibus beatae ut provident ea nam alias. Debitis maxime illo et nam labore qui dolor iste quia. Est maiores sit. Et eveniet ut.",
            "category": "Romper",
            "default_price": "718.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37495,
            "campus": "hr-rfe",
            "name": "Sanford Heels",
            "slogan": "Facilis facere modi.",
            "description": "Vel natus quo. Nulla molestias aut. Id sapiente et assumenda odit quo. Aut eaque laborum. Quam qui sint voluptatum voluptates officiis atque.",
            "category": "Heels",
            "default_price": "124.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37496,
            "campus": "hr-rfe",
            "name": "Wilma Shorts",
            "slogan": "Voluptatibus cum sint possimus ex ut aliquid assumenda asperiores.",
            "description": "Optio natus vitae cum laudantium et atque qui. Aspernatur asperiores unde commodi eum sit. Explicabo odio officia. Iste libero sint accusantium voluptatum doloremque pariatur. Ipsa reiciendis dolor maxime qui consectetur non qui neque est. Dolor consequuntur minima illo accusamus.",
            "category": "Shorts",
            "default_price": "256.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37497,
            "campus": "hr-rfe",
            "name": "Lempi Cap",
            "slogan": "Doloremque eveniet ut quam a.",
            "description": "Deserunt aliquam aut earum quod facilis quidem rerum quo. Atque eaque aut aut debitis sequi. Dolores sint repudiandae. Voluptatum hic eligendi. Illum incidunt et unde consequuntur fugit et possimus.",
            "category": "Cap",
            "default_price": "837.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37498,
            "campus": "hr-rfe",
            "name": "Ernestina Slacks",
            "slogan": "Harum id quibusdam facere reprehenderit occaecati.",
            "description": "Aut possimus ea illo quia et. Maxime modi vitae. Praesentium et sit illum quidem et culpa. Ab explicabo architecto sequi quia veniam molestiae.",
            "category": "Slacks",
            "default_price": "568.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37499,
            "campus": "hr-rfe",
            "name": "Francisca Slacks",
            "slogan": "Quibusdam sint tempore rerum eius minus beatae magnam accusamus tempore.",
            "description": "Et maiores tenetur cupiditate et consequuntur quam modi voluptatem. Aliquam omnis labore expedita id error assumenda soluta non. A inventore magni. Aut sit similique dolorem architecto aspernatur voluptate veritatis quasi itaque. Cupiditate sunt quidem.",
            "category": "Slacks",
            "default_price": "116.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37500,
            "campus": "hr-rfe",
            "name": "Haskell Sunglasses",
            "slogan": "Ipsam occaecati nihil qui soluta.",
            "description": "Rerum cum delectus aut asperiores distinctio voluptatum tempora. Iure vel quos sunt quaerat earum et. Dolorum exercitationem quisquam molestiae ea suscipit voluptatem eos qui magnam. Vel debitis quas veniam exercitationem. Sunt et voluptatem non atque.",
            "category": "Sunglasses",
            "default_price": "69.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37501,
            "campus": "hr-rfe",
            "name": "Mayra Backpack",
            "slogan": "Nemo officiis non.",
            "description": "Consequatur in ex adipisci et id est et quidem voluptatem. Delectus qui qui culpa quae et soluta aspernatur alias quibusdam. Est id quaerat labore quod pariatur quis quia non. Sint eius dignissimos et ut ipsum tempora quas ut nihil.",
            "category": "Backpack",
            "default_price": "823.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37502,
            "campus": "hr-rfe",
            "name": "The Selmer Boots",
            "slogan": "Rem et officiis.",
            "description": "Esse sint at ratione velit incidunt molestiae. Deleniti id minus sed et facilis qui dolor. Ut amet ut tenetur consequatur. Ipsam quo qui illum autem. Deleniti inventore quos qui laboriosam ut nulla porro nisi architecto.",
            "category": "Boots",
            "default_price": "537.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37503,
            "campus": "hr-rfe",
            "name": "Tremaine Backpack",
            "slogan": "Tenetur numquam alias.",
            "description": "Velit cupiditate velit dicta quaerat totam. Dolorum aspernatur aut officiis occaecati est. Iste distinctio quia aliquid maiores. Veniam asperiores cum saepe ex molestiae et neque laboriosam. Eveniet totam accusantium delectus placeat sunt eum rerum explicabo asperiores. Veritatis sapiente sequi.",
            "category": "Backpack",
            "default_price": "248.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37504,
            "campus": "hr-rfe",
            "name": "Hermina Dress",
            "slogan": "Omnis et voluptas sunt a.",
            "description": "Tempore et aperiam dolorum ad aliquid repellat in. In aliquid ipsum non voluptatem qui et qui libero molestiae. Voluptatum in non voluptatibus adipisci quibusdam magni.",
            "category": "Dress",
            "default_price": "848.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37505,
            "campus": "hr-rfe",
            "name": "The Clair Sunglasses",
            "slogan": "Placeat placeat suscipit sunt eos ea voluptatem expedita earum.",
            "description": "Repellendus laborum reprehenderit aut iure. Debitis est delectus modi corrupti nam voluptatem odio ut quia. Provident eaque labore distinctio omnis. Dolor commodi ut sed.",
            "category": "Sunglasses",
            "default_price": "327.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37506,
            "campus": "hr-rfe",
            "name": "Ernestine Sweatpants",
            "slogan": "Deleniti facilis illo ut est nemo.",
            "description": "Consequatur voluptatem dolorem optio ducimus ut suscipit ut. Aliquam inventore a nisi qui odit. Eaque architecto sed incidunt.",
            "category": "Sweatpants",
            "default_price": "719.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37507,
            "campus": "hr-rfe",
            "name": "Isac Cap",
            "slogan": "Quos voluptatem quas aliquam fuga.",
            "description": "Corporis ut voluptas nesciunt omnis. Tempore tempore fuga sunt dignissimos exercitationem consequatur labore eaque. Et aut illum accusantium asperiores. Dolore iste minima perferendis et facilis voluptate maxime. Mollitia iusto id enim quia doloribus.",
            "category": "Cap",
            "default_price": "74.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37508,
            "campus": "hr-rfe",
            "name": "The Ryann Boots",
            "slogan": "Aliquid veniam autem sequi iure deserunt dicta sint.",
            "description": "Animi ipsam ut voluptas quasi molestiae laboriosam dolor. Nemo consequuntur ut aliquam sit soluta doloremque. Sint facilis sapiente voluptatem atque minima deserunt.",
            "category": "Boots",
            "default_price": "643.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37509,
            "campus": "hr-rfe",
            "name": "Cynthia Coat",
            "slogan": "Exercitationem voluptatem delectus.",
            "description": "Aut laborum quis. Quo quis voluptatum maiores enim minus et magnam. Ut ex aperiam mollitia optio qui repudiandae sequi ut. Qui cupiditate et nihil quibusdam dolor. Sed voluptate consectetur nihil sequi odio. Quis eaque non ea architecto rem qui corrupti dignissimos quia.",
            "category": "Coat",
            "default_price": "738.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37510,
            "campus": "hr-rfe",
            "name": "Bret Dress",
            "slogan": "Commodi vero et distinctio tenetur.",
            "description": "Id nostrum non error nihil vitae. Architecto ut maxime. Repellat quibusdam nostrum aperiam. Quasi natus nam eum ipsam ipsum voluptatem culpa soluta. Asperiores unde officia culpa natus et sit nihil cum.",
            "category": "Dress",
            "default_price": "944.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37511,
            "campus": "hr-rfe",
            "name": "Evangeline Slacks",
            "slogan": "Non molestiae commodi asperiores ipsa occaecati.",
            "description": "In repudiandae blanditiis soluta eligendi et dolore cum at. Neque eaque officiis rerum veritatis eos non. Et ut aperiam sunt mollitia est et quasi necessitatibus. Accusamus est ab quo quis et sed voluptate. Omnis est nemo sint omnis non expedita recusandae repudiandae.",
            "category": "Slacks",
            "default_price": "574.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37512,
            "campus": "hr-rfe",
            "name": "Maximilian Heels",
            "slogan": "Dolorem ipsa minus enim ullam ut officiis dignissimos.",
            "description": "Aperiam sit ducimus saepe rerum. Non occaecati consectetur odio. Quae voluptatem amet natus fuga aut.",
            "category": "Heels",
            "default_price": "457.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37513,
            "campus": "hr-rfe",
            "name": "Madge Socks",
            "slogan": "Non fugiat reprehenderit ducimus aut.",
            "description": "Reiciendis sed tenetur ea iure rem blanditiis amet alias. Excepturi molestias mollitia excepturi eos. Optio consequuntur et recusandae praesentium officiis doloribus autem sequi. In nostrum officia hic necessitatibus.",
            "category": "Socks",
            "default_price": "35.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37514,
            "campus": "hr-rfe",
            "name": "Thad Sweater",
            "slogan": "Autem iste aut consectetur alias ea ut necessitatibus et ea.",
            "description": "Officiis voluptatem placeat facere placeat. Deserunt necessitatibus quia natus eaque quos non alias. Accusamus ab quis ad. Nemo deserunt cupiditate aliquam sint sunt facilis id ipsum aperiam. Ex in facilis expedita magnam neque in. Ab eum deserunt provident consectetur.",
            "category": "Sweater",
            "default_price": "547.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37515,
            "campus": "hr-rfe",
            "name": "Johnny Shorts",
            "slogan": "Id ut ut.",
            "description": "Doloribus nostrum eaque eveniet recusandae cupiditate aut atque tempora libero. Magni quos praesentium. Et dolor voluptas voluptates laborum omnis debitis corporis aut. Quod dolores repudiandae voluptas molestiae. Expedita aperiam minus nihil quibusdam blanditiis pariatur. Cupiditate dolorum et est harum ut corrupti in vel iste.",
            "category": "Shorts",
            "default_price": "117.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37516,
            "campus": "hr-rfe",
            "name": "Doug Pants",
            "slogan": "Minima dolorum rem est illum debitis et et repudiandae illo.",
            "description": "Enim est rerum. Velit sit quaerat. Voluptatum et dolores nihil quam vitae quis eos sunt. Totam odit dolores mollitia ut architecto ipsa eaque molestiae id. Consequatur consectetur voluptas consequatur quia dolore modi.",
            "category": "Pants",
            "default_price": "381.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37517,
            "campus": "hr-rfe",
            "name": "Mariano Skirt",
            "slogan": "Nihil temporibus nihil.",
            "description": "Et ut cum temporibus velit ut. Et aut atque. Vel maxime voluptatum id sit blanditiis. Quo enim quo sed quibusdam.",
            "category": "Skirt",
            "default_price": "356.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37518,
            "campus": "hr-rfe",
            "name": "Constantin Boots",
            "slogan": "Ipsam velit et.",
            "description": "Odit facilis voluptas velit magnam sit sunt. Non enim omnis laboriosam nemo enim. Pariatur debitis omnis. Enim officiis et quia eveniet. Beatae architecto officia veritatis at omnis.",
            "category": "Boots",
            "default_price": "790.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37519,
            "campus": "hr-rfe",
            "name": "Wilma Hoodie",
            "slogan": "Reprehenderit ea iure nulla rerum vero reiciendis harum adipisci.",
            "description": "Saepe soluta dicta enim. Modi esse autem ipsam quia sapiente fugiat dicta est. Et perspiciatis doloremque asperiores molestiae culpa dolorem.",
            "category": "Hoodie",
            "default_price": "48.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37520,
            "campus": "hr-rfe",
            "name": "The Buster Trousers",
            "slogan": "Sit voluptas dignissimos suscipit vel asperiores.",
            "description": "Sit voluptatum numquam omnis ut dolorum. Enim et harum quia debitis doloremque nulla. Autem ad quaerat sit eligendi. Voluptas doloremque velit dolorum vitae.",
            "category": "Trousers",
            "default_price": "357.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37521,
            "campus": "hr-rfe",
            "name": "Allie Shorts",
            "slogan": "Quod odio sed dignissimos rerum libero eos veniam.",
            "description": "Rerum qui cupiditate autem quaerat et odio modi aut. Quos reprehenderit aperiam quidem est alias officia aut cumque. Cum omnis esse ut omnis aliquid est tempora minus natus. Sunt eos ut ut quam officiis id harum rerum qui. Suscipit ratione officia totam autem. A sit dolores hic est nesciunt eum et velit qui.",
            "category": "Shorts",
            "default_price": "33.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37522,
            "campus": "hr-rfe",
            "name": "Emanuel 1100 Dress",
            "slogan": "Cum atque qui in fugit facilis.",
            "description": "Eligendi veritatis expedita. Beatae perferendis veritatis maxime natus unde distinctio. Libero corporis voluptatem est. Maiores est corporis incidunt explicabo rerum autem et quia commodi.",
            "category": "Dress",
            "default_price": "725.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37523,
            "campus": "hr-rfe",
            "name": "Oscar Skirt",
            "slogan": "At quia porro dolorem similique beatae eos quia.",
            "description": "Consequuntur reiciendis sunt atque ducimus praesentium ullam eius consequatur iure. Eos facere et dignissimos praesentium minima. Culpa sunt facere doloribus.",
            "category": "Skirt",
            "default_price": "785.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37524,
            "campus": "hr-rfe",
            "name": "Sydni Suit",
            "slogan": "Veritatis ratione aut.",
            "description": "Magnam atque repellat officiis dignissimos. Et vitae pariatur unde ut in. Veritatis voluptate officiis. Possimus illo velit placeat libero quae natus consectetur molestiae.",
            "category": "Suit",
            "default_price": "37.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37525,
            "campus": "hr-rfe",
            "name": "Daron Trousers",
            "slogan": "Sed corrupti enim aut.",
            "description": "Corporis eaque non est id voluptatem enim explicabo asperiores eligendi. Odio eveniet minima ea et cumque. Dolorem cum alias rem eveniet officiis commodi reiciendis.",
            "category": "Trousers",
            "default_price": "10.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37526,
            "campus": "hr-rfe",
            "name": "Kara Cap",
            "slogan": "Dolores labore aperiam facere quos non aperiam rerum hic.",
            "description": "Quod non repellat est tenetur sed ut officiis. Omnis voluptatibus voluptatem veritatis. Hic modi voluptatem quo aliquid.",
            "category": "Cap",
            "default_price": "93.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37527,
            "campus": "hr-rfe",
            "name": "Edyth 1150 Trousers",
            "slogan": "Ut quaerat odio dolorum porro dignissimos.",
            "description": "Voluptas et nesciunt incidunt possimus. Rerum iure unde nulla quia. Necessitatibus autem ut quia ullam voluptatum vel velit ut. Eos et delectus et voluptatem qui quos.",
            "category": "Trousers",
            "default_price": "332.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37528,
            "campus": "hr-rfe",
            "name": "Jerald Tank Top",
            "slogan": "Placeat quis quia corrupti tenetur.",
            "description": "Eligendi deleniti in et fugit. Quas impedit error ut voluptatem quibusdam est. Voluptate dolorem ratione. Quis dolore labore. Sunt ipsam nulla ratione magnam dolorum quisquam rerum occaecati.",
            "category": "Tank Top",
            "default_price": "131.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37529,
            "campus": "hr-rfe",
            "name": "Glenna Tank Top",
            "slogan": "Rerum qui ab.",
            "description": "Sit repudiandae voluptatum velit ipsam. Labore aut consequatur voluptas. Recusandae quidem perferendis id itaque. Velit asperiores vel voluptate rerum ab ut. Rerum non dolores quas. Perferendis ea quod consequatur voluptates vel enim eum suscipit sed.",
            "category": "Tank Top",
            "default_price": "47.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37530,
            "campus": "hr-rfe",
            "name": "Kenya Cap",
            "slogan": "At cupiditate magni quia doloremque architecto ducimus quis odit aspernatur.",
            "description": "Nam praesentium harum eligendi modi eum error. Voluptas accusantium et ut maxime. In aut magni expedita delectus incidunt earum cum accusantium cupiditate.",
            "category": "Cap",
            "default_price": "947.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37531,
            "campus": "hr-rfe",
            "name": "Rhianna Tank Top",
            "slogan": "Vero aut est qui maiores est quos aliquid quos.",
            "description": "Veniam maiores rem dolorum vero totam modi modi ducimus deleniti. Aut vel id unde mollitia dolore necessitatibus. Iusto amet eligendi quod qui. Velit reiciendis reprehenderit.",
            "category": "Tank Top",
            "default_price": "671.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37532,
            "campus": "hr-rfe",
            "name": "Julius Suit",
            "slogan": "Et facilis ut consequatur aliquam.",
            "description": "Distinctio sit sed error eum. Sequi alias quam voluptatem ipsam. Consequuntur alias minima. Corporis natus quisquam nam.",
            "category": "Suit",
            "default_price": "95.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37533,
            "campus": "hr-rfe",
            "name": "Garnet Sweater",
            "slogan": "Odio asperiores veniam accusantium tempore.",
            "description": "Repudiandae sequi exercitationem pariatur. Corporis minus error ut accusamus recusandae. Eveniet quia aliquid pariatur id repellendus. Quas deserunt recusandae distinctio debitis eos enim blanditiis qui. Facilis similique sit ut.",
            "category": "Sweater",
            "default_price": "63.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37534,
            "campus": "hr-rfe",
            "name": "Teresa Backpack",
            "slogan": "Ea est facere accusamus ut omnis ut aut sint debitis.",
            "description": "Aliquid est repellendus quia omnis autem tempore enim. Accusantium fugiat velit nisi quis illum. Saepe totam et unde ea commodi vel itaque atque. Sapiente velit laborum modi.",
            "category": "Backpack",
            "default_price": "265.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37535,
            "campus": "hr-rfe",
            "name": "Jayden 1350 Boots",
            "slogan": "Ut voluptatem soluta ratione qui velit saepe.",
            "description": "Dolores dolorem in. Consequatur et neque eos. Repellendus dolor atque sed dicta et cumque.",
            "category": "Boots",
            "default_price": "312.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37536,
            "campus": "hr-rfe",
            "name": "Matt Slacks",
            "slogan": "Et a consequatur et voluptas amet quaerat molestias molestiae quasi.",
            "description": "Assumenda quibusdam id eveniet consectetur maxime veniam. Eaque sed sed debitis voluptatum veniam eum dolores nam ut. Doloremque aut minima labore voluptas inventore atque voluptatibus. Repudiandae sit ab quibusdam et ducimus ad officia. Magni rerum possimus doloremque.",
            "category": "Slacks",
            "default_price": "174.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37537,
            "campus": "hr-rfe",
            "name": "Rebeca 1150 Cap",
            "slogan": "Tenetur in animi voluptas est distinctio omnis corrupti temporibus.",
            "description": "Quia odit perferendis ab sed atque. Sit est eveniet enim nisi est. Voluptas ut voluptas distinctio corrupti qui illum. Quod quia dolorum ut necessitatibus quas voluptatem blanditiis. Excepturi qui vero inventore et aut tempora provident veniam consequuntur. Eos beatae aliquid odit dolores voluptatem est ab quod iste.",
            "category": "Cap",
            "default_price": "680.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37538,
            "campus": "hr-rfe",
            "name": "Afton Skirt",
            "slogan": "Ducimus sed earum ut placeat velit.",
            "description": "Quia ullam ratione numquam dignissimos omnis delectus neque. Atque eum voluptatem quaerat velit illo nisi ipsam culpa et. Quisquam sequi fugiat excepturi non voluptatum praesentium alias. Soluta expedita reprehenderit non neque facere doloremque. Quis unde est distinctio quaerat quo. Molestiae molestiae autem quaerat autem et aut ab sequi.",
            "category": "Skirt",
            "default_price": "534.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37539,
            "campus": "hr-rfe",
            "name": "Haley Tank Top",
            "slogan": "Accusamus occaecati voluptatibus atque voluptatem velit itaque.",
            "description": "Et aliquam et nam eveniet tenetur ipsam. Et nobis sapiente eveniet repellendus deserunt. Cupiditate impedit id ipsam eaque veritatis delectus. Nemo cumque libero voluptatum possimus error asperiores inventore. Aut alias tempora dolore mollitia alias molestiae nihil et. Ut necessitatibus non maxime nihil fugit ut qui et nesciunt.",
            "category": "Tank Top",
            "default_price": "136.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37540,
            "campus": "hr-rfe",
            "name": "Thelma Backpack",
            "slogan": "Eos sed est.",
            "description": "Amet eos aut non aliquid rerum est qui. Asperiores iste reiciendis fugit doloribus. Fugiat quis sapiente numquam iure perspiciatis incidunt voluptatem.",
            "category": "Backpack",
            "default_price": "95.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37541,
            "campus": "hr-rfe",
            "name": "Lillian Romper",
            "slogan": "Non distinctio culpa rerum dolorem nam ea dignissimos qui aliquid.",
            "description": "Velit aut ut sint voluptates. Est iusto in fugiat et qui repudiandae distinctio ad ut. Suscipit nihil fuga veritatis ipsum ad omnis minus. Aut quia enim sit quam odio. Impedit nemo omnis. Ipsa natus rerum quibusdam a veniam et magnam ut consequatur.",
            "category": "Romper",
            "default_price": "516.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37542,
            "campus": "hr-rfe",
            "name": "The Loraine Sweatpants",
            "slogan": "Architecto asperiores sit autem.",
            "description": "Dolor ut minus quos omnis nihil sunt sapiente quia. Delectus voluptate non sed molestias incidunt totam consequuntur. Dolores et neque qui quos aliquam ad voluptates aliquam. Quasi enim quidem voluptas consequuntur assumenda et harum optio.",
            "category": "Sweatpants",
            "default_price": "216.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37543,
            "campus": "hr-rfe",
            "name": "Marta Hat",
            "slogan": "Autem voluptatem necessitatibus.",
            "description": "Assumenda velit in inventore eius placeat. Quae eos porro dolores. Sunt et et mollitia aut alias necessitatibus dolore id odit. Dolores officia et eligendi est quod ut sed veritatis itaque. Quod reiciendis ut eos aliquid et doloremque id aut voluptas.",
            "category": "Hat",
            "default_price": "421.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37544,
            "campus": "hr-rfe",
            "name": "Bernadette Cap",
            "slogan": "Et delectus in ea.",
            "description": "Possimus veritatis soluta libero. Quidem sunt ut ipsam voluptatum aperiam. Voluptas aut vel eos facere laborum. Iure aut vitae ut rerum rerum explicabo. Tenetur cum voluptatum enim et corrupti odio rerum sequi ex. Cumque facere quis odio.",
            "category": "Cap",
            "default_price": "902.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37545,
            "campus": "hr-rfe",
            "name": "Chanelle Shorts",
            "slogan": "Est sed nulla architecto minus ratione iure voluptatem nesciunt laborum.",
            "description": "Et repudiandae beatae. Perferendis iusto beatae est aut ab quidem officiis corrupti. Autem ut et omnis.",
            "category": "Shorts",
            "default_price": "594.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37546,
            "campus": "hr-rfe",
            "name": "Ford Backpack",
            "slogan": "Vel et veritatis voluptatem possimus.",
            "description": "Quaerat deleniti qui. Et ut minus officia aliquid eos nihil aliquam deleniti. Fuga facilis eveniet qui voluptatum. Et modi sed omnis qui error aut earum ab perferendis. Repellendus optio nihil rerum. Eaque dolorum vero sint aliquid mollitia consequatur.",
            "category": "Backpack",
            "default_price": "375.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37547,
            "campus": "hr-rfe",
            "name": "Stephany Sweater",
            "slogan": "Facilis velit commodi similique id qui sit repellendus ipsam.",
            "description": "Placeat qui occaecati dolore dolorum earum provident ut. Eum dignissimos sit enim et ea perspiciatis qui. Labore numquam ut voluptatem minus nesciunt aspernatur.",
            "category": "Sweater",
            "default_price": "828.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37548,
            "campus": "hr-rfe",
            "name": "Hanna Trousers",
            "slogan": "Consequatur odit laboriosam error placeat eius est corporis dolorum.",
            "description": "Enim non nisi quos voluptatem aut minima. Esse commodi omnis. Voluptates praesentium pariatur quasi vel distinctio quia ipsa quidem. Doloremque doloremque a reprehenderit totam voluptas ab aliquam.",
            "category": "Trousers",
            "default_price": "276.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37549,
            "campus": "hr-rfe",
            "name": "Lucinda Heels",
            "slogan": "Et tenetur ratione aut.",
            "description": "Quod quidem sint nobis nesciunt quos cum. Accusamus aut sequi laborum porro. Dignissimos tempora a iure. Et adipisci et qui officiis. Temporibus aliquam sint dicta odio ut ipsum sed ut inventore. Ipsam aut voluptas maiores vitae quasi est et qui.",
            "category": "Heels",
            "default_price": "789.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37550,
            "campus": "hr-rfe",
            "name": "Laverna Cap",
            "slogan": "Atque molestiae et voluptas.",
            "description": "Quis enim voluptatem labore ut. Facere tenetur sed dignissimos. Voluptas explicabo praesentium. Ipsam laboriosam repellat quo totam incidunt explicabo.",
            "category": "Cap",
            "default_price": "143.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37551,
            "campus": "hr-rfe",
            "name": "Cortez Sweater",
            "slogan": "Perferendis et enim maxime quaerat rerum incidunt tempore aut.",
            "description": "Minus expedita provident. Ipsam in repudiandae accusamus culpa quis. Dignissimos facere praesentium placeat et eos nobis fugiat porro officiis. Esse qui aspernatur odit et eaque quia animi. Consequatur et perspiciatis vero non vitae sapiente aut.",
            "category": "Sweater",
            "default_price": "451.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37552,
            "campus": "hr-rfe",
            "name": "Torrance Tank Top",
            "slogan": "Deleniti fugit iste a ut tenetur.",
            "description": "Consequuntur quasi aut incidunt sit quae. Odit et quidem maxime atque velit et. Ut est eveniet eos nihil quo qui. Aut necessitatibus voluptatum vitae voluptatibus non.",
            "category": "Tank Top",
            "default_price": "156.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37553,
            "campus": "hr-rfe",
            "name": "Ashlynn Coat",
            "slogan": "Recusandae illo repudiandae sed et rerum aut et.",
            "description": "Reprehenderit fugit quasi. Molestiae et aliquid non adipisci qui eos amet dolor omnis. Animi saepe est placeat. Repellat vel est aliquam labore in nobis nihil.",
            "category": "Coat",
            "default_price": "488.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37554,
            "campus": "hr-rfe",
            "name": "Tyrel Skirt",
            "slogan": "Illum eaque labore voluptatem rerum ratione assumenda.",
            "description": "In amet exercitationem ut alias beatae adipisci et alias quam. Officiis suscipit ullam. Iste est enim at quae totam quo.",
            "category": "Skirt",
            "default_price": "6.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37555,
            "campus": "hr-rfe",
            "name": "Kamryn Sweatpants",
            "slogan": "Itaque nemo et.",
            "description": "Eaque in quo consequatur sed ea in in nulla. Recusandae ut officia eaque sed ut sapiente dolore nam. Non dolorem sit non laborum omnis numquam et et. Sapiente omnis nam. Perspiciatis non harum voluptas quis velit. Consectetur aut unde nobis dolor voluptatem aspernatur rerum voluptatem alias.",
            "category": "Sweatpants",
            "default_price": "897.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37556,
            "campus": "hr-rfe",
            "name": "Virgie Suit",
            "slogan": "Assumenda exercitationem alias tempore illo consectetur illo.",
            "description": "Deserunt quae suscipit sed corporis et ut. Tenetur perferendis dolores quas molestiae voluptates quisquam recusandae et velit. Provident tenetur et voluptas magni saepe neque aut atque. Voluptas omnis fugiat consectetur illo sit ipsum qui enim. Rem minus sed.",
            "category": "Suit",
            "default_price": "574.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37557,
            "campus": "hr-rfe",
            "name": "Adonis Tank Top",
            "slogan": "Est consequatur dolore aut voluptatem occaecati.",
            "description": "Et ipsum voluptas sed ut qui. Repellat enim ab. Voluptatibus ea omnis voluptas. Totam alias non nihil dicta animi voluptatem tempore.",
            "category": "Tank Top",
            "default_price": "132.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37558,
            "campus": "hr-rfe",
            "name": "The Larry Hoodie",
            "slogan": "Facere aut esse quisquam soluta voluptate.",
            "description": "Nulla consequatur omnis dignissimos occaecati quis. Sit quibusdam cum. Nesciunt fuga unde aperiam.",
            "category": "Hoodie",
            "default_price": "859.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37559,
            "campus": "hr-rfe",
            "name": "Lemuel Shorts",
            "slogan": "Enim itaque vero magni cum quibusdam velit sint aut.",
            "description": "Autem consequatur odio magnam saepe dolor fuga et quis a. Eum omnis reprehenderit neque sint cum natus. Vel necessitatibus repudiandae id qui. Vitae repudiandae aut sed voluptatum totam. Quod porro sit voluptate aut. Cupiditate molestias voluptates possimus exercitationem molestiae laboriosam.",
            "category": "Shorts",
            "default_price": "548.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37560,
            "campus": "hr-rfe",
            "name": "Nina Sunglasses",
            "slogan": "Consequatur quaerat perspiciatis similique rerum qui aperiam officiis cupiditate amet.",
            "description": "Necessitatibus pariatur velit qui velit ad a doloremque. Accusamus est nisi minus ratione corrupti. Ea et facilis dolorem alias sunt ea. Et modi magni dolore est ea labore sapiente ea.",
            "category": "Sunglasses",
            "default_price": "844.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37561,
            "campus": "hr-rfe",
            "name": "Paxton Dress",
            "slogan": "Et et voluptatum est corporis nostrum unde animi voluptate perferendis.",
            "description": "Perferendis asperiores quia autem nam animi mollitia hic aut earum. Dolor tenetur harum quas. Dolores odio repudiandae non minima. Ducimus maxime id aut.",
            "category": "Dress",
            "default_price": "824.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37562,
            "campus": "hr-rfe",
            "name": "Jakob 1500 Sunglasses",
            "slogan": "Sint commodi eum et voluptatem officiis nihil inventore adipisci.",
            "description": "Itaque dolorem nemo quo. Aut qui architecto aut vero aliquam sit. Dolores in quisquam earum sequi accusantium delectus voluptatem numquam autem. Cum et dolores ipsam. Recusandae ut nihil earum esse dolore dolores consequatur magnam et.",
            "category": "Sunglasses",
            "default_price": "898.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37563,
            "campus": "hr-rfe",
            "name": "Efrain Slacks",
            "slogan": "Fuga quam et autem recusandae sed voluptates.",
            "description": "Alias dolor commodi unde ut quidem in rerum vel et. Voluptas est omnis nulla quis aut quia. Maxime velit et ut non quo reprehenderit rerum facere incidunt. Est assumenda dolores tempore eum odit id ex.",
            "category": "Slacks",
            "default_price": "347.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37564,
            "campus": "hr-rfe",
            "name": "Dereck Socks",
            "slogan": "Ad inventore vel iste est est.",
            "description": "Autem velit consequatur mollitia modi cumque velit accusantium et sunt. Ad illo vel. Vel cumque culpa occaecati in. Laudantium modi repudiandae quasi. Aliquam aliquam minima quia rerum dolorum explicabo molestias vel aut. Ullam alias est quis earum incidunt optio impedit.",
            "category": "Socks",
            "default_price": "783.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37565,
            "campus": "hr-rfe",
            "name": "Rachael Sweatpants",
            "slogan": "Quaerat esse id.",
            "description": "Assumenda amet reprehenderit. Est aut et officiis beatae eveniet. Saepe excepturi quia. Architecto voluptatum est error rerum eligendi explicabo voluptates temporibus dignissimos. Illo deleniti soluta autem blanditiis est est.",
            "category": "Sweatpants",
            "default_price": "204.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37566,
            "campus": "hr-rfe",
            "name": "Kaitlyn Hoodie",
            "slogan": "Et asperiores quisquam qui illo est ex.",
            "description": "Libero occaecati et animi aliquam occaecati necessitatibus eum repudiandae. Ut rerum ad earum et beatae. Enim velit quia ad in at. Neque deserunt quis reprehenderit repellat doloremque expedita. At aspernatur ut sint explicabo aut.",
            "category": "Hoodie",
            "default_price": "894.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37567,
            "campus": "hr-rfe",
            "name": "Lacy Shoes",
            "slogan": "Asperiores molestias placeat animi nulla.",
            "description": "In tempore labore officiis quas assumenda excepturi quisquam. Vero maxime rerum rerum nulla quia iste repudiandae perferendis. Rerum quod voluptas. Aut dolor accusamus enim aut.",
            "category": "Shoes",
            "default_price": "24.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37568,
            "campus": "hr-rfe",
            "name": "Juston Slacks",
            "slogan": "Omnis ea aut quia dolor autem cupiditate.",
            "description": "Officiis nisi quia non architecto. Enim voluptatem accusamus et dolorem adipisci harum et. Tempora maxime veniam inventore. Similique et sit. Similique totam rerum illo est quibusdam non laborum placeat. Aut doloribus quae vel ipsa non voluptas.",
            "category": "Slacks",
            "default_price": "302.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37569,
            "campus": "hr-rfe",
            "name": "Maddison Hoodie",
            "slogan": "Consequatur nulla ea ex sed eum libero accusamus inventore dolor.",
            "description": "Voluptatem officia aspernatur quia non. Recusandae ea voluptas voluptas sunt nihil hic mollitia et voluptates. Dolorem possimus repellendus qui. Earum aut dolor iusto corporis id.",
            "category": "Hoodie",
            "default_price": "447.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37570,
            "campus": "hr-rfe",
            "name": "Elise Jacket",
            "slogan": "Quos soluta quam atque et officiis est libero.",
            "description": "Eveniet deserunt nostrum aspernatur fuga. Dolorum et qui fugit similique ipsam. Est eum natus atque aspernatur facere neque illum. Ab ipsam deleniti. Aut sit voluptates aut. Est asperiores necessitatibus sit maiores quidem dolorem voluptas.",
            "category": "Jacket",
            "default_price": "388.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37571,
            "campus": "hr-rfe",
            "name": "Dangelo 650 Skirt",
            "slogan": "Rem veniam quisquam impedit dolor consequatur hic recusandae id.",
            "description": "Nesciunt sunt ullam expedita voluptates. Sunt omnis hic possimus ut enim vitae vel rerum. Dolores expedita saepe possimus voluptate eius. Debitis voluptas est impedit aliquid alias dolorum. Laborum asperiores officia id. Voluptatem corporis qui ipsam.",
            "category": "Skirt",
            "default_price": "139.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37572,
            "campus": "hr-rfe",
            "name": "Earnestine Boots",
            "slogan": "Porro natus non repellat corporis similique.",
            "description": "Et eos ad sint omnis rerum dolor eius. Velit qui aliquam id. Quas laudantium quia eligendi blanditiis ex. Nemo aperiam nemo labore soluta modi dignissimos.",
            "category": "Boots",
            "default_price": "629.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37573,
            "campus": "hr-rfe",
            "name": "Sandra Socks",
            "slogan": "Mollitia in sint id.",
            "description": "Qui et sit sit autem occaecati assumenda. Vitae amet facilis. Sapiente voluptatem sint eos quod. Totam sint omnis. Id ab porro sint atque magni quam. Tempora quia odio sit odit qui numquam.",
            "category": "Socks",
            "default_price": "800.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37574,
            "campus": "hr-rfe",
            "name": "Aiyana Coat",
            "slogan": "Eveniet soluta iusto nesciunt placeat.",
            "description": "In reprehenderit asperiores maxime assumenda id necessitatibus corporis. Odio architecto dolores ad fugiat eaque sit et sit consequuntur. Natus consectetur eos voluptas dignissimos voluptatem optio. Rerum eligendi possimus voluptatibus perferendis velit.",
            "category": "Coat",
            "default_price": "543.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37575,
            "campus": "hr-rfe",
            "name": "Tressa Pants",
            "slogan": "Natus aut exercitationem et dignissimos aliquid distinctio nemo ratione voluptatem.",
            "description": "Qui id est quia. Ducimus ea et. Mollitia est delectus illo earum dolorum soluta reprehenderit. Facilis consequatur exercitationem delectus illum distinctio eos reprehenderit. Iste consequatur fuga eveniet enim est aut provident consequatur. A est omnis.",
            "category": "Pants",
            "default_price": "598.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37576,
            "campus": "hr-rfe",
            "name": "Hermina Shoes",
            "slogan": "Veritatis consequatur cupiditate.",
            "description": "A distinctio sed voluptate ut aspernatur ea. Cum totam architecto magnam aut architecto sed explicabo. Explicabo et et. Possimus harum consequatur magni veritatis sint.",
            "category": "Shoes",
            "default_price": "612.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37577,
            "campus": "hr-rfe",
            "name": "Jacky Dress",
            "slogan": "Culpa et quas repellendus.",
            "description": "Enim occaecati ducimus molestiae. Et iste tempore labore. Maxime voluptatem consequatur perspiciatis qui fugit iste aliquam minima est. Assumenda eaque ut. Reprehenderit qui soluta. Vel ullam praesentium dolorem doloribus perspiciatis sequi quod consequatur.",
            "category": "Dress",
            "default_price": "430.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37578,
            "campus": "hr-rfe",
            "name": "Robb Slacks",
            "slogan": "Officiis cumque est voluptatem.",
            "description": "Unde ut vitae vero eos temporibus. Unde molestiae ipsum qui alias cum ut dolores. Vero ab quod atque veritatis porro. Rem repellendus ut quia corporis minus error architecto accusantium.",
            "category": "Slacks",
            "default_price": "713.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37579,
            "campus": "hr-rfe",
            "name": "Kayli Shirt",
            "slogan": "Distinctio similique accusamus in.",
            "description": "Nisi recusandae sint dolor a maxime fugiat qui. Ex qui explicabo non assumenda quaerat dolor. Ut nobis voluptas dolores voluptatem architecto in ab. Quos ut excepturi quod.",
            "category": "Shirt",
            "default_price": "900.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37580,
            "campus": "hr-rfe",
            "name": "Jaeden Jacket",
            "slogan": "Dicta qui fugit.",
            "description": "Qui atque incidunt alias corporis sunt dicta. Consequatur sed eum harum sed optio. Quidem molestiae assumenda aliquid labore praesentium. Eum incidunt minus. Deserunt porro est explicabo aperiam fugit.",
            "category": "Jacket",
            "default_price": "463.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37581,
            "campus": "hr-rfe",
            "name": "Adell Sweater",
            "slogan": "Hic quae velit id dolor eos ratione.",
            "description": "Hic eos dolorem voluptas voluptatem est aut suscipit. Ducimus qui sed veniam iusto et sint. Exercitationem nisi omnis veniam harum qui iusto et in ad. Neque beatae laudantium debitis. Qui sunt et.",
            "category": "Sweater",
            "default_price": "296.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37582,
            "campus": "hr-rfe",
            "name": "Guillermo Shoes",
            "slogan": "Quo cum impedit voluptas quae ipsa atque sunt exercitationem non.",
            "description": "Est culpa aut dolor. Voluptatem rerum et voluptas et ut commodi earum. Excepturi consectetur incidunt explicabo esse. Quasi qui enim qui sed maxime dolores. Quo porro reprehenderit est voluptas dolor perspiciatis quisquam placeat sed. Id quam qui non vel est sed et eaque odio.",
            "category": "Shoes",
            "default_price": "369.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37583,
            "campus": "hr-rfe",
            "name": "Suzanne Hoodie",
            "slogan": "Assumenda velit rerum illo.",
            "description": "Autem cumque nisi reiciendis. Dolores voluptas dignissimos. Est qui sunt consequatur. Non magnam dolor enim quis et voluptas accusantium soluta. Id esse quia quod alias et qui nemo deserunt nam. Doloremque ipsum quasi illo vitae aliquam maxime architecto.",
            "category": "Hoodie",
            "default_price": "462.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37584,
            "campus": "hr-rfe",
            "name": "Maryse Shirt",
            "slogan": "Autem quisquam perferendis voluptatum eligendi harum velit magnam et sit.",
            "description": "Et dolorem quis voluptatem quaerat a sed distinctio. Ut id minus et eos et. Est eos sed sunt nulla dicta modi. At blanditiis porro dolorum iusto rerum deleniti beatae.",
            "category": "Shirt",
            "default_price": "284.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37585,
            "campus": "hr-rfe",
            "name": "Watson Sunglasses",
            "slogan": "Dolor inventore veniam saepe dolor.",
            "description": "Et minima sed expedita consequatur vero aut ut. Voluptas blanditiis est cupiditate consectetur est delectus impedit. Doloribus soluta ea aut ipsum earum voluptatum quia totam est. Ipsam cum quia reiciendis nostrum est est similique ipsum. Eum vel perspiciatis tempora.",
            "category": "Sunglasses",
            "default_price": "25.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37586,
            "campus": "hr-rfe",
            "name": "Bethany Dress",
            "slogan": "Saepe similique exercitationem veniam.",
            "description": "Laboriosam quia ullam voluptas et facere. Sit modi sint quasi. Sunt at ab repellat at totam expedita quibusdam ut. Distinctio corrupti reprehenderit dolorum. Debitis consequatur et quidem omnis dolor non illum. Excepturi optio ut id ut similique dolores aut.",
            "category": "Dress",
            "default_price": "422.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37587,
            "campus": "hr-rfe",
            "name": "Destin 900 Slacks",
            "slogan": "Saepe earum vitae qui omnis ipsum quod rerum ea occaecati.",
            "description": "Nam quo molestias in quia nisi est earum assumenda aut. Eaque odio nihil in cupiditate atque aperiam et ut aut. Architecto ut ab in inventore ad officia numquam.",
            "category": "Slacks",
            "default_price": "458.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37588,
            "campus": "hr-rfe",
            "name": "Paul Hoodie",
            "slogan": "Fugiat natus odio natus.",
            "description": "Fugit labore ea nostrum occaecati libero alias et. Est culpa nihil nostrum dolorem. Adipisci vero dignissimos. Rerum porro exercitationem ut necessitatibus esse. Quia fugiat tempore quisquam inventore qui. Autem et repudiandae omnis accusamus.",
            "category": "Hoodie",
            "default_price": "331.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37589,
            "campus": "hr-rfe",
            "name": "Kira Hat",
            "slogan": "Unde et occaecati consequuntur molestiae.",
            "description": "Ut eveniet nam sit culpa. Repellat similique odio. Autem quos animi quia. Recusandae est veritatis nesciunt mollitia quis nemo et. Nesciunt voluptas hic sunt commodi rerum omnis. Modi inventore ut illo quae et et sunt.",
            "category": "Hat",
            "default_price": "303.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37590,
            "campus": "hr-rfe",
            "name": "Ansley Sunglasses",
            "slogan": "Nisi assumenda et voluptatem quae.",
            "description": "Sequi qui qui. Ea necessitatibus numquam. Excepturi ipsam velit quia necessitatibus harum voluptatibus suscipit qui ea. Ut quaerat est vitae. Officia minus in deleniti modi qui dolore. Ut eaque aperiam exercitationem id aliquid id voluptas quisquam sunt.",
            "category": "Sunglasses",
            "default_price": "537.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37591,
            "campus": "hr-rfe",
            "name": "Clarabelle Heels",
            "slogan": "Sit hic molestiae.",
            "description": "Nulla aut quod corrupti eligendi. Quia necessitatibus veniam dolores et. Maiores laborum in doloremque ipsa. Rerum dignissimos nobis esse quia cum rerum. Aliquam rerum sed quis facere quis provident unde atque dolores. Ex amet quo unde qui.",
            "category": "Heels",
            "default_price": "541.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37592,
            "campus": "hr-rfe",
            "name": "Dina Backpack",
            "slogan": "Saepe ut impedit harum.",
            "description": "Et voluptates saepe vel. Aut dolorum laboriosam eligendi. Accusamus sed aut id.",
            "category": "Backpack",
            "default_price": "299.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37593,
            "campus": "hr-rfe",
            "name": "The Freeda Backpack",
            "slogan": "Fugiat eum a aut necessitatibus suscipit a doloribus sed ea.",
            "description": "Incidunt debitis omnis enim rerum. Omnis corporis sapiente velit veritatis velit. Voluptatem qui consequuntur.",
            "category": "Backpack",
            "default_price": "650.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37594,
            "campus": "hr-rfe",
            "name": "Jerome Suit",
            "slogan": "Praesentium voluptas facere qui est corrupti neque quae magni.",
            "description": "Iure nostrum velit qui voluptatem. Ratione consequatur rerum. Ut et dignissimos commodi et. Et quia ad dolore quasi.",
            "category": "Suit",
            "default_price": "870.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37595,
            "campus": "hr-rfe",
            "name": "Katheryn Slacks",
            "slogan": "Aliquam et nam commodi hic et excepturi ut.",
            "description": "Aut porro at tempore sint vitae. Inventore non dignissimos voluptatem ipsam sequi. Nostrum ut at aut aut harum. Non velit aliquid iure animi cumque odit.",
            "category": "Slacks",
            "default_price": "267.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37596,
            "campus": "hr-rfe",
            "name": "Hilbert Slacks",
            "slogan": "Nesciunt qui ea itaque pariatur maxime nostrum eum doloribus exercitationem.",
            "description": "Officiis neque non culpa et. Quas aut fugit cupiditate aut sequi quisquam. Autem delectus autem qui et sit. Ea qui illo odit non ut. Non distinctio non id incidunt est animi sapiente possimus repellat.",
            "category": "Slacks",
            "default_price": "84.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37597,
            "campus": "hr-rfe",
            "name": "Joe Coat",
            "slogan": "Numquam eius doloribus quia sunt dolorem sit.",
            "description": "Eius qui voluptatem pariatur nulla amet debitis tempora. Excepturi laudantium iusto ea praesentium sit. Modi velit perspiciatis nostrum ipsam tenetur. Sint eligendi ut asperiores ut.",
            "category": "Coat",
            "default_price": "102.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37598,
            "campus": "hr-rfe",
            "name": "Nyasia Jacket",
            "slogan": "Quibusdam quia recusandae ut consectetur architecto placeat et.",
            "description": "Quasi error sequi aspernatur voluptas. Consectetur ab repellendus est rerum. Maiores nulla nihil aut sed et nihil. Ut dolorem eius. Possimus fuga labore nihil nemo.",
            "category": "Jacket",
            "default_price": "135.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37599,
            "campus": "hr-rfe",
            "name": "Jaylen 900 Pants",
            "slogan": "Et eius fugit voluptates et dolorem molestiae debitis temporibus.",
            "description": "Est ut unde itaque ut perspiciatis et qui odio. Tempore est fuga sit non eos doloremque. Et aut dignissimos voluptatem aut. Laborum et nostrum sed voluptas. Neque distinctio repellendus rerum ea. Praesentium quia repellat ipsa dolorem.",
            "category": "Pants",
            "default_price": "792.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37600,
            "campus": "hr-rfe",
            "name": "Esteban Shoes",
            "slogan": "Quod vitae cupiditate minus dignissimos inventore.",
            "description": "Nobis sit velit quisquam quo neque. Sunt numquam quaerat. Tempora suscipit sit eos sapiente. Neque illo sed. Asperiores aut sed aperiam tempore quos iure ut temporibus.",
            "category": "Shoes",
            "default_price": "166.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37601,
            "campus": "hr-rfe",
            "name": "Sabrina Heels",
            "slogan": "Eligendi consequatur ducimus et quod.",
            "description": "Et voluptas nemo voluptatem. Voluptatem qui voluptas ea et dicta deserunt. Voluptatem quo quis delectus iure corporis dolor quod. Doloribus sed voluptatem omnis blanditiis dolorem ab. Et nesciunt et voluptatem assumenda necessitatibus id deserunt nesciunt numquam. Deleniti sint est eum enim ad in corporis natus.",
            "category": "Heels",
            "default_price": "362.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37602,
            "campus": "hr-rfe",
            "name": "Frank Heels",
            "slogan": "Aliquid velit architecto quasi qui ut unde eum quis.",
            "description": "Et illum aut. Ut iure quidem explicabo blanditiis corporis. Deleniti ea et ipsam odit. Doloribus ullam assumenda dolore ex eligendi architecto deleniti repellat officiis.",
            "category": "Heels",
            "default_price": "1000.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37603,
            "campus": "hr-rfe",
            "name": "The Alexander Cap",
            "slogan": "Et minima occaecati consequuntur ipsum eos officia cumque.",
            "description": "Reiciendis voluptas inventore enim architecto. Voluptatibus voluptates nulla illum eligendi illum est quaerat suscipit. Possimus expedita dolorum ipsa est.",
            "category": "Cap",
            "default_price": "44.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37604,
            "campus": "hr-rfe",
            "name": "Breanne Shirt",
            "slogan": "Delectus consequatur magnam quasi qui doloribus occaecati consequatur placeat.",
            "description": "Vitae dolor quia non doloremque porro rem voluptas provident. Cum enim hic iusto voluptatem quis sunt. Quam neque debitis consequatur nulla quae odit velit dolorum commodi. Esse temporibus optio libero et aspernatur. Libero adipisci sit qui nisi vel quasi eos consequatur vel.",
            "category": "Shirt",
            "default_price": "201.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37605,
            "campus": "hr-rfe",
            "name": "Rudolph Hat",
            "slogan": "Facilis aliquam ipsa.",
            "description": "Omnis vero ut eos consequatur est id eum molestiae officia. Aut et totam magni reprehenderit est nobis. Omnis dolor laboriosam voluptatibus facere. Et quo aperiam voluptate temporibus sed excepturi. Harum optio possimus sed.",
            "category": "Hat",
            "default_price": "688.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37606,
            "campus": "hr-rfe",
            "name": "Isai Coat",
            "slogan": "Facilis tempora aliquid.",
            "description": "Dicta est nulla ullam dolores laboriosam dignissimos laudantium. Molestias architecto repellat inventore qui aliquid. Dicta voluptatem et voluptatem perspiciatis.",
            "category": "Coat",
            "default_price": "746.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37607,
            "campus": "hr-rfe",
            "name": "Joyce Socks",
            "slogan": "Quia vitae enim consectetur tempore dolor aliquid ad.",
            "description": "Non ut debitis delectus suscipit tempora accusantium assumenda eveniet. Nihil omnis eos deserunt officia dolore. Eligendi atque ut quaerat ad repellat repellat voluptatem quas. Praesentium voluptates et eum aspernatur voluptatem exercitationem. Eaque eveniet eveniet.",
            "category": "Socks",
            "default_price": "407.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37608,
            "campus": "hr-rfe",
            "name": "Hayden Tank Top",
            "slogan": "Vero dolor aut.",
            "description": "Est voluptas corporis expedita id aliquam. Omnis amet quae soluta optio atque. Quisquam autem rem officiis voluptatum eum inventore. Ut pariatur id ducimus eligendi voluptatem nihil.",
            "category": "Tank Top",
            "default_price": "254.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37609,
            "campus": "hr-rfe",
            "name": "Selina Sweater",
            "slogan": "Tempora error deleniti ea voluptas magnam odit quam.",
            "description": "Reiciendis explicabo quia quas distinctio quas. Sequi quis qui ex. Eveniet velit earum. Et est voluptatibus dolore consequatur. Molestias dolor voluptas quia similique ea. Blanditiis ut voluptas earum dolor sint dolor.",
            "category": "Sweater",
            "default_price": "977.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37610,
            "campus": "hr-rfe",
            "name": "Kayli Shirt",
            "slogan": "Quibusdam magni labore qui recusandae.",
            "description": "In eum sit hic facere perspiciatis consequatur. Aut voluptatibus porro ut qui. Est in qui a id. Dolores architecto itaque. Nulla ipsa iure. Explicabo optio itaque necessitatibus nulla quisquam voluptatem.",
            "category": "Shirt",
            "default_price": "611.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37611,
            "campus": "hr-rfe",
            "name": "Nola Trousers",
            "slogan": "Ut libero tempora sint non nobis facilis.",
            "description": "Aut reprehenderit delectus voluptas eum temporibus molestias aliquid. Molestiae cum sit tempora id. Rerum cumque vitae est nam ea rem.",
            "category": "Trousers",
            "default_price": "714.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37612,
            "campus": "hr-rfe",
            "name": "Dortha Cap",
            "slogan": "Aut quidem quo non ea doloribus cupiditate.",
            "description": "Quia pariatur accusantium assumenda exercitationem sed perspiciatis omnis. Minus repellat iste. Non officiis dicta dolorem omnis. Beatae sit id vel commodi et. Impedit sed aliquam inventore voluptatem eveniet. Exercitationem nihil nesciunt dolor et facilis et ipsum eos.",
            "category": "Cap",
            "default_price": "146.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37613,
            "campus": "hr-rfe",
            "name": "Guy Shorts",
            "slogan": "Dicta in aut quam quae non adipisci laboriosam quibusdam.",
            "description": "Deserunt aspernatur impedit repudiandae. Et modi atque quia sapiente voluptates odio modi assumenda. Et nam officiis. Unde ducimus ex adipisci. Neque nam sed et vitae sunt expedita. Ut deleniti ut non eum maiores exercitationem.",
            "category": "Shorts",
            "default_price": "209.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37614,
            "campus": "hr-rfe",
            "name": "Emiliano Trousers",
            "slogan": "Perspiciatis aut earum ab.",
            "description": "Natus sit commodi praesentium minus earum omnis voluptatem voluptas quam. Nostrum ea ipsa illum exercitationem assumenda non. Et id beatae. Voluptas velit ad dicta aut reprehenderit.",
            "category": "Trousers",
            "default_price": "177.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37615,
            "campus": "hr-rfe",
            "name": "Prudence Sweatpants",
            "slogan": "Saepe sed libero.",
            "description": "Voluptas et ipsam nemo quia ea ea excepturi accusantium. Aperiam nihil esse esse est consequuntur. Eos omnis quia dolorum ipsum et eligendi sint minus a. Fugiat impedit qui aliquid provident voluptas possimus. Non labore placeat.",
            "category": "Sweatpants",
            "default_price": "116.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37616,
            "campus": "hr-rfe",
            "name": "Duane Heels",
            "slogan": "Saepe velit quo recusandae omnis est non exercitationem ducimus alias.",
            "description": "Mollitia a quia optio. Ducimus a maxime repellat dolorem consequatur aut non ut ut. Sequi autem dolorum nesciunt consequatur magni reiciendis. Nam ea qui cumque tempore minima.",
            "category": "Heels",
            "default_price": "525.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37617,
            "campus": "hr-rfe",
            "name": "Terrence 250 Pants",
            "slogan": "Non ut tempore ducimus cupiditate omnis autem hic aut dolores.",
            "description": "Qui et nemo et omnis voluptatibus est. Et facere voluptatem doloremque at vel. Ea asperiores voluptate occaecati sed delectus sed non est magni. Earum iusto quam. Est sunt doloribus sit asperiores et accusantium.",
            "category": "Pants",
            "default_price": "362.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37618,
            "campus": "hr-rfe",
            "name": "Elnora Trousers",
            "slogan": "Quia nihil dolores.",
            "description": "Molestiae eum nesciunt quos officia dolore. Qui magni culpa sit sapiente consequuntur et veniam aut quis. Possimus repudiandae aut dolorem vero explicabo quisquam expedita et quia. Hic iusto dolore inventore beatae deleniti. Harum molestiae dolorem eos ducimus voluptas temporibus.",
            "category": "Trousers",
            "default_price": "111.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37619,
            "campus": "hr-rfe",
            "name": "Edna Hoodie",
            "slogan": "Quia veritatis vel in corrupti aperiam laboriosam laborum dolor.",
            "description": "Natus necessitatibus non vitae minus vitae sit ut. Et aut vitae dolorem accusantium nisi assumenda qui et. Nostrum est ut nihil illo suscipit vero ipsum aut quia. Corrupti pariatur nisi odit a qui est dolorem.",
            "category": "Hoodie",
            "default_price": "4.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37620,
            "campus": "hr-rfe",
            "name": "Ervin Dress",
            "slogan": "Dicta excepturi aut odio.",
            "description": "Alias aliquid quia at est non molestias. Sed architecto quos consequatur maxime dolorem. Quas sed voluptas impedit. Perferendis asperiores aut natus. Tempora temporibus voluptates esse nisi laborum. Dolore non repudiandae accusantium et non quaerat quos.",
            "category": "Dress",
            "default_price": "509.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37621,
            "campus": "hr-rfe",
            "name": "Dagmar Cap",
            "slogan": "Nesciunt culpa numquam qui consequuntur quam.",
            "description": "Esse perferendis ut qui eligendi possimus voluptatem voluptatem laborum. Blanditiis et esse placeat. Et maxime dignissimos. Soluta deleniti eos necessitatibus porro est aut. Id iste a qui eos mollitia.",
            "category": "Cap",
            "default_price": "400.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37622,
            "campus": "hr-rfe",
            "name": "Wilhelm Heels",
            "slogan": "Illum qui laudantium corporis reiciendis facilis voluptate.",
            "description": "Dolorum amet animi cum iste illum ex dolorum voluptas. Tempore commodi quos rerum dolorem non voluptatem. Accusantium esse doloremque magnam ratione rem. Iusto iusto eos. Nihil qui et et atque accusamus. Quidem esse enim ut reprehenderit vero.",
            "category": "Heels",
            "default_price": "366.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37623,
            "campus": "hr-rfe",
            "name": "Krystel Sweatpants",
            "slogan": "Dicta dolor quam totam libero et pariatur eligendi.",
            "description": "Expedita eaque impedit. Et consequatur vitae dolore culpa aut rerum ducimus voluptas. Quos corrupti est. Quibusdam laudantium magnam at deleniti ex nam ut dolor. Consequatur inventore alias ab in dolor.",
            "category": "Sweatpants",
            "default_price": "484.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37624,
            "campus": "hr-rfe",
            "name": "Jennie Trousers",
            "slogan": "Adipisci minus modi quisquam nesciunt et itaque architecto inventore qui.",
            "description": "Sed ipsam autem voluptatem ullam nihil excepturi. Rem repudiandae est. Laboriosam quia vel quia velit. Reiciendis corporis sint ratione quo eius illum adipisci.",
            "category": "Trousers",
            "default_price": "356.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37625,
            "campus": "hr-rfe",
            "name": "Nella Slacks",
            "slogan": "Enim id alias sint distinctio perspiciatis.",
            "description": "Officia sit qui est dolor alias laboriosam. Nihil non praesentium dicta sunt. Quod sunt dolores assumenda. Nesciunt qui dolorum facere autem et sint non aperiam magnam.",
            "category": "Slacks",
            "default_price": "618.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37626,
            "campus": "hr-rfe",
            "name": "Diana Sunglasses",
            "slogan": "Qui est amet facilis qui quia.",
            "description": "Magnam consequatur ex consequatur iusto natus. Dolore in expedita et et eaque. Vel voluptates cumque delectus sed sequi error repellendus. Reprehenderit similique qui libero nam quasi. Voluptas sint cumque ut doloribus voluptatem. Ipsum non facilis quia.",
            "category": "Sunglasses",
            "default_price": "344.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37627,
            "campus": "hr-rfe",
            "name": "Zella Backpack",
            "slogan": "Blanditiis quidem aut suscipit reiciendis saepe quas sapiente.",
            "description": "Eius optio commodi qui nostrum earum quis atque. Quia et architecto amet voluptatibus quod illo. Et quis expedita quibusdam voluptas.",
            "category": "Backpack",
            "default_price": "765.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37628,
            "campus": "hr-rfe",
            "name": "Ambrose Sweater",
            "slogan": "Laudantium enim odit est dolorem corporis voluptate accusantium vel pariatur.",
            "description": "Consequuntur aut aliquid. Sint fugit error in expedita. Sapiente aliquam sint.",
            "category": "Sweater",
            "default_price": "837.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37629,
            "campus": "hr-rfe",
            "name": "Ole Hat",
            "slogan": "Quia vel tenetur eos provident quaerat.",
            "description": "Consequatur quaerat possimus soluta quo est sunt illo. Quia iure alias excepturi. Veniam consequatur est sunt sit. Eos voluptatem quia. Quis aliquam atque quis assumenda beatae aspernatur.",
            "category": "Hat",
            "default_price": "61.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37630,
            "campus": "hr-rfe",
            "name": "Colten Shirt",
            "slogan": "Facere magni et voluptate qui ipsam aut esse dolor rerum.",
            "description": "Explicabo iste qui. Reiciendis optio cupiditate enim impedit ea maiores excepturi hic rerum. Quaerat labore quo molestiae aliquam dolorum vero optio. Accusantium nisi ea aut nihil quidem corporis sunt.",
            "category": "Shirt",
            "default_price": "874.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37631,
            "campus": "hr-rfe",
            "name": "Beatrice Backpack",
            "slogan": "Maxime rerum nostrum quos ut sit eos.",
            "description": "Consectetur ea eos. Aut id quo enim libero vitae. Animi sint blanditiis id itaque et quo qui doloribus. Cum ut voluptatem.",
            "category": "Backpack",
            "default_price": "924.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37632,
            "campus": "hr-rfe",
            "name": "Shaylee Skirt",
            "slogan": "Suscipit quia in ut aspernatur impedit.",
            "description": "Non ea porro cumque consequuntur vel vero. Aut perferendis occaecati adipisci nobis. Aliquam alias eum.",
            "category": "Skirt",
            "default_price": "126.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37633,
            "campus": "hr-rfe",
            "name": "Antonette 250 Backpack",
            "slogan": "Et cumque qui dicta aliquid esse a totam sequi qui.",
            "description": "Odio voluptates quae expedita ad consequuntur officiis eos deserunt. Temporibus explicabo ut nobis cupiditate saepe voluptas. Temporibus tempora blanditiis aut placeat. Totam nobis aut. Sit culpa tenetur qui et temporibus dolores perspiciatis quos.",
            "category": "Backpack",
            "default_price": "749.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37634,
            "campus": "hr-rfe",
            "name": "Freddy Boots",
            "slogan": "Expedita ea aliquid ipsam.",
            "description": "Repellendus qui aut at et voluptatum nemo nesciunt qui ea. Vero quam non doloribus ad praesentium repellendus nesciunt est. Omnis commodi suscipit nihil corrupti dolorem quam. Deserunt neque quaerat fuga commodi enim sunt quae doloribus. Expedita cum nihil. Dolore inventore ut est.",
            "category": "Boots",
            "default_price": "317.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37635,
            "campus": "hr-rfe",
            "name": "Krista Heels",
            "slogan": "Maiores autem nemo.",
            "description": "Et omnis atque maiores non magnam nam. Aut reiciendis doloremque non minus. Inventore pariatur consequatur perferendis tempore nisi ex dolore asperiores rerum.",
            "category": "Heels",
            "default_price": "441.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37636,
            "campus": "hr-rfe",
            "name": "Luz Hoodie",
            "slogan": "Fugiat est magni dignissimos est cum consectetur voluptas ipsa nihil.",
            "description": "Impedit amet voluptates tempora iste nihil quo et. Reprehenderit et aut iusto est error impedit cumque. Quis aliquam quisquam est cumque. Magnam consequatur et aut eveniet aliquam architecto nam ipsam. Non blanditiis et et dicta optio et quia et.",
            "category": "Hoodie",
            "default_price": "626.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37637,
            "campus": "hr-rfe",
            "name": "Adan Sweatpants",
            "slogan": "Qui et ut aliquam corporis dolor.",
            "description": "Minima quis qui. Sed voluptatibus laborum ea maxime neque aliquam expedita. Minima veniam eum quasi assumenda. Cum omnis vero fugit ut minus. Iure suscipit quae voluptate voluptas.",
            "category": "Sweatpants",
            "default_price": "648.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37638,
            "campus": "hr-rfe",
            "name": "Marion Tank Top",
            "slogan": "Officia quos at ex.",
            "description": "Recusandae omnis aspernatur deserunt deserunt explicabo. Exercitationem in voluptatem deleniti rem ducimus consequuntur molestiae optio dolores. Velit vero eius architecto molestiae. Iste quia eos aut. Tenetur nobis odit repellat voluptatem omnis reiciendis id nihil hic. Reiciendis aut sequi perspiciatis consequuntur tempore saepe ut sunt tempore.",
            "category": "Tank Top",
            "default_price": "490.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37639,
            "campus": "hr-rfe",
            "name": "Salvatore Slacks",
            "slogan": "Officia qui cupiditate dicta omnis at.",
            "description": "Iste expedita debitis nobis nobis quasi non repellendus nostrum soluta. Molestias iste et occaecati reprehenderit voluptatem nisi. Delectus vel sunt quo nihil. Dolor et qui soluta sed.",
            "category": "Slacks",
            "default_price": "336.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37640,
            "campus": "hr-rfe",
            "name": "Sadye Backpack",
            "slogan": "Qui non non dolor.",
            "description": "Commodi rerum aut consequatur nesciunt corporis optio. Amet numquam quis vel quibusdam qui vel esse illum. Repellendus nihil eveniet laborum aut omnis voluptatum vel officiis. Vel voluptatum dignissimos dolorem sit vel quaerat.",
            "category": "Backpack",
            "default_price": "504.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37641,
            "campus": "hr-rfe",
            "name": "Francisca Cap",
            "slogan": "Quisquam sed minima dolorem minima a vero.",
            "description": "Et non omnis explicabo nobis qui expedita. Fuga recusandae porro. Quis placeat provident minus ut expedita vel enim. Vitae quaerat deserunt reiciendis deserunt accusantium velit tempore nihil consequatur.",
            "category": "Cap",
            "default_price": "124.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37642,
            "campus": "hr-rfe",
            "name": "Nicolas Shoes",
            "slogan": "Voluptas qui voluptas sequi libero.",
            "description": "Mollitia asperiores eius perferendis perferendis. Velit perferendis praesentium deleniti ut iusto dolor assumenda. Nesciunt non enim deleniti cupiditate sed deleniti est libero. Voluptatem repellendus quas qui mollitia aut non cum. Sed delectus id aut. Et laboriosam animi doloribus magnam ratione qui.",
            "category": "Shoes",
            "default_price": "815.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37643,
            "campus": "hr-rfe",
            "name": "Justen Shorts",
            "slogan": "Praesentium culpa velit quia minima.",
            "description": "Qui provident qui iure ipsa eius voluptas sit nam corporis. Ea sit nihil. Distinctio autem voluptas sint et. Sed dolores non laudantium et officiis voluptas recusandae repellat. Repudiandae et esse dolore consequuntur.",
            "category": "Shorts",
            "default_price": "294.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37644,
            "campus": "hr-rfe",
            "name": "Ana Sweatpants",
            "slogan": "Fugit voluptas debitis eum dolorum fuga.",
            "description": "Saepe voluptas tempore sunt velit labore fugit. Omnis aut ut. Placeat a ut est velit maiores.",
            "category": "Sweatpants",
            "default_price": "93.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37645,
            "campus": "hr-rfe",
            "name": "Nathan Hat",
            "slogan": "Earum vel sit.",
            "description": "Et expedita iste itaque. At debitis in fuga velit veritatis pariatur ab enim. Sed voluptas corrupti. Error adipisci nihil qui ratione. Rem porro qui dignissimos praesentium quisquam soluta.",
            "category": "Hat",
            "default_price": "470.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37646,
            "campus": "hr-rfe",
            "name": "Dannie Sweater",
            "slogan": "Aliquid enim enim sunt molestiae rerum doloremque adipisci molestias est.",
            "description": "Reprehenderit vero adipisci aspernatur. Et illum sunt dolores reprehenderit ut consequuntur omnis. Id repudiandae et nihil soluta repudiandae et voluptatem. Aliquam ut ducimus fugit rerum neque culpa consectetur.",
            "category": "Sweater",
            "default_price": "529.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37647,
            "campus": "hr-rfe",
            "name": "Violet Shoes",
            "slogan": "Voluptas blanditiis mollitia vero consequatur possimus.",
            "description": "Enim hic corporis aut dolores. Quam veritatis dolorum minus consequatur et consequuntur. Quo nam est officia quaerat. Veritatis repudiandae nihil voluptas et amet ut voluptatem et. Maiores molestiae distinctio quisquam qui dolor numquam repellendus.",
            "category": "Shoes",
            "default_price": "654.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37648,
            "campus": "hr-rfe",
            "name": "Antonietta Boots",
            "slogan": "Cum voluptate iste sed illo harum autem magni animi totam.",
            "description": "Et omnis laboriosam. Placeat veritatis nisi autem qui voluptas. Doloremque occaecati autem eum sunt qui atque. Laudantium ullam temporibus dolorem et sequi reprehenderit. Veniam iste numquam sit dicta quibusdam unde.",
            "category": "Boots",
            "default_price": "446.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37649,
            "campus": "hr-rfe",
            "name": "Megane 1100 Shoes",
            "slogan": "Magnam quos consectetur quos maiores ipsam sed.",
            "description": "Dolor commodi id nobis animi nisi nemo voluptatum quaerat autem. Ducimus et sit impedit aliquid qui aut cum. Vel eos libero vitae nesciunt at earum porro et. Velit inventore nesciunt voluptas placeat cupiditate placeat commodi.",
            "category": "Shoes",
            "default_price": "349.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37650,
            "campus": "hr-rfe",
            "name": "Raegan Cap",
            "slogan": "Modi corrupti dolor nemo voluptas aut tempora et sit ex.",
            "description": "Rerum inventore alias est dolorem. Ea quo optio qui quos. Quibusdam voluptate ducimus expedita ea suscipit ut nam et. Impedit architecto eum illum architecto sed reiciendis et deleniti perspiciatis. Sint rerum voluptas dolor quas accusantium inventore.",
            "category": "Cap",
            "default_price": "725.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37651,
            "campus": "hr-rfe",
            "name": "Helmer Hoodie",
            "slogan": "Iusto dolorem dolore.",
            "description": "A id illum ducimus sed corporis molestias. Labore deserunt aliquid quia ut quo. Vero et nihil sed aut dolorem vel illum cum harum. Ex id inventore cum.",
            "category": "Hoodie",
            "default_price": "801.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37652,
            "campus": "hr-rfe",
            "name": "Ian Tank Top",
            "slogan": "Commodi sit in et veniam ea sint.",
            "description": "Et ducimus rem voluptatum et eaque vel. Alias ex ipsam dignissimos dignissimos deserunt quas eveniet quidem ipsa. Soluta vel dolores molestiae ullam rerum incidunt ipsum quia.",
            "category": "Tank Top",
            "default_price": "978.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37653,
            "campus": "hr-rfe",
            "name": "Dimitri Slacks",
            "slogan": "Inventore consectetur sit quis quas explicabo vero natus praesentium aut.",
            "description": "Voluptas nam officia qui autem non temporibus est explicabo voluptas. Necessitatibus iure minus voluptas nesciunt commodi provident. Nam libero repellat. Ullam sint corrupti. Et voluptas tempore neque mollitia magni maiores sunt qui consequatur.",
            "category": "Slacks",
            "default_price": "815.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37654,
            "campus": "hr-rfe",
            "name": "Dexter Hoodie",
            "slogan": "Debitis quaerat aperiam officia sunt atque.",
            "description": "Libero similique quas. Harum rem quis deleniti veritatis molestiae aliquam odio perferendis aut. Est nulla quae architecto a molestiae. Sed reiciendis aliquam quae voluptatum aut.",
            "category": "Hoodie",
            "default_price": "317.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37655,
            "campus": "hr-rfe",
            "name": "Makenna Trousers",
            "slogan": "Iusto eveniet earum commodi eos facere eius voluptas.",
            "description": "Blanditiis laudantium ut qui ipsa. Commodi ab consequuntur consequatur totam dolor. Deleniti deserunt adipisci deleniti. Magni non aliquam quo sed doloribus labore laborum a accusamus. Velit velit voluptatem.",
            "category": "Trousers",
            "default_price": "89.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37656,
            "campus": "hr-rfe",
            "name": "Deondre Shirt",
            "slogan": "Eveniet necessitatibus sunt voluptas ipsum ipsum rerum ut perspiciatis.",
            "description": "Perspiciatis nihil et molestiae quod exercitationem optio ex. Accusantium vel suscipit repudiandae. Et recusandae consequatur quae cupiditate ut. Repudiandae voluptas voluptas harum sapiente recusandae.",
            "category": "Shirt",
            "default_price": "190.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37657,
            "campus": "hr-rfe",
            "name": "Beau Shorts",
            "slogan": "Voluptates ipsum nemo doloribus occaecati.",
            "description": "Culpa reprehenderit a ex aliquam eligendi est nemo nam. Quaerat qui soluta ad officiis quod et vel nisi. Facere unde vel dicta quis eligendi eaque. Nihil ex laboriosam similique tenetur rerum corrupti ut dicta.",
            "category": "Shorts",
            "default_price": "102.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37658,
            "campus": "hr-rfe",
            "name": "Darron Trousers",
            "slogan": "Incidunt quis dolorum et nisi soluta.",
            "description": "Quisquam iste et maiores sequi porro saepe est totam. Corporis sed ea nisi occaecati non. Consequuntur alias recusandae sunt deleniti veniam sed porro doloribus ad. Ut doloremque error debitis aut eum deleniti. Eos exercitationem est eum est quae consequatur vitae deleniti asperiores.",
            "category": "Trousers",
            "default_price": "209.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37659,
            "campus": "hr-rfe",
            "name": "The General Backpack",
            "slogan": "Ea nemo qui eius est.",
            "description": "Deserunt cupiditate nemo. Aut et dolorum cupiditate. Voluptas eligendi velit nihil quae aut qui iste. Error animi aut et non ut saepe omnis et. Ex sunt nihil ut quod eius facere a veritatis minima.",
            "category": "Backpack",
            "default_price": "817.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37660,
            "campus": "hr-rfe",
            "name": "Schuyler Sweatpants",
            "slogan": "Autem id alias quia.",
            "description": "Ut excepturi voluptas modi eaque aperiam. Quisquam est perferendis repellat commodi laborum consequatur ut provident. Odit veniam ut dolore necessitatibus voluptatem. Rerum placeat dolores quis ut temporibus earum quia nesciunt sed.",
            "category": "Sweatpants",
            "default_price": "470.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37661,
            "campus": "hr-rfe",
            "name": "Johann Shirt",
            "slogan": "Eius consequatur et illo omnis unde molestiae esse.",
            "description": "Est numquam quis voluptate vitae et accusamus. Iure rem ratione velit recusandae eos praesentium. Quia officia et. Numquam provident commodi ut.",
            "category": "Shirt",
            "default_price": "788.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37662,
            "campus": "hr-rfe",
            "name": "Jeramie Shoes",
            "slogan": "Impedit soluta est et pariatur exercitationem dolores.",
            "description": "Debitis eum incidunt distinctio ullam fugit et reprehenderit aliquid voluptatibus. Ut odit reprehenderit eligendi. Quia molestiae et quibusdam doloribus voluptatem sed est distinctio occaecati. Ipsum amet ut sed quia commodi consequuntur modi. Perspiciatis consectetur esse laudantium velit et voluptatem distinctio.",
            "category": "Shoes",
            "default_price": "262.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37663,
            "campus": "hr-rfe",
            "name": "Brennon Socks",
            "slogan": "Mollitia qui voluptatem ullam rerum eveniet officiis doloribus sint quis.",
            "description": "Qui quis non at dolor. Optio hic cupiditate consequatur ea fugit placeat velit delectus unde. Dolor et facere. Aperiam earum quaerat voluptatum. Est adipisci voluptatem necessitatibus ut. Ipsum dolorum dolores est doloremque alias labore facere tenetur.",
            "category": "Socks",
            "default_price": "590.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37664,
            "campus": "hr-rfe",
            "name": "Jabari Boots",
            "slogan": "Est omnis sapiente ut quae cum et.",
            "description": "Ducimus molestiae voluptate soluta rerum rerum eveniet esse. Quia esse quae perspiciatis qui modi eum. Enim odit nemo corporis.",
            "category": "Boots",
            "default_price": "507.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37665,
            "campus": "hr-rfe",
            "name": "Pascale Tank Top",
            "slogan": "Impedit facilis quisquam distinctio sed ea enim tempore corrupti cupiditate.",
            "description": "Explicabo tenetur magnam voluptatem atque magni laborum praesentium. Modi similique et. Est culpa et. Ut possimus in. Similique neque fugiat qui possimus et voluptatem.",
            "category": "Tank Top",
            "default_price": "844.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37666,
            "campus": "hr-rfe",
            "name": "Linda Shirt",
            "slogan": "Nam dignissimos ut velit magni expedita.",
            "description": "Modi et modi tempore itaque ab ut. Reiciendis iste saepe perspiciatis ratione perferendis. Est veniam quas. Soluta expedita expedita explicabo non quis omnis. Beatae qui ut et quidem veniam ducimus adipisci ad.",
            "category": "Shirt",
            "default_price": "218.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37667,
            "campus": "hr-rfe",
            "name": "Esther Backpack",
            "slogan": "Non iusto velit rerum labore nemo dicta alias.",
            "description": "Assumenda aut nam quo totam suscipit reiciendis optio fugiat aut. Sequi amet harum beatae itaque quisquam numquam. Neque velit omnis omnis est.",
            "category": "Backpack",
            "default_price": "238.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37668,
            "campus": "hr-rfe",
            "name": "Daphne Romper",
            "slogan": "Optio iusto et optio at pariatur incidunt.",
            "description": "Ab fugiat expedita illo. Est aut nobis. Nam ut itaque cum amet nisi voluptatem architecto nulla. Cum inventore et expedita mollitia unde. Veritatis explicabo quia est.",
            "category": "Romper",
            "default_price": "895.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37669,
            "campus": "hr-rfe",
            "name": "Jamison Sweater",
            "slogan": "Autem quasi porro sequi laudantium ducimus.",
            "description": "Est inventore eveniet quo reiciendis dignissimos maxime. Omnis corporis cupiditate autem quo earum non fugit eius. In nihil in dolores.",
            "category": "Sweater",
            "default_price": "372.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37670,
            "campus": "hr-rfe",
            "name": "Dorthy Sunglasses",
            "slogan": "Dicta inventore voluptatem fuga adipisci fugiat dicta rerum eveniet consequuntur.",
            "description": "Dolore tempora eum necessitatibus vitae eum aut impedit nesciunt. Quibusdam fuga sed voluptas quisquam. Delectus omnis et consequatur velit quo voluptatum recusandae. Facilis commodi cum molestiae accusantium inventore mollitia.",
            "category": "Sunglasses",
            "default_price": "463.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37671,
            "campus": "hr-rfe",
            "name": "Megane 1050 Sunglasses",
            "slogan": "Vel sed est molestiae inventore dolor illum laborum doloremque maiores.",
            "description": "Aut ad velit quo. Quas voluptatem magnam at est. Ducimus eos aut velit et facere et. Eaque facere quam molestias dolorem praesentium esse aut.",
            "category": "Sunglasses",
            "default_price": "494.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37672,
            "campus": "hr-rfe",
            "name": "The Makenzie Jacket",
            "slogan": "Sit velit ex asperiores deserunt voluptas sit inventore.",
            "description": "Ad veniam quia architecto quisquam eos ad officiis. Doloribus aut et hic. Id soluta id est. Voluptatum ducimus quia repellat neque neque repellendus rerum nam aut. Assumenda rerum non deserunt esse deleniti quis.",
            "category": "Jacket",
            "default_price": "302.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37673,
            "campus": "hr-rfe",
            "name": "Keely Hoodie",
            "slogan": "Voluptates temporibus aut dolor aut velit officia eius est.",
            "description": "Consectetur dolores nisi et id reprehenderit ut qui quisquam quia. Voluptatem modi aliquam sed blanditiis. Harum ab voluptate quasi natus aut quisquam ipsum.",
            "category": "Hoodie",
            "default_price": "646.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37674,
            "campus": "hr-rfe",
            "name": "Brayan Heels",
            "slogan": "Qui ipsa consequatur eos dolore laborum.",
            "description": "Sunt quibusdam minus velit nam quasi qui adipisci distinctio facilis. Dolorem omnis itaque fugit. Tempore exercitationem earum facilis.",
            "category": "Heels",
            "default_price": "898.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37675,
            "campus": "hr-rfe",
            "name": "Elvera 1100 Dress",
            "slogan": "Voluptatum commodi unde.",
            "description": "Harum ducimus vero eum rerum et tenetur eum veritatis. Adipisci eius ipsa non. Est dolor sint eum harum laborum omnis doloremque.",
            "category": "Dress",
            "default_price": "200.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37676,
            "campus": "hr-rfe",
            "name": "Beverly Shoes",
            "slogan": "Facilis aut fuga impedit dolores asperiores velit nulla.",
            "description": "Quia et illo repellat ut commodi aspernatur tenetur. Exercitationem optio facilis occaecati soluta. Dolorem asperiores minus nihil.",
            "category": "Shoes",
            "default_price": "260.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37677,
            "campus": "hr-rfe",
            "name": "Elise Backpack",
            "slogan": "Error harum et quo nam nam sed minima eos dolor.",
            "description": "Vero et optio minus eaque quibusdam enim. Perferendis consequuntur maxime aspernatur. Omnis totam sapiente necessitatibus voluptas. Libero dolorum est numquam soluta et excepturi quaerat.",
            "category": "Backpack",
            "default_price": "892.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37678,
            "campus": "hr-rfe",
            "name": "Lon Jacket",
            "slogan": "Veritatis consequuntur est fugiat qui veniam omnis iusto non commodi.",
            "description": "In excepturi pariatur est architecto nihil. Provident error animi. Minima enim dolor enim aut omnis quidem et. Labore ab voluptate occaecati quia magni temporibus id. Magni beatae unde natus est non dolor quo veniam. Voluptatum rerum iusto.",
            "category": "Jacket",
            "default_price": "506.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37679,
            "campus": "hr-rfe",
            "name": "Amber Sweater",
            "slogan": "Quis accusamus ducimus fugiat rerum minima eius.",
            "description": "Eligendi voluptatem asperiores nihil ab et molestiae. Ab numquam dicta sunt repudiandae natus possimus aut rerum et. Non ea atque magni eum suscipit itaque aut cupiditate est. Debitis aut sit ut magnam minima quia. Saepe quae qui et voluptatem.",
            "category": "Sweater",
            "default_price": "981.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37680,
            "campus": "hr-rfe",
            "name": "Edgardo Trousers",
            "slogan": "Officiis voluptate ea.",
            "description": "Consequatur beatae odit temporibus ex. Minima molestiae placeat quia quia aspernatur voluptatem. Eum repellendus sapiente beatae. Ut impedit sit et officiis vitae. Id occaecati aliquam repudiandae inventore ipsam omnis voluptate.",
            "category": "Trousers",
            "default_price": "328.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37681,
            "campus": "hr-rfe",
            "name": "Marty 1400 Hat",
            "slogan": "Architecto odit aliquid qui ut laboriosam qui vitae nobis.",
            "description": "Asperiores minima dolor ut ut repudiandae. Voluptates et expedita perspiciatis facilis voluptas voluptatem optio. Non quae aut quo et ut rem error doloribus placeat. Dolorem vel impedit ea perferendis ut accusantium nisi suscipit.",
            "category": "Hat",
            "default_price": "286.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37682,
            "campus": "hr-rfe",
            "name": "Cletus Shirt",
            "slogan": "Beatae tempora at accusamus reiciendis.",
            "description": "Ea tempore quis commodi earum. Sit sed quo illo. Rerum quaerat optio nemo praesentium labore eaque. Aliquid ipsam dolorum vitae. Quia modi est ut. Possimus ut dolores doloribus enim repellendus eveniet temporibus maxime.",
            "category": "Shirt",
            "default_price": "622.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37683,
            "campus": "hr-rfe",
            "name": "Alysha Shirt",
            "slogan": "Provident quas omnis alias corporis voluptatem vitae praesentium ea.",
            "description": "Eos nostrum fuga ut ut dolor earum consequatur sit velit. Inventore possimus fugit laboriosam. Qui qui ut sit at dolores provident nihil. Similique eligendi recusandae consequatur rerum beatae. Qui officia similique sit quaerat porro ex quam vero ea. Animi sed rerum facere quam voluptas voluptatibus.",
            "category": "Shirt",
            "default_price": "373.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37684,
            "campus": "hr-rfe",
            "name": "Aurelie Slacks",
            "slogan": "Quae enim odio eaque non aliquam.",
            "description": "Rerum sit qui autem reiciendis et dolor aut. Nesciunt ullam reiciendis. Veniam enim ut ab porro. Eum voluptatem aut ipsam. Et ut ab voluptatibus ut rerum rerum quasi accusantium quis. Quis nobis est nesciunt voluptatem consequatur et pariatur.",
            "category": "Slacks",
            "default_price": "598.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37685,
            "campus": "hr-rfe",
            "name": "Earline Heels",
            "slogan": "Dolores consequatur sit in cum.",
            "description": "Aperiam autem occaecati sapiente at quo velit. Corrupti culpa dolores. Eaque eaque velit modi ea repellendus a. Quia exercitationem reprehenderit.",
            "category": "Heels",
            "default_price": "545.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37686,
            "campus": "hr-rfe",
            "name": "Cody Shoes",
            "slogan": "Voluptatem qui rerum sunt impedit quasi.",
            "description": "Est commodi doloribus velit ipsa ipsam dolor voluptates et. Assumenda sed dolorem itaque iste id. Ut hic sed reprehenderit eius explicabo est provident similique. Sit doloremque laborum. Non deleniti sit quis delectus.",
            "category": "Shoes",
            "default_price": "418.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37687,
            "campus": "hr-rfe",
            "name": "Madelynn Sweater",
            "slogan": "Consequatur iure perspiciatis.",
            "description": "Reiciendis aut qui mollitia voluptas voluptas nihil. Et eligendi expedita explicabo sit illo qui sit. Est sit aliquam eum similique. Nesciunt veniam est non praesentium ducimus aliquid architecto. Placeat id distinctio vel quasi quo sed. Fugiat et vel ullam reprehenderit possimus omnis.",
            "category": "Sweater",
            "default_price": "481.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37688,
            "campus": "hr-rfe",
            "name": "Sonny Cap",
            "slogan": "Voluptas ratione cupiditate quia saepe.",
            "description": "Animi excepturi aut expedita. Non iste minus. Omnis vero culpa qui et dolorum voluptatum est porro qui. Consequatur consequatur sint officiis voluptatem ducimus.",
            "category": "Cap",
            "default_price": "976.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37689,
            "campus": "hr-rfe",
            "name": "Gwendolyn 900 Sweatpants",
            "slogan": "Sint est in officiis quae et repellendus sit.",
            "description": "Et quaerat at illo harum sed aliquam veniam quibusdam et. Repudiandae et cumque sint pariatur. Et dolorum quod mollitia odit odit vero ab cumque reprehenderit. Ratione nostrum aut temporibus et.",
            "category": "Sweatpants",
            "default_price": "52.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37690,
            "campus": "hr-rfe",
            "name": "Korey Coat",
            "slogan": "Vero eum vel temporibus rem officiis.",
            "description": "Cumque rerum qui delectus rerum deleniti et facilis. Quidem laborum autem vero nisi. Libero eius rerum quo ut exercitationem nemo numquam.",
            "category": "Coat",
            "default_price": "415.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37691,
            "campus": "hr-rfe",
            "name": "Drake 50 Romper",
            "slogan": "Eligendi accusamus eos placeat voluptas adipisci nulla tempore.",
            "description": "Vel cupiditate ut velit possimus et. Est accusantium eius. Placeat odio tempore aut eos. Vitae facilis laudantium tenetur at quidem odit. Ea fugit facere repellendus ullam rem aliquam. Aut velit quas sunt veritatis aut reiciendis.",
            "category": "Romper",
            "default_price": "391.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37692,
            "campus": "hr-rfe",
            "name": "Carolyne Sunglasses",
            "slogan": "A reiciendis consequuntur non vel consequatur.",
            "description": "Aut asperiores voluptatem et blanditiis iusto dignissimos voluptate et. Omnis assumenda aut dolores ad sapiente vitae id odit. Sunt et ea necessitatibus qui fugit. Ratione et pariatur. Perferendis voluptatem assumenda omnis quo.",
            "category": "Sunglasses",
            "default_price": "532.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37693,
            "campus": "hr-rfe",
            "name": "The Toni Hat",
            "slogan": "Velit non aperiam cumque molestiae quisquam omnis sit corrupti ut.",
            "description": "Aperiam consectetur eos voluptatem sit velit sint nemo est omnis. Consequatur qui id molestiae minima consequatur. Labore quia quis ut velit molestiae ullam et quam. Eius est atque fugit aspernatur ab in non.",
            "category": "Hat",
            "default_price": "628.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37694,
            "campus": "hr-rfe",
            "name": "Oma Pants",
            "slogan": "Itaque aut non voluptas aliquid voluptas.",
            "description": "Ut maxime odio ratione esse recusandae facere rerum. Architecto eveniet quo dicta quasi corrupti esse. Quia voluptate quisquam eos est odio.",
            "category": "Pants",
            "default_price": "261.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37695,
            "campus": "hr-rfe",
            "name": "Margarette Shirt",
            "slogan": "Veniam sapiente qui maiores vero.",
            "description": "Sed nemo itaque enim non necessitatibus perspiciatis et. Officiis in pariatur officiis aperiam sint alias eaque. Nisi qui delectus. Voluptatibus veniam aut tenetur quo atque quo accusamus nobis.",
            "category": "Shirt",
            "default_price": "478.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37696,
            "campus": "hr-rfe",
            "name": "Royal Tank Top",
            "slogan": "Ut illo quis et id.",
            "description": "Natus distinctio exercitationem dolor et consequuntur voluptas aut. Accusantium voluptates et quis iure qui vel et. Est asperiores maiores. Voluptas illum sed ea ad sed facilis molestiae dolores. Eius aliquam cumque exercitationem.",
            "category": "Tank Top",
            "default_price": "835.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37697,
            "campus": "hr-rfe",
            "name": "Chris Sweatpants",
            "slogan": "Rem non quia cum nisi quis at labore.",
            "description": "Fugit quo blanditiis sunt possimus consequuntur minima et tempora. Velit dolores molestiae adipisci vel autem aperiam. Voluptate eligendi adipisci modi rerum nihil architecto est iusto.",
            "category": "Sweatpants",
            "default_price": "704.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37698,
            "campus": "hr-rfe",
            "name": "The Vince Socks",
            "slogan": "Omnis tenetur aut consequuntur saepe unde adipisci ducimus dolorem.",
            "description": "Fugit magni optio quia cum sed sunt eius sint. Excepturi quis repudiandae. Quaerat molestiae consequatur aut veritatis. Dolorem optio vero dolores quis ratione maxime.",
            "category": "Socks",
            "default_price": "603.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37699,
            "campus": "hr-rfe",
            "name": "Edgardo Suit",
            "slogan": "Quidem quasi et vel.",
            "description": "Incidunt molestias distinctio et ipsa. Perspiciatis aut consectetur expedita ullam quasi aperiam voluptas. Soluta praesentium omnis. Nulla adipisci ipsum velit numquam. Dolor magni esse molestiae.",
            "category": "Suit",
            "default_price": "793.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37700,
            "campus": "hr-rfe",
            "name": "Vallie Hat",
            "slogan": "Aperiam ratione at illum dolore unde et et deleniti praesentium.",
            "description": "Ut et beatae. Ut deleniti perferendis ea sed eveniet ea dignissimos. Harum vel maxime voluptatem facilis cumque qui quaerat eaque doloribus. In autem voluptas. Aut vel in pariatur velit nesciunt enim numquam quia totam.",
            "category": "Hat",
            "default_price": "141.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37701,
            "campus": "hr-rfe",
            "name": "Elenor Hat",
            "slogan": "Provident dolorem repudiandae et consequatur repellendus sed natus.",
            "description": "Est reprehenderit accusantium eum voluptatem suscipit. Quo est et tempore dolor non odio. Labore voluptas facere. Nihil qui non. Pariatur dolor beatae earum.",
            "category": "Hat",
            "default_price": "850.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37702,
            "campus": "hr-rfe",
            "name": "Claud Pants",
            "slogan": "Omnis numquam eum ex excepturi omnis ipsa.",
            "description": "Minima corrupti quos eius voluptas. Eos aperiam quod quos. Ullam quia eius iure nulla vel veniam rerum. Tempore illum modi excepturi perferendis impedit eos. Aperiam quo id repellendus dolor quibusdam modi tempora unde modi.",
            "category": "Pants",
            "default_price": "535.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37703,
            "campus": "hr-rfe",
            "name": "Chaya Sweatpants",
            "slogan": "Quidem sit praesentium.",
            "description": "Eius aspernatur aut omnis. Debitis facilis laboriosam libero aliquid quibusdam voluptates laborum aliquam. Debitis harum dolorum animi eaque ut saepe. Omnis provident non nobis aut.",
            "category": "Sweatpants",
            "default_price": "183.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37704,
            "campus": "hr-rfe",
            "name": "Matt Trousers",
            "slogan": "Delectus aut molestias.",
            "description": "Perferendis non sit minus porro. Animi alias odit omnis temporibus officiis. Voluptatem sit quo ullam eum.",
            "category": "Trousers",
            "default_price": "364.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37705,
            "campus": "hr-rfe",
            "name": "Aisha Shoes",
            "slogan": "Et odit quibusdam.",
            "description": "Temporibus adipisci nihil laboriosam repellendus. Atque ea et delectus error veniam. Eum optio ut unde molestias tempora. Adipisci illo dignissimos est. Voluptatem error dolorum in consequuntur provident autem quia doloribus.",
            "category": "Shoes",
            "default_price": "379.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37706,
            "campus": "hr-rfe",
            "name": "Dulce Shirt",
            "slogan": "Eveniet deserunt ex harum est non soluta minus et.",
            "description": "Nihil facere minima natus. Commodi et suscipit tempore est. Vitae corrupti in numquam dolorem non. Eum necessitatibus sunt in. Enim vitae minus excepturi. Consequuntur sed accusamus id perspiciatis iure id repellendus.",
            "category": "Shirt",
            "default_price": "850.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37707,
            "campus": "hr-rfe",
            "name": "Loyce Jacket",
            "slogan": "Consequatur numquam quidem ducimus ipsum architecto ad soluta.",
            "description": "Quo occaecati et et dolor. Tenetur est voluptatem eaque adipisci magni quis eaque. Eius blanditiis ratione et ex iste quidem. Sed laboriosam omnis quia sed voluptatem fugit. Voluptas id sit quod atque sed. Sit tempora error amet aut numquam atque a.",
            "category": "Jacket",
            "default_price": "156.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37708,
            "campus": "hr-rfe",
            "name": "Kellie Hat",
            "slogan": "At sed quas cum necessitatibus.",
            "description": "Minus sit omnis atque natus dolorem possimus. Sit repellendus corrupti totam ducimus labore ullam. Sapiente iste voluptatem.",
            "category": "Hat",
            "default_price": "933.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37709,
            "campus": "hr-rfe",
            "name": "Georgiana Shorts",
            "slogan": "Quae praesentium id ut vel modi quas iste magnam.",
            "description": "Tempora eligendi aut nostrum voluptatem aspernatur ratione est. Voluptas ipsa numquam id suscipit nisi. Minus magni laborum asperiores. Nostrum laboriosam ea suscipit aut aut est odio omnis. Nam rerum dolorem voluptate rerum provident architecto et.",
            "category": "Shorts",
            "default_price": "406.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37710,
            "campus": "hr-rfe",
            "name": "Nicolette Shoes",
            "slogan": "Praesentium recusandae officiis sunt ratione dolorem.",
            "description": "Maiores rem neque repellendus. Quo ut amet cupiditate. Qui voluptas nobis dolorem ratione qui facilis temporibus in enim. Voluptatum quae repellat quasi alias ut iste deserunt. Doloribus vitae et. Ipsam tempora doloribus eos doloribus quo dolores.",
            "category": "Shoes",
            "default_price": "702.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37711,
            "campus": "hr-rfe",
            "name": "Oda 250 Shoes",
            "slogan": "Quasi incidunt voluptate qui maiores nobis voluptatem non quod distinctio.",
            "description": "Reiciendis asperiores perspiciatis consequatur. Vel consectetur harum eius eos autem saepe molestiae magni. Aspernatur dolor ea eligendi voluptas repellendus vero amet. Voluptate quae numquam fugiat nisi dolore velit eveniet cupiditate. Minima perferendis aspernatur quasi et in velit. Illum voluptates hic.",
            "category": "Shoes",
            "default_price": "778.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37712,
            "campus": "hr-rfe",
            "name": "The Mike Skirt",
            "slogan": "Officia natus ut quaerat placeat eaque voluptas dignissimos.",
            "description": "Iusto non voluptas non a id vero aut commodi dolor. Pariatur nihil ipsam est voluptatem non est odit reiciendis sint. Quo cum vel at quia ducimus ut harum facere. Nemo harum eos quae asperiores voluptatem ea non.",
            "category": "Skirt",
            "default_price": "860.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37713,
            "campus": "hr-rfe",
            "name": "Lourdes Dress",
            "slogan": "Est voluptas voluptatibus et eligendi magni in voluptas.",
            "description": "Qui vel veniam. Rerum velit impedit saepe perspiciatis ut impedit rerum accusamus quos. Accusantium qui praesentium. Error et est quos rem. Est ut architecto ipsa asperiores fuga. Porro provident beatae.",
            "category": "Dress",
            "default_price": "568.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37714,
            "campus": "hr-rfe",
            "name": "Cassie Cap",
            "slogan": "Voluptates voluptatum commodi voluptas quidem vel natus repellendus aspernatur.",
            "description": "Eveniet vel nostrum. Reiciendis qui aut et est iure reprehenderit architecto. Similique iste minima officiis. Et labore alias quam. Molestiae cumque perferendis tenetur. Quia dolore vel harum debitis est.",
            "category": "Cap",
            "default_price": "343.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37715,
            "campus": "hr-rfe",
            "name": "Giovanni Sweater",
            "slogan": "Ipsum nesciunt natus consequatur quas consequuntur aut non.",
            "description": "Quis accusamus nulla tempore itaque. Eaque necessitatibus labore architecto ut quis deleniti similique qui dicta. Aut et eius sed ut aut ipsam nisi vel aut. Aut soluta tempora velit sit dignissimos magni officia aliquam cupiditate.",
            "category": "Sweater",
            "default_price": "729.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37716,
            "campus": "hr-rfe",
            "name": "Harrison Romper",
            "slogan": "Culpa beatae eum et dolores eius minima vitae facere quidem.",
            "description": "Saepe sed exercitationem est. Rerum veniam cum. Quo accusamus eligendi iste et non.",
            "category": "Romper",
            "default_price": "481.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37717,
            "campus": "hr-rfe",
            "name": "Jarret Sweatpants",
            "slogan": "Unde enim dolorum quod ut aliquam.",
            "description": "Aspernatur est ullam dolor quae. Et ea fugit voluptas consequuntur quo qui deserunt et voluptatum. Voluptates alias facere. Quis et voluptas et minus blanditiis facilis. Temporibus sit excepturi laborum omnis consequatur provident earum. Necessitatibus quasi cum dolores sed.",
            "category": "Sweatpants",
            "default_price": "663.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37718,
            "campus": "hr-rfe",
            "name": "Mckenzie Trousers",
            "slogan": "Tempora delectus cum hic ut.",
            "description": "Omnis earum officia debitis est. Voluptas dolor odit nihil est aut sit est unde nulla. Eveniet culpa reprehenderit dolores sed qui harum laborum. Odit a quam aut velit. Nemo ratione doloribus.",
            "category": "Trousers",
            "default_price": "766.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37719,
            "campus": "hr-rfe",
            "name": "The Lucius Dress",
            "slogan": "Sapiente laudantium velit.",
            "description": "Aut suscipit et voluptas et debitis adipisci. Minima et voluptatem. At fugit et architecto delectus expedita esse in qui similique. Esse non omnis culpa magni impedit officia aspernatur quod. Vel est enim earum praesentium omnis dolorum. Voluptatum ullam hic natus soluta eligendi est et distinctio qui.",
            "category": "Dress",
            "default_price": "309.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37720,
            "campus": "hr-rfe",
            "name": "Andy Trousers",
            "slogan": "Ut et ipsam rem et dolore exercitationem magni eum quasi.",
            "description": "Est non accusamus minima et pariatur. Rem quidem voluptate. Porro in consequatur voluptatibus libero est sit provident. Officiis at labore nihil unde. Aut eum maiores temporibus et animi autem eaque vero ad. Occaecati a repudiandae dolorum molestiae nihil.",
            "category": "Trousers",
            "default_price": "534.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37721,
            "campus": "hr-rfe",
            "name": "Sanford Trousers",
            "slogan": "Rerum dicta eaque iste magnam error non.",
            "description": "Voluptatem dolorem et. Reprehenderit quam aut laudantium eos enim itaque iste. Voluptatem laudantium ut. Pariatur architecto velit est mollitia et.",
            "category": "Trousers",
            "default_price": "831.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37722,
            "campus": "hr-rfe",
            "name": "Cory Jacket",
            "slogan": "Magnam sapiente est.",
            "description": "Aut quis quam repellendus. Qui voluptas perferendis. Suscipit in corrupti quas aut tenetur et enim id minus. Harum voluptas fuga aut officiis earum fugit eos commodi.",
            "category": "Jacket",
            "default_price": "376.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37723,
            "campus": "hr-rfe",
            "name": "Bernie 50 Shoes",
            "slogan": "Tempore laudantium autem qui.",
            "description": "Ea aut blanditiis non in molestiae accusantium. Corporis dolorum sint et nemo voluptates. Dolores et ipsa et aut tempore id voluptas molestias. Ut aut ex facere eveniet numquam excepturi. Corrupti cupiditate tenetur eum harum. Ut non et nemo necessitatibus iure voluptates placeat consequatur impedit.",
            "category": "Shoes",
            "default_price": "391.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37724,
            "campus": "hr-rfe",
            "name": "Donnie Hoodie",
            "slogan": "Labore earum vitae aspernatur qui at earum eum doloremque culpa.",
            "description": "Aut officia numquam aut molestias consequatur. Inventore rerum soluta ipsa incidunt natus fugit. Fugit vitae tempora corporis non id vero.",
            "category": "Hoodie",
            "default_price": "676.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37725,
            "campus": "hr-rfe",
            "name": "Kirstin Shorts",
            "slogan": "Occaecati autem aut.",
            "description": "Qui recusandae adipisci sequi beatae modi molestiae. Unde nihil adipisci ad velit. Cupiditate quaerat a qui sed aut sit et non officia. Velit porro deserunt quis excepturi. Itaque nisi et ipsa culpa nostrum harum quo.",
            "category": "Shorts",
            "default_price": "577.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37726,
            "campus": "hr-rfe",
            "name": "Michael 550 Shoes",
            "slogan": "Et voluptas omnis fuga ea inventore.",
            "description": "Perferendis dolorum qui architecto sit quod. Neque magni facilis aut enim ut minus facilis. Et deserunt minus quia officiis eligendi ea aliquid. Quis ut adipisci blanditiis praesentium dolor assumenda. Nostrum sit voluptates dolorem in perspiciatis culpa et officiis. Dolore dolores quasi porro quasi.",
            "category": "Shoes",
            "default_price": "950.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37727,
            "campus": "hr-rfe",
            "name": "Kathleen Jacket",
            "slogan": "Ut perferendis impedit et sunt tempore facilis sit eligendi.",
            "description": "Nemo id itaque non error non et est aliquam. Culpa aut reiciendis enim accusantium atque et dignissimos. Ex dolore numquam suscipit libero culpa aut aliquam quis.",
            "category": "Jacket",
            "default_price": "267.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37728,
            "campus": "hr-rfe",
            "name": "Brandt Romper",
            "slogan": "Officiis omnis et inventore amet fuga commodi.",
            "description": "Libero perferendis error et amet vero est. Aliquid molestias qui adipisci. Ipsa tenetur molestiae vitae. Et quis fugiat iure excepturi velit sunt et unde tenetur.",
            "category": "Romper",
            "default_price": "761.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37729,
            "campus": "hr-rfe",
            "name": "Rolando Romper",
            "slogan": "Autem quae vitae adipisci voluptates ut laborum est ut qui.",
            "description": "Voluptatem voluptas aut iusto voluptas neque quia. Illo voluptatem enim eius. Asperiores sed sed. Aut et molestiae quaerat illo. Illum et repudiandae error molestias quaerat.",
            "category": "Romper",
            "default_price": "938.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37730,
            "campus": "hr-rfe",
            "name": "Laura Shirt",
            "slogan": "Similique aspernatur voluptas quod est rerum voluptatem cupiditate sit.",
            "description": "Quia non aut ea fuga est ipsam qui quia saepe. Voluptate suscipit facere natus odio facilis autem quis assumenda quos. Velit asperiores quis iure magnam nesciunt. Rem necessitatibus non quae error sit impedit eligendi. Facilis pariatur ullam nihil consequuntur. Fugit dolore perferendis minus enim et vitae nostrum soluta.",
            "category": "Shirt",
            "default_price": "917.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37731,
            "campus": "hr-rfe",
            "name": "Jeffery Jacket",
            "slogan": "Neque vero in non voluptatem beatae veniam aut est veniam.",
            "description": "Repudiandae voluptatem amet aut perferendis corporis et itaque. Corporis eius ea animi odio. Ut iusto et aspernatur. Assumenda ipsum sit sunt. Necessitatibus veniam eos quos.",
            "category": "Jacket",
            "default_price": "337.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37732,
            "campus": "hr-rfe",
            "name": "Lazaro Dress",
            "slogan": "Ut at culpa quam.",
            "description": "Architecto maxime dolore sapiente et eaque magnam aperiam corrupti et. Ullam rerum sit impedit repellendus aut illum similique sit. Consequatur at et. Nostrum voluptatibus sed repellat voluptatem harum nam. Dolores nulla quas quod voluptatem ex eum quas corporis quam.",
            "category": "Dress",
            "default_price": "363.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37733,
            "campus": "hr-rfe",
            "name": "Geovanni Backpack",
            "slogan": "Ut voluptatem quisquam aut rerum est.",
            "description": "Omnis quibusdam aut a perspiciatis nisi accusamus iusto et. Illum vel dolor ut aut voluptatem repudiandae error et. Nam ea nemo qui ea perferendis magni omnis voluptas. Enim corporis consequuntur veniam ea quaerat sit. Consequatur minus quas eum in.",
            "category": "Backpack",
            "default_price": "474.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37734,
            "campus": "hr-rfe",
            "name": "Percival Socks",
            "slogan": "Ullam repellat adipisci eos.",
            "description": "Ex voluptate voluptatem. Maxime incidunt commodi quod similique eligendi molestiae omnis libero quam. Aut tempora aut pariatur tempora et necessitatibus officia possimus. Ut incidunt dicta qui.",
            "category": "Socks",
            "default_price": "917.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37735,
            "campus": "hr-rfe",
            "name": "Deion Shorts",
            "slogan": "Nobis quisquam optio reiciendis quia.",
            "description": "Quia corporis maxime veniam ut consequatur. Sit labore rem pariatur officia nihil. Ipsum commodi in ad eos dignissimos.",
            "category": "Shorts",
            "default_price": "172.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37736,
            "campus": "hr-rfe",
            "name": "Kamren Sunglasses",
            "slogan": "Nihil iusto soluta laudantium porro nisi tempore blanditiis.",
            "description": "Tempora harum reprehenderit enim excepturi quis. Maiores qui atque unde rem veniam illum voluptatem consequatur. Dolor labore veniam fugiat iusto. Deserunt sequi aut. Voluptas reiciendis ullam.",
            "category": "Sunglasses",
            "default_price": "4.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37737,
            "campus": "hr-rfe",
            "name": "Royce Shoes",
            "slogan": "Est assumenda omnis quisquam et autem.",
            "description": "Voluptatem architecto sed voluptatibus quia asperiores corrupti. Ut ab voluptatem. Aliquam recusandae voluptates tenetur quos.",
            "category": "Shoes",
            "default_price": "213.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37738,
            "campus": "hr-rfe",
            "name": "Kade Pants",
            "slogan": "Voluptas corporis natus esse aperiam ullam eum aut explicabo delectus.",
            "description": "Consequuntur assumenda voluptas enim et repellat. Perspiciatis dolorem quo qui delectus id ducimus eum veniam. Laudantium a dolores est quisquam libero quod et expedita facere. Officiis iusto iusto autem aut vitae laborum nesciunt voluptas itaque. Aliquid voluptatem modi et architecto facilis.",
            "category": "Pants",
            "default_price": "502.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37739,
            "campus": "hr-rfe",
            "name": "Daniella 1050 Jacket",
            "slogan": "Mollitia saepe et nesciunt possimus ea voluptates.",
            "description": "Placeat et ut magnam. Consequatur ab labore tempore voluptatibus reprehenderit ut et. Dolorem repudiandae repellendus totam delectus ea nostrum et.",
            "category": "Jacket",
            "default_price": "311.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37740,
            "campus": "hr-rfe",
            "name": "Queenie 450 Trousers",
            "slogan": "Sit eius sunt et.",
            "description": "Mollitia quia quae nulla similique ut quidem cupiditate. Dicta est saepe in et necessitatibus voluptates. Porro cum quaerat sed corrupti.",
            "category": "Trousers",
            "default_price": "477.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37741,
            "campus": "hr-rfe",
            "name": "Nikko Boots",
            "slogan": "Veniam enim ut sed illum ad eaque ut.",
            "description": "Qui iusto dolor aliquid deleniti velit nihil. Modi dignissimos officiis aut sunt ea id vero. Commodi consequatur qui animi quia labore velit omnis. Aut ad cum rerum.",
            "category": "Boots",
            "default_price": "889.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37742,
            "campus": "hr-rfe",
            "name": "The Jensen Hat",
            "slogan": "Doloremque ea deserunt aliquam.",
            "description": "Id aut fuga sint sed doloribus. Quia quae omnis qui. Ut mollitia quia consectetur officia et sint.",
            "category": "Hat",
            "default_price": "69.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37743,
            "campus": "hr-rfe",
            "name": "Easton Heels",
            "slogan": "Et quis dolores voluptatibus nostrum.",
            "description": "Doloremque blanditiis in praesentium incidunt rerum doloremque beatae facilis ea. Accusamus porro voluptates. Sapiente quo omnis non molestiae eum vero id. Tenetur praesentium corrupti totam soluta. Ea placeat libero repellat autem reprehenderit.",
            "category": "Heels",
            "default_price": "925.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37744,
            "campus": "hr-rfe",
            "name": "Domenic Hat",
            "slogan": "Culpa et a cumque eligendi praesentium nobis velit accusamus amet.",
            "description": "Accusantium voluptatum beatae quae libero in voluptatem et. Quis soluta quisquam dolor id sint. Debitis est eveniet doloribus explicabo provident sequi dolor quo.",
            "category": "Hat",
            "default_price": "351.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37745,
            "campus": "hr-rfe",
            "name": "Audreanne Heels",
            "slogan": "Consequuntur error rerum molestiae facere laboriosam sequi sunt vel.",
            "description": "Sed quas dolorum. Doloribus aut cum et cum asperiores corrupti vero. Illo dignissimos inventore eos. Numquam sint voluptatem consequatur explicabo ducimus. Iste sed nemo. Aliquid eveniet est quis cupiditate voluptatem officiis quo laboriosam provident.",
            "category": "Heels",
            "default_price": "667.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37746,
            "campus": "hr-rfe",
            "name": "Sonia Slacks",
            "slogan": "Debitis sit sit qui quisquam ab enim officiis in.",
            "description": "Tenetur magnam labore quisquam repudiandae aliquid. Soluta sint vel possimus quam tempora. Quas similique illum quasi. Consequatur consectetur quo voluptas. Molestias inventore cum. Consequatur praesentium eum tempore.",
            "category": "Slacks",
            "default_price": "71.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37747,
            "campus": "hr-rfe",
            "name": "The Audrey Romper",
            "slogan": "Occaecati unde officia ducimus et a voluptatem.",
            "description": "Autem veniam quibusdam veniam consequatur. Veritatis velit qui. Est autem odit accusamus sit voluptatem est quia eum repellendus. Qui vero in ut atque voluptatum sint cum voluptatem. Labore ea quibusdam nam ipsum et perspiciatis.",
            "category": "Romper",
            "default_price": "191.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37748,
            "campus": "hr-rfe",
            "name": "Brycen Trousers",
            "slogan": "Soluta in dolor expedita incidunt nobis id.",
            "description": "Quae cupiditate autem facilis molestiae error cupiditate laudantium omnis assumenda. Eum vel vel at illum quia sunt itaque et. Sit qui quibusdam id ea aspernatur eos ut odit voluptatibus. Qui voluptatem natus sunt.",
            "category": "Trousers",
            "default_price": "159.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37749,
            "campus": "hr-rfe",
            "name": "Christ Trousers",
            "slogan": "Omnis aliquid expedita vel magni.",
            "description": "Consequatur sint laborum ut magni sunt vero molestias qui. Distinctio velit earum cumque. Similique quae repellendus qui dolores pariatur asperiores.",
            "category": "Trousers",
            "default_price": "92.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37750,
            "campus": "hr-rfe",
            "name": "Arielle Boots",
            "slogan": "Ex error ut vel.",
            "description": "Vero dicta amet dolore incidunt harum. Est accusamus nesciunt suscipit quia rem illo est eaque rem. Asperiores officiis ex officia et aut est.",
            "category": "Boots",
            "default_price": "697.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37751,
            "campus": "hr-rfe",
            "name": "Gideon Boots",
            "slogan": "Illo exercitationem porro voluptate distinctio totam.",
            "description": "Ut itaque voluptatem dolor sed eum exercitationem. Minima et ducimus ut expedita. Libero nemo adipisci.",
            "category": "Boots",
            "default_price": "280.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37752,
            "campus": "hr-rfe",
            "name": "Colten Shorts",
            "slogan": "Cumque expedita enim.",
            "description": "Officiis voluptatem et quo suscipit non quis. Dolore delectus omnis ratione vel et dignissimos voluptates. Officia aperiam unde et. Consectetur dolor nulla mollitia. Commodi vero qui.",
            "category": "Shorts",
            "default_price": "916.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37753,
            "campus": "hr-rfe",
            "name": "Allison Coat",
            "slogan": "Qui optio sequi atque odio et rerum dolores.",
            "description": "Repellendus asperiores quam et laudantium et modi rem consectetur dolor. Consequuntur sunt dolore sit sint animi laudantium. Est occaecati quis ipsum asperiores deserunt eius cum facere sint.",
            "category": "Coat",
            "default_price": "398.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37754,
            "campus": "hr-rfe",
            "name": "Sedrick 1500 Shoes",
            "slogan": "Quia natus tempora hic nam distinctio vero deserunt et.",
            "description": "Quia officia dicta quis. Unde aliquid laboriosam id et vero autem ut. Optio rerum quia pariatur ut eum voluptate dolores non. Aperiam et rerum in quos voluptates commodi voluptatem ea. Consequuntur enim voluptas.",
            "category": "Shoes",
            "default_price": "673.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37755,
            "campus": "hr-rfe",
            "name": "Jedediah Shoes",
            "slogan": "Ut error qui sunt laborum deleniti omnis ipsam.",
            "description": "Officiis qui ut impedit ut sequi architecto vero soluta eveniet. Nihil voluptatem repellat. Sed magni dolorem. Earum optio est excepturi est nam accusamus omnis eligendi iure. Aliquid eligendi deserunt hic.",
            "category": "Shoes",
            "default_price": "549.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37756,
            "campus": "hr-rfe",
            "name": "Adelia Socks",
            "slogan": "Exercitationem provident soluta amet est repellat saepe.",
            "description": "Placeat quis aut. Voluptate laboriosam ut rem est et animi. Nihil et eius. Libero architecto quod asperiores temporibus nisi facilis et. Quisquam occaecati inventore voluptatem exercitationem hic. Molestias voluptatem asperiores voluptas cum repudiandae.",
            "category": "Socks",
            "default_price": "794.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37757,
            "campus": "hr-rfe",
            "name": "The Isaias Cap",
            "slogan": "Nisi ullam reiciendis aut et qui vel voluptatem.",
            "description": "Hic iure dignissimos facilis accusamus sunt vel numquam dolorum omnis. Et quia eos dolore saepe odio amet cum. Sint quod beatae deserunt vero exercitationem eum explicabo vitae error. Quam molestiae animi. Voluptatem molestiae quos ut harum in quia magnam ullam nisi.",
            "category": "Cap",
            "default_price": "604.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37758,
            "campus": "hr-rfe",
            "name": "Imelda Trousers",
            "slogan": "Tenetur soluta delectus ut beatae.",
            "description": "Officia laboriosam sed quam vero dignissimos. Voluptatem quos maxime molestiae est et suscipit. Autem ad expedita id occaecati et dolore omnis sit dolores.",
            "category": "Trousers",
            "default_price": "198.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37759,
            "campus": "hr-rfe",
            "name": "Reva Tank Top",
            "slogan": "Ratione aut cumque voluptatem corrupti.",
            "description": "Saepe molestiae quisquam. Repudiandae architecto eum tempora eligendi et est repellat. Et deleniti voluptatibus earum recusandae ut deleniti. Aut qui voluptas in blanditiis.",
            "category": "Tank Top",
            "default_price": "203.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37760,
            "campus": "hr-rfe",
            "name": "Maynard Skirt",
            "slogan": "Sit doloremque fugit repellat ipsa.",
            "description": "Laborum ea amet ullam. Dolor eius omnis facilis non id quas sed consequatur. Quia est in reiciendis labore alias enim quam autem rem.",
            "category": "Skirt",
            "default_price": "137.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37761,
            "campus": "hr-rfe",
            "name": "Adriana Shoes",
            "slogan": "Eos adipisci voluptatum architecto quibusdam.",
            "description": "Consequatur dolores asperiores officiis vitae. Minima iure impedit nobis cumque. Nobis aut nam. Maiores ullam sapiente earum repudiandae minus quisquam. Doloribus incidunt voluptas magnam odio nesciunt sapiente.",
            "category": "Shoes",
            "default_price": "589.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37762,
            "campus": "hr-rfe",
            "name": "Connie Heels",
            "slogan": "Eos exercitationem occaecati animi qui consequatur.",
            "description": "Necessitatibus quae deleniti. Exercitationem consequuntur aspernatur sint ut praesentium similique vel itaque beatae. Iure aperiam dolore omnis blanditiis molestias dolorum occaecati enim assumenda. Hic alias magni. Voluptatem ullam cum quidem optio quia.",
            "category": "Heels",
            "default_price": "626.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37763,
            "campus": "hr-rfe",
            "name": "Talon Suit",
            "slogan": "Consequatur fuga sunt est eos fugit qui dolor consequatur.",
            "description": "Sed debitis autem sunt et quas fugiat et ut voluptas. In nisi omnis ducimus ratione iusto modi laborum. Natus dolor impedit ducimus ratione ducimus ratione. Sint similique sint quia dolorem aspernatur consequatur odio non. Accusantium in ea veniam ipsum aspernatur ducimus dolor. Atque distinctio dolorem laborum explicabo.",
            "category": "Suit",
            "default_price": "473.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37764,
            "campus": "hr-rfe",
            "name": "Adeline Shirt",
            "slogan": "Et dolores expedita.",
            "description": "Harum nam id adipisci ea. Iure hic quaerat placeat soluta nulla. Totam aperiam quasi explicabo ut dolores dolorem in fugit. Enim aperiam repudiandae rerum sit in. Et est impedit nihil eos quaerat officia deleniti voluptatibus. Impedit hic sint rem voluptatem nostrum.",
            "category": "Shirt",
            "default_price": "96.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37765,
            "campus": "hr-rfe",
            "name": "Arlene Shoes",
            "slogan": "Beatae ea voluptas voluptas quis ut possimus.",
            "description": "Deleniti id non architecto eius voluptatem recusandae et. Cupiditate nemo iste fugit qui. At molestiae qui. Nihil qui delectus odio et delectus. Officiis consectetur id tenetur aut sunt iusto et maxime sed.",
            "category": "Shoes",
            "default_price": "116.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37766,
            "campus": "hr-rfe",
            "name": "Santa Jacket",
            "slogan": "Ut qui culpa aut.",
            "description": "Aut quidem illum nobis est ut error sed eos facilis. Pariatur vel mollitia. Aperiam numquam soluta eveniet magni non. Et minima et eum blanditiis. Et odio atque. Sit corrupti hic fugiat similique voluptate quibusdam molestiae cumque.",
            "category": "Jacket",
            "default_price": "176.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37767,
            "campus": "hr-rfe",
            "name": "Ramiro 250 Coat",
            "slogan": "Ut consectetur maxime.",
            "description": "A deserunt voluptatibus voluptatem est ut. Recusandae repellendus sed similique sunt ut dolorum voluptatum. Ipsam laboriosam voluptas sed voluptatem nesciunt quo iste. Corporis aspernatur odio ullam similique.",
            "category": "Coat",
            "default_price": "783.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37768,
            "campus": "hr-rfe",
            "name": "Kaya Jacket",
            "slogan": "Quibusdam quis cupiditate dolore.",
            "description": "Hic ut dolorum libero at nostrum. Vitae quia nobis et voluptatem. Illum dicta doloremque nobis magni eveniet. Itaque eos laboriosam et rerum voluptatum sequi a. Ut eius totam asperiores ut cum aliquid dolores voluptas enim. Autem ipsa error beatae fuga molestias corporis odit.",
            "category": "Jacket",
            "default_price": "214.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37769,
            "campus": "hr-rfe",
            "name": "Marlin Socks",
            "slogan": "Rerum qui qui veniam sequi atque modi odio.",
            "description": "In quia ad commodi accusamus et qui iste. Inventore officia tempora adipisci aut consequatur consectetur ut eveniet. Tempora ducimus laboriosam laboriosam molestiae veniam et eos voluptatum at. Qui delectus vel praesentium et est aperiam.",
            "category": "Socks",
            "default_price": "401.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37770,
            "campus": "hr-rfe",
            "name": "The Ethel Boots",
            "slogan": "Neque quod doloribus corrupti nam asperiores maiores et qui.",
            "description": "Repellat tempore aspernatur voluptatem sint omnis est sequi dolore illum. Iusto tenetur laudantium quia necessitatibus. Et quo nihil deleniti non qui officiis in reprehenderit. Porro voluptatem facere exercitationem. Commodi excepturi tempora expedita molestiae assumenda qui aperiam.",
            "category": "Boots",
            "default_price": "458.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37771,
            "campus": "hr-rfe",
            "name": "Joy Hoodie",
            "slogan": "Beatae dolorem occaecati numquam adipisci praesentium pariatur cum.",
            "description": "Id accusamus cupiditate aspernatur exercitationem dolorum. Doloribus in quae. Eos qui aut. Est eum inventore voluptatem consequatur cum. Qui sapiente ab nostrum.",
            "category": "Hoodie",
            "default_price": "267.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37772,
            "campus": "hr-rfe",
            "name": "Phyllis Sunglasses",
            "slogan": "Rerum possimus voluptatem ullam veritatis.",
            "description": "Ut minus minus quo quibusdam autem omnis. Laboriosam qui delectus et commodi cumque id et. Quia expedita sit voluptatem natus quo. Ratione sed sed neque nesciunt vel officia debitis consectetur.",
            "category": "Sunglasses",
            "default_price": "940.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37773,
            "campus": "hr-rfe",
            "name": "Tanya Shoes",
            "slogan": "Voluptatem eos maiores quo possimus accusantium distinctio.",
            "description": "Deserunt ea qui minima harum. Quidem ad nihil sit. Quia maxime ut dolorem. Dolor ipsam et voluptas nulla labore incidunt sit architecto.",
            "category": "Shoes",
            "default_price": "996.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37774,
            "campus": "hr-rfe",
            "name": "Unique Backpack",
            "slogan": "Eos in repellendus et eveniet hic illum laudantium.",
            "description": "Dolorem repellat reiciendis. Et placeat et eos hic pariatur a tempora. Cupiditate ad dolor aut voluptatibus porro sed omnis quia sed. Ducimus et eaque praesentium voluptatem quia ullam occaecati. Repellendus et hic quae voluptas at beatae.",
            "category": "Backpack",
            "default_price": "585.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37775,
            "campus": "hr-rfe",
            "name": "Emmanuel Backpack",
            "slogan": "Doloribus eum ut voluptatem facere sit et tempora aspernatur dolore.",
            "description": "Veritatis et impedit nostrum aut voluptas quo iste recusandae. Occaecati provident qui beatae ullam sed in nihil necessitatibus molestias. Et nihil nobis. Debitis cumque tempore est laudantium vitae possimus consequatur aperiam.",
            "category": "Backpack",
            "default_price": "642.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37776,
            "campus": "hr-rfe",
            "name": "Shayne 1200 Coat",
            "slogan": "Repellendus voluptas et eius ut earum adipisci perspiciatis modi et.",
            "description": "Et officia esse. Aut non totam consequatur atque in. Magni illo iste voluptates quaerat amet dolorem. Ducimus debitis inventore distinctio explicabo saepe accusamus quibusdam esse perspiciatis. Aut sint non omnis consectetur dignissimos omnis modi. Autem perspiciatis hic consequuntur facere assumenda.",
            "category": "Coat",
            "default_price": "249.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37777,
            "campus": "hr-rfe",
            "name": "Kris Pants",
            "slogan": "Esse et repellendus sequi quis voluptates.",
            "description": "Est ea cupiditate nihil cumque at dolores. Culpa consequatur id laboriosam est et sed voluptas nostrum ut. Inventore autem delectus reprehenderit ducimus qui dolores. Reprehenderit quod ipsam sit quia quis incidunt earum. Eos autem quis officiis error.",
            "category": "Pants",
            "default_price": "275.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37778,
            "campus": "hr-rfe",
            "name": "Athena Coat",
            "slogan": "Qui sed voluptatem necessitatibus.",
            "description": "Non doloremque laudantium sit error nihil quia cupiditate. Deleniti minus omnis rerum culpa doloribus. Maiores quas sunt fugiat ad.",
            "category": "Coat",
            "default_price": "39.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37779,
            "campus": "hr-rfe",
            "name": "Nathaniel Hat",
            "slogan": "Quia aut voluptatem sit quae adipisci aliquam officiis qui quia.",
            "description": "Aperiam animi quia sunt ad modi quidem recusandae molestiae. Sapiente repellat est aut. Sed ut nihil qui impedit vitae quod impedit optio ducimus. Possimus esse perspiciatis exercitationem. Non ad aut aspernatur quisquam ipsam in recusandae voluptates.",
            "category": "Hat",
            "default_price": "730.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37780,
            "campus": "hr-rfe",
            "name": "Rubye Romper",
            "slogan": "Temporibus molestiae omnis rem blanditiis accusamus iusto tempore sapiente ut.",
            "description": "Quibusdam deleniti eveniet quaerat dolorem dolor aut. Quaerat autem illo aperiam nostrum aliquam autem fugit accusamus ut. Qui qui excepturi dolor pariatur voluptas. Ullam esse id non labore at aut nam voluptate. Et atque temporibus.",
            "category": "Romper",
            "default_price": "85.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37781,
            "campus": "hr-rfe",
            "name": "Jacinthe Hoodie",
            "slogan": "Et ea veritatis ut debitis ducimus delectus.",
            "description": "Consequatur eum dolor non vel quae numquam soluta velit sapiente. Aut iste velit. Aspernatur sit adipisci nemo. Ut consequuntur a ut illum laudantium eos et.",
            "category": "Hoodie",
            "default_price": "883.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37782,
            "campus": "hr-rfe",
            "name": "Cornelius Skirt",
            "slogan": "Enim ipsam corrupti atque praesentium ut mollitia.",
            "description": "Expedita ipsam animi nulla consectetur architecto. Blanditiis doloribus accusantium fugit debitis expedita voluptate cumque sint necessitatibus. Nesciunt dolores sed alias vel saepe.",
            "category": "Skirt",
            "default_price": "753.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37783,
            "campus": "hr-rfe",
            "name": "Rocio Jacket",
            "slogan": "Ipsam provident aut voluptatem non et.",
            "description": "Aliquam eos dicta et voluptatem rerum omnis suscipit ratione dolores. Quae fuga qui incidunt eius laborum. Et fuga non repellat rem quia rerum soluta et. Ut quasi ut ut. Dicta id cumque est laudantium.",
            "category": "Jacket",
            "default_price": "394.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37784,
            "campus": "hr-rfe",
            "name": "Herminio Romper",
            "slogan": "Odio enim quis.",
            "description": "Culpa nulla corrupti molestiae. Quidem laudantium nulla ab neque perferendis nihil temporibus similique ipsam. Porro vero architecto ut qui nisi. Tempore vel illum voluptatem. Eum voluptatem doloribus est hic omnis qui eaque magnam consectetur. Exercitationem cumque qui beatae enim adipisci qui optio rerum.",
            "category": "Romper",
            "default_price": "702.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37785,
            "campus": "hr-rfe",
            "name": "Dawson Sunglasses",
            "slogan": "Perspiciatis nemo recusandae perspiciatis error sed nesciunt quisquam.",
            "description": "Qui tempora sit possimus impedit aut enim odio ut. Expedita quo accusamus hic. At nam quis nobis minus autem sed at dolores. Ullam voluptate quis consequuntur quae. Aperiam laboriosam iusto ut dolores itaque neque. Sed doloribus beatae consequatur dolor expedita sunt.",
            "category": "Sunglasses",
            "default_price": "692.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37786,
            "campus": "hr-rfe",
            "name": "Amaya Sweater",
            "slogan": "Dolore eum aut.",
            "description": "Consequatur odio dolor velit quam sapiente quod. Quia aliquam odio excepturi non. Incidunt velit mollitia qui reprehenderit ut at minima. Ad culpa consequatur sint eligendi ab aut illum accusamus fuga. Esse distinctio voluptas dignissimos magnam doloremque recusandae tenetur. Mollitia qui iusto id explicabo.",
            "category": "Sweater",
            "default_price": "381.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37787,
            "campus": "hr-rfe",
            "name": "Glenna Shirt",
            "slogan": "Eligendi suscipit inventore eius ex consequatur praesentium reprehenderit.",
            "description": "Dolore velit deleniti eaque. Fugit voluptas quo error hic. Voluptatem nobis voluptatem voluptatem delectus. Eaque labore non distinctio voluptates sed consectetur. Amet unde et quo dolore aliquam impedit architecto. Ipsum minima quis.",
            "category": "Shirt",
            "default_price": "494.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37788,
            "campus": "hr-rfe",
            "name": "Jake Romper",
            "slogan": "Est dolor quis aliquam totam nulla accusantium et.",
            "description": "Qui asperiores id minima maiores in corrupti voluptatibus excepturi. Et reprehenderit eos iste aut officiis voluptas quisquam eum. Et velit qui hic cupiditate tempore commodi. Eaque sed dolorem velit debitis quasi. Enim impedit ut atque quis consequatur.",
            "category": "Romper",
            "default_price": "42.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37789,
            "campus": "hr-rfe",
            "name": "Ludie Suit",
            "slogan": "Qui ut molestiae modi voluptatem temporibus quidem molestias magnam placeat.",
            "description": "Velit reprehenderit velit et earum repellendus ut quo. Et quasi quis magni laboriosam. Sint provident et suscipit rerum.",
            "category": "Suit",
            "default_price": "779.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37790,
            "campus": "hr-rfe",
            "name": "Kurtis Skirt",
            "slogan": "Deserunt saepe aliquam rerum.",
            "description": "Et architecto nemo occaecati qui qui et est est voluptatem. Consequuntur ipsam ex repellendus eaque nostrum ea et dolores. Voluptas iste doloribus magnam optio aut tenetur. Voluptatem consequatur sapiente rem sed optio quam error.",
            "category": "Skirt",
            "default_price": "159.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37791,
            "campus": "hr-rfe",
            "name": "Barney Coat",
            "slogan": "Omnis aut libero quo est consectetur sapiente voluptatibus aspernatur.",
            "description": "Voluptatem vel asperiores occaecati dolorum facilis libero nihil autem sit. Placeat sunt officiis atque ut et voluptatum consectetur nostrum molestiae. Totam dolorem sed nostrum similique. Quaerat voluptas sapiente est iusto. Voluptatum eaque exercitationem omnis harum a.",
            "category": "Coat",
            "default_price": "883.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37792,
            "campus": "hr-rfe",
            "name": "Rico Boots",
            "slogan": "Cumque pariatur dolorum ipsa culpa ex corporis itaque quisquam.",
            "description": "Voluptatem a aut ut molestiae omnis tempora et commodi sit. Et eaque ut. Quia numquam voluptatem repellat debitis veritatis.",
            "category": "Boots",
            "default_price": "555.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37793,
            "campus": "hr-rfe",
            "name": "The Vincenzo Backpack",
            "slogan": "Ex fuga eaque doloribus labore exercitationem aut iusto.",
            "description": "Quaerat culpa possimus. Consequatur eius voluptatibus impedit odio officia inventore adipisci error. Aliquam sapiente modi magnam cupiditate eveniet similique iusto ipsa fuga. Autem nostrum et magni et optio illo enim qui. Dicta debitis hic sit molestiae ut nisi. Asperiores reiciendis sed consequuntur.",
            "category": "Backpack",
            "default_price": "487.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37794,
            "campus": "hr-rfe",
            "name": "Shana Coat",
            "slogan": "Explicabo et et ex ex dicta est.",
            "description": "A unde aut ab. Beatae porro architecto cumque omnis nostrum quas ipsum est. Voluptates numquam ullam quisquam architecto dolorem eius consequatur odit velit. Ad quia ea a ut quidem vero laboriosam cum. Doloribus consequatur a. Cupiditate maxime impedit dolores magni.",
            "category": "Coat",
            "default_price": "863.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37795,
            "campus": "hr-rfe",
            "name": "Reyes Shorts",
            "slogan": "Officia similique sed iusto voluptas eaque velit libero rerum dolor.",
            "description": "Aspernatur ad natus dignissimos aut est ullam expedita quo cum. Deleniti ea quia consectetur omnis explicabo nesciunt. Sequi laborum et sit quo consectetur repellat animi. Et sint consequuntur vel delectus qui sit voluptas sint.",
            "category": "Shorts",
            "default_price": "248.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37796,
            "campus": "hr-rfe",
            "name": "Ezra Jacket",
            "slogan": "Impedit sed eum voluptatem doloribus eius ratione.",
            "description": "Repudiandae aut omnis voluptas a qui cupiditate nisi est delectus. Et est aut nesciunt autem deleniti non eum qui. Ut dolorum exercitationem et corrupti soluta natus sed est. Ut voluptatem iste rerum reprehenderit incidunt veritatis nam maiores. Quisquam optio voluptate.",
            "category": "Jacket",
            "default_price": "680.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37797,
            "campus": "hr-rfe",
            "name": "Imelda Slacks",
            "slogan": "Animi ea beatae aut amet.",
            "description": "Voluptatum reprehenderit at enim blanditiis qui. Aut distinctio et aperiam sed aliquid quasi. Ut est placeat recusandae labore.",
            "category": "Slacks",
            "default_price": "686.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37798,
            "campus": "hr-rfe",
            "name": "Leonie Shorts",
            "slogan": "Quia quia reprehenderit eos molestiae enim illum voluptates tempora.",
            "description": "Quia nostrum nostrum. Eos culpa sit hic est dolor. Et dolore sed officia id.",
            "category": "Shorts",
            "default_price": "393.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37799,
            "campus": "hr-rfe",
            "name": "Augustus Hat",
            "slogan": "Assumenda aspernatur ipsum in molestiae soluta iste quidem.",
            "description": "Fugit ut in omnis expedita. Ea quos voluptatem distinctio sed culpa. Aspernatur et vel reiciendis sit aut. Est amet temporibus error soluta autem repudiandae eos.",
            "category": "Hat",
            "default_price": "428.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37800,
            "campus": "hr-rfe",
            "name": "Judson Skirt",
            "slogan": "Doloribus libero eaque provident architecto cum omnis.",
            "description": "Voluptatem reprehenderit culpa ut nam dolorum consequatur beatae et. Voluptatem dolorem laudantium deleniti explicabo at tenetur corporis reprehenderit. Et et quam veritatis aut ut enim eos aperiam.",
            "category": "Skirt",
            "default_price": "570.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37801,
            "campus": "hr-rfe",
            "name": "Melisa 1000 Backpack",
            "slogan": "In ea ullam a fugit quasi quidem.",
            "description": "Aut voluptatum voluptates ea voluptatibus id non. Ut voluptatem ducimus ipsum. Fugit similique reiciendis veritatis dolores vel officia sint ducimus iusto. Itaque placeat qui laboriosam molestias ipsa culpa sint et.",
            "category": "Backpack",
            "default_price": "906.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37802,
            "campus": "hr-rfe",
            "name": "Maribel Sunglasses",
            "slogan": "Dolores voluptatibus commodi consequatur aut optio aut doloremque consequatur.",
            "description": "Ea quaerat quae corrupti pariatur. Enim repellat sint vel nobis officiis. Dolore eum consequuntur animi voluptates repudiandae. Ut iure tempora. Voluptatum aliquam officiis tempora perspiciatis natus illo. Omnis et rerum aspernatur aut fugit est officiis neque.",
            "category": "Sunglasses",
            "default_price": "716.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37803,
            "campus": "hr-rfe",
            "name": "Johathan 750 Socks",
            "slogan": "Laborum nobis cupiditate facilis consequuntur nisi et excepturi atque.",
            "description": "Libero omnis illo quidem non maiores neque et provident. Libero voluptas sit veritatis. In ab in hic tempora pariatur sunt. Eos veritatis maiores voluptates.",
            "category": "Socks",
            "default_price": "409.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37804,
            "campus": "hr-rfe",
            "name": "Reanna Tank Top",
            "slogan": "Quia qui quo harum necessitatibus quos nemo praesentium repudiandae magni.",
            "description": "Dolor ea velit. Rerum vitae iure expedita velit reprehenderit ut quia molestiae. Modi omnis eligendi iste eius sint nihil blanditiis illo. Numquam quis aspernatur.",
            "category": "Tank Top",
            "default_price": "135.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37805,
            "campus": "hr-rfe",
            "name": "Jody Skirt",
            "slogan": "Non consequuntur aliquid recusandae fugit magnam cumque repellendus nisi labore.",
            "description": "Ea sed et minima eligendi a eveniet quis numquam in. Qui sed aperiam illo quidem velit. Libero consequatur est et corrupti vel non. Rem explicabo adipisci voluptatibus laboriosam facilis error aspernatur quisquam. Laboriosam in sed consectetur atque quod delectus exercitationem voluptatum. Ullam quo et exercitationem quia atque autem.",
            "category": "Skirt",
            "default_price": "372.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37806,
            "campus": "hr-rfe",
            "name": "The Mohamed Sweatpants",
            "slogan": "Voluptatem fugit id et praesentium.",
            "description": "Maiores consectetur maxime occaecati et quam et voluptatem sit beatae. Eveniet impedit libero inventore quod voluptatum praesentium consectetur. Aliquam aspernatur dolor non reiciendis asperiores doloremque magni.",
            "category": "Sweatpants",
            "default_price": "492.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37807,
            "campus": "hr-rfe",
            "name": "Amara Socks",
            "slogan": "Ut nesciunt non.",
            "description": "Quisquam magnam exercitationem. Nostrum distinctio fugiat deserunt. Qui libero molestiae nisi culpa harum libero omnis. Officiis numquam a.",
            "category": "Socks",
            "default_price": "713.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37808,
            "campus": "hr-rfe",
            "name": "Jaleel Shirt",
            "slogan": "Quo iste esse qui quas vel explicabo.",
            "description": "Porro adipisci molestiae est. Architecto corporis rem quas nobis. Occaecati soluta nihil eius est ipsa aut reiciendis enim voluptas. Magni tenetur suscipit delectus. Dignissimos earum qui eos ea nesciunt velit sed hic. Veniam magnam quo rem error qui et autem sapiente fugit.",
            "category": "Shirt",
            "default_price": "812.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37809,
            "campus": "hr-rfe",
            "name": "Dannie Shoes",
            "slogan": "Adipisci quo facilis consequatur quidem laboriosam in aut error minus.",
            "description": "Et reiciendis porro modi quam nihil iusto aut error suscipit. Ut et est tenetur aut ut. Corrupti aut aut. Animi corporis odio. Enim et aliquam nihil nesciunt non libero repudiandae. Sit sed quo laboriosam.",
            "category": "Shoes",
            "default_price": "57.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37810,
            "campus": "hr-rfe",
            "name": "Dion Jacket",
            "slogan": "Repellat corrupti et odit.",
            "description": "Sit sed dolor voluptate officiis et. Voluptas autem iure qui. Repellendus amet molestias quasi ipsa veniam quasi explicabo aut optio.",
            "category": "Jacket",
            "default_price": "190.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37811,
            "campus": "hr-rfe",
            "name": "Demarco 700 Cap",
            "slogan": "Sit placeat repellendus numquam quia.",
            "description": "Eaque atque dolore ut laboriosam autem. Placeat dolores ut vel autem omnis hic amet. Sint eaque fuga est magni. Ea dignissimos expedita deserunt impedit qui non atque assumenda. Mollitia est sed et asperiores. A quaerat soluta.",
            "category": "Cap",
            "default_price": "666.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37812,
            "campus": "hr-rfe",
            "name": "Gabrielle Jacket",
            "slogan": "Sit qui provident possimus consequatur eos delectus doloribus in.",
            "description": "Sint omnis similique architecto. Incidunt incidunt earum minima perferendis et nesciunt praesentium. Vitae autem dolorum adipisci impedit eligendi nemo a nobis voluptatem.",
            "category": "Jacket",
            "default_price": "220.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37813,
            "campus": "hr-rfe",
            "name": "Kelvin Hat",
            "slogan": "Cumque corporis qui provident et dolorem facilis ut nihil.",
            "description": "Quo eum reiciendis qui ut omnis porro velit. Quas voluptatem corrupti. Minus tenetur repudiandae exercitationem ipsa. Repellat nostrum rerum dolor laboriosam. Consectetur saepe voluptates et est minus.",
            "category": "Hat",
            "default_price": "884.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37814,
            "campus": "hr-rfe",
            "name": "Jan Backpack",
            "slogan": "Possimus magni corrupti quaerat incidunt accusamus aut.",
            "description": "Est velit animi inventore tempore non enim. Veritatis ipsa similique voluptate corrupti voluptatem animi ipsam et. Qui ab nihil maxime. Quis aut accusantium. Occaecati excepturi mollitia sequi consequatur inventore sunt sequi ipsum omnis.",
            "category": "Backpack",
            "default_price": "323.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37815,
            "campus": "hr-rfe",
            "name": "Nikko Skirt",
            "slogan": "Qui et magnam temporibus qui adipisci totam excepturi labore.",
            "description": "Non necessitatibus laborum in recusandae. Sit natus earum consequatur quaerat at et. Fugit laboriosam perspiciatis molestiae voluptate qui cumque quidem aliquam non.",
            "category": "Skirt",
            "default_price": "953.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37816,
            "campus": "hr-rfe",
            "name": "Lindsay Socks",
            "slogan": "Harum nesciunt ut dolores ut sed dolores.",
            "description": "Minus sit recusandae qui provident molestiae aut animi ut quidem. Quod dolorem laudantium et. Ut mollitia magnam sed in consectetur laboriosam asperiores similique. Eligendi mollitia animi et magnam. Delectus sed voluptatem corrupti aut ea et hic. Veritatis perspiciatis molestias accusantium quis iusto id.",
            "category": "Socks",
            "default_price": "710.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37817,
            "campus": "hr-rfe",
            "name": "Kaylah Sweatpants",
            "slogan": "Sunt aut sint qui harum cum.",
            "description": "Maiores debitis consequuntur omnis quas nulla quo. Optio at veniam quae eos quis amet. Eum esse voluptatum sunt aut. Adipisci in voluptas rerum dolor laborum quia dolores quisquam.",
            "category": "Sweatpants",
            "default_price": "601.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37818,
            "campus": "hr-rfe",
            "name": "Ramona Socks",
            "slogan": "Nostrum quia ex cupiditate esse.",
            "description": "Omnis et ad facere. Debitis pariatur et est ex ea facere eos. Qui qui iste fuga.",
            "category": "Socks",
            "default_price": "871.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37819,
            "campus": "hr-rfe",
            "name": "Lisette Suit",
            "slogan": "Consectetur quo sint rem sed cumque amet.",
            "description": "Vel quaerat veritatis qui. Nemo eos possimus necessitatibus. Repellendus ipsa corrupti quibusdam voluptatum sunt quod. Libero eaque voluptatem quo quo. Iusto occaecati ipsum. Corporis eius excepturi.",
            "category": "Suit",
            "default_price": "201.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37820,
            "campus": "hr-rfe",
            "name": "Krystel Backpack",
            "slogan": "Sint corporis alias adipisci dolore recusandae.",
            "description": "Quae laborum debitis totam aliquid nesciunt dolorem. Quia repellendus sit at distinctio sed odit exercitationem aut. A consequuntur accusamus sapiente eum molestiae qui in.",
            "category": "Backpack",
            "default_price": "772.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37821,
            "campus": "hr-rfe",
            "name": "Lewis Shirt",
            "slogan": "Numquam fugiat magni magni repudiandae molestiae.",
            "description": "Aut similique et. Vitae tempora ea. Consequatur eum veniam.",
            "category": "Shirt",
            "default_price": "407.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37822,
            "campus": "hr-rfe",
            "name": "Reyna Pants",
            "slogan": "Illum eius molestiae quaerat dolore ab.",
            "description": "Dolorem debitis officia cum autem aliquam possimus temporibus. Corrupti omnis qui consequatur corrupti numquam. Deserunt incidunt labore voluptas aspernatur eveniet. Ut rerum dolores nostrum exercitationem odio soluta.",
            "category": "Pants",
            "default_price": "108.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37823,
            "campus": "hr-rfe",
            "name": "The Clark Romper",
            "slogan": "Quia natus accusantium est.",
            "description": "Voluptatem ut veritatis ut minus corrupti omnis inventore. Et rerum sed. Nam sequi et. Quia sunt dolore iusto et cupiditate ut rerum commodi id. Error enim quaerat et maiores optio harum magnam unde. Sapiente et tempora ad.",
            "category": "Romper",
            "default_price": "441.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37824,
            "campus": "hr-rfe",
            "name": "Vernice Sweater",
            "slogan": "Aliquam nulla animi ab praesentium esse aspernatur recusandae voluptas.",
            "description": "Est excepturi sapiente. Alias quisquam distinctio vel voluptatem debitis. Cupiditate et cupiditate nesciunt ratione asperiores commodi. Accusamus quam amet eveniet ut ut illum consequatur. Omnis sapiente a et in non.",
            "category": "Sweater",
            "default_price": "803.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37825,
            "campus": "hr-rfe",
            "name": "Rowena Trousers",
            "slogan": "Ducimus temporibus voluptas laborum quae neque maiores odit ut neque.",
            "description": "Qui omnis rerum neque ad dolorem. Officiis dolorum facere. Libero vitae illo et sunt repellat dolores expedita quasi. Maiores inventore consequatur blanditiis modi soluta facere.",
            "category": "Trousers",
            "default_price": "723.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37826,
            "campus": "hr-rfe",
            "name": "Laron Backpack",
            "slogan": "Iste quasi asperiores nesciunt repellat eaque necessitatibus voluptas delectus.",
            "description": "Eaque accusamus dolor aut maxime. Architecto qui perspiciatis ratione atque. Recusandae totam ullam officia qui corrupti. Quo quo ut voluptatem sit. Quis ullam sint repellendus autem consequatur totam amet ipsa incidunt. Consectetur et id ut.",
            "category": "Backpack",
            "default_price": "632.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37827,
            "campus": "hr-rfe",
            "name": "Norwood Tank Top",
            "slogan": "Et consectetur in ullam.",
            "description": "Exercitationem unde doloremque consectetur temporibus. Deserunt in iure odio. Blanditiis odit quaerat animi reprehenderit tempora alias voluptas quia est. Quas fugiat ratione ipsum saepe.",
            "category": "Tank Top",
            "default_price": "362.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37828,
            "campus": "hr-rfe",
            "name": "Lennie 1700 Jacket",
            "slogan": "Velit sed velit a et unde explicabo voluptates.",
            "description": "Et voluptas et est ut et ut incidunt. Eius beatae culpa distinctio suscipit aliquid. Eos harum voluptatem ipsum quia alias necessitatibus. Id voluptatem est facilis nisi sed.",
            "category": "Jacket",
            "default_price": "566.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37829,
            "campus": "hr-rfe",
            "name": "Ardith Tank Top",
            "slogan": "Beatae distinctio impedit ut ratione repellat explicabo occaecati.",
            "description": "Sequi accusantium dolore animi sint modi soluta est mollitia non. Modi cupiditate quia. Repellendus blanditiis consequatur voluptatem ipsa aut quia quo. Ducimus laudantium at reprehenderit voluptatem et quidem. Quasi corporis quis excepturi. Ea cumque facere dolores sint deleniti molestiae rerum possimus voluptates.",
            "category": "Tank Top",
            "default_price": "56.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37830,
            "campus": "hr-rfe",
            "name": "Eulalia Romper",
            "slogan": "Ut vel repellendus incidunt.",
            "description": "Sit minus delectus quasi quisquam id alias aliquam. Tempore veniam nemo consequatur enim. Adipisci voluptas sapiente repudiandae doloremque sit et. Nam officiis voluptatem dolor rerum a. Dolores alias hic autem. Accusamus sapiente dolorum.",
            "category": "Romper",
            "default_price": "517.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37831,
            "campus": "hr-rfe",
            "name": "Gloria Shorts",
            "slogan": "Maxime voluptates commodi quibusdam est et.",
            "description": "Voluptate iure voluptatem saepe ducimus culpa laboriosam iure ex ab. Fuga veritatis fuga doloribus repellendus voluptas quis ipsa dolorum omnis. Omnis non sed. Quo et minus amet dolor molestias. Nulla exercitationem quam sed qui iusto. Alias dignissimos eaque voluptatem explicabo rerum.",
            "category": "Shorts",
            "default_price": "861.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37832,
            "campus": "hr-rfe",
            "name": "Krystal Jacket",
            "slogan": "Dolorum eos at assumenda qui et quam.",
            "description": "Dolorem amet deleniti aliquid quo. Sunt deserunt mollitia ab ea libero animi. Suscipit totam vel voluptates voluptates. Architecto debitis soluta ea. Vero consequatur beatae ut id non voluptatem aliquam. Quis quia et accusamus iste.",
            "category": "Jacket",
            "default_price": "736.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37833,
            "campus": "hr-rfe",
            "name": "Efrain Heels",
            "slogan": "Quis nulla dolorum omnis laboriosam laboriosam quam voluptates qui debitis.",
            "description": "Illo voluptatibus eos fugiat fugit numquam. A cum quis. Dicta sit laudantium molestiae. Reprehenderit perferendis a consequatur. Nam eius totam ut sed et dignissimos quisquam laudantium perspiciatis. In quis provident doloribus quia.",
            "category": "Heels",
            "default_price": "873.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37834,
            "campus": "hr-rfe",
            "name": "Earlene Boots",
            "slogan": "Ducimus magnam voluptatum provident sed.",
            "description": "Dignissimos ea asperiores ratione quaerat alias ratione accusantium quibusdam. Est magni recusandae perferendis sint. Nesciunt eos inventore porro dolores excepturi quaerat autem.",
            "category": "Boots",
            "default_price": "550.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37835,
            "campus": "hr-rfe",
            "name": "Angela Coat",
            "slogan": "Impedit aut qui similique est harum doloribus et aut.",
            "description": "Natus omnis temporibus quo id et quis aut est repellendus. Enim dolor aliquid voluptatem excepturi voluptas nemo. Voluptas iste est repudiandae quia eum alias iure amet laudantium. Odit tenetur ipsa cupiditate culpa est. Ut rem odio velit nam ut assumenda error eum. Autem ab voluptas in sit.",
            "category": "Coat",
            "default_price": "900.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37836,
            "campus": "hr-rfe",
            "name": "Treva 1000 Tank Top",
            "slogan": "Et iste consequatur odit adipisci.",
            "description": "Labore commodi dolorem incidunt fugit possimus dolore. Dolorem ullam animi numquam doloribus sint. Et incidunt earum voluptas aut magnam id laudantium vel delectus.",
            "category": "Tank Top",
            "default_price": "55.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37837,
            "campus": "hr-rfe",
            "name": "Halle Coat",
            "slogan": "Voluptatem commodi laudantium ipsam ea consequatur earum.",
            "description": "Ratione molestiae autem aspernatur inventore velit fugit amet. Inventore quis dolor cum aut voluptas quas. Quo eligendi facere aut et. In veritatis voluptatem aut optio non asperiores. Facere molestiae quia illo. Laborum nulla harum facilis et blanditiis.",
            "category": "Coat",
            "default_price": "528.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37838,
            "campus": "hr-rfe",
            "name": "Janice Suit",
            "slogan": "Sed in autem consequatur et quis facilis.",
            "description": "Et qui perferendis nam ullam. Quia dignissimos harum suscipit assumenda sunt deserunt quisquam tenetur. Velit corrupti sint nemo. Est est nemo inventore et pariatur nihil molestiae distinctio. Modi optio necessitatibus veritatis laboriosam enim qui quia.",
            "category": "Suit",
            "default_price": "379.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37839,
            "campus": "hr-rfe",
            "name": "Pascale Shorts",
            "slogan": "Dolor officia rerum autem voluptatem magnam quis est consequatur a.",
            "description": "Quia ex itaque nisi odio in aut. Animi laudantium dolorem itaque ullam qui incidunt magnam rerum. Quia ab voluptatem.",
            "category": "Shorts",
            "default_price": "759.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37840,
            "campus": "hr-rfe",
            "name": "Ernest Suit",
            "slogan": "Sapiente assumenda vel ullam repellat et maiores.",
            "description": "Facere nemo in sequi et quia placeat molestiae necessitatibus. Dolore earum quia similique omnis consequatur et earum. Molestiae voluptatem iste nemo excepturi expedita consequatur corporis. Repellendus tenetur minima illum mollitia omnis labore neque voluptatem deleniti.",
            "category": "Suit",
            "default_price": "846.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37841,
            "campus": "hr-rfe",
            "name": "Lorena Hoodie",
            "slogan": "Delectus et in provident dignissimos magni blanditiis similique.",
            "description": "Ut veniam magnam. Consequuntur voluptas commodi asperiores sequi error. Minus aut expedita natus voluptas repudiandae. Qui sunt mollitia nobis id mollitia sed ullam aperiam. Voluptatem dolores architecto. Id distinctio ea eveniet et.",
            "category": "Hoodie",
            "default_price": "112.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37842,
            "campus": "hr-rfe",
            "name": "Deshaun 1150 Suit",
            "slogan": "Dignissimos minima quo et qui est vel dolorem.",
            "description": "Non repellendus aut optio aperiam sint occaecati. Ut est in. Quia quis et laboriosam tempore et laudantium adipisci. Et necessitatibus incidunt perspiciatis sapiente optio suscipit pariatur odit.",
            "category": "Suit",
            "default_price": "675.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37843,
            "campus": "hr-rfe",
            "name": "Laurie Cap",
            "slogan": "Pariatur molestiae laboriosam excepturi sed.",
            "description": "Molestiae et non consectetur. Consectetur et dolores fuga quod non sint. Quibusdam dolor quaerat numquam dolore. Quam non temporibus dolores aut ea officiis soluta.",
            "category": "Cap",
            "default_price": "916.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37844,
            "campus": "hr-rfe",
            "name": "Cindy Shorts",
            "slogan": "Ratione qui ut.",
            "description": "Vel sed est a adipisci sit. Asperiores dolor dolor possimus sit voluptas et iste et. Nihil illo optio facilis occaecati delectus aliquam.",
            "category": "Shorts",
            "default_price": "360.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37845,
            "campus": "hr-rfe",
            "name": "Thea Backpack",
            "slogan": "Voluptas libero aut laboriosam.",
            "description": "Consequatur numquam repellendus possimus. Et temporibus minima. Assumenda laborum necessitatibus et eius iusto. Quos rerum non soluta veritatis exercitationem magnam qui aperiam. Repudiandae et error nostrum vel perspiciatis amet omnis. Corrupti ullam quia et aut aliquam.",
            "category": "Backpack",
            "default_price": "524.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37846,
            "campus": "hr-rfe",
            "name": "Lupe Boots",
            "slogan": "Aut voluptatem et consectetur in qui veniam.",
            "description": "Nemo cupiditate omnis saepe. Non aut tempore sint quia cum. Dolores tempore sint nemo nihil. Ut quo ducimus tempora enim architecto. Sit omnis ea nostrum aut asperiores. Eum quaerat et expedita provident delectus assumenda laudantium nihil.",
            "category": "Boots",
            "default_price": "336.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37847,
            "campus": "hr-rfe",
            "name": "Catherine 1150 Hat",
            "slogan": "In consequatur et.",
            "description": "Ex ex iusto iure enim neque non. Blanditiis ut ab accusamus molestiae non praesentium velit corrupti fugiat. Modi enim sint nihil eos.",
            "category": "Hat",
            "default_price": "190.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37848,
            "campus": "hr-rfe",
            "name": "Effie Hoodie",
            "slogan": "Amet nostrum quam qui et pariatur voluptatem aperiam.",
            "description": "Molestias nobis porro quibusdam rerum non nihil exercitationem. Expedita error occaecati deserunt laboriosam veniam. Consequatur quod id consequatur fugit. Commodi dolor et minus totam consectetur officia et esse ut. Libero id ea nisi eaque.",
            "category": "Hoodie",
            "default_price": "101.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37849,
            "campus": "hr-rfe",
            "name": "Rashawn 1600 Sweatpants",
            "slogan": "Corrupti enim sit aperiam soluta qui minima consectetur facere rerum.",
            "description": "Molestias expedita est dolor perspiciatis accusantium. Veniam enim cupiditate dolorum ab porro. Eligendi cumque consequatur. Quam vero rerum nihil adipisci eos. Ipsam velit maxime sequi rerum. Odit laboriosam laborum quia tempora.",
            "category": "Sweatpants",
            "default_price": "239.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37850,
            "campus": "hr-rfe",
            "name": "Martina Suit",
            "slogan": "Laboriosam id eos consectetur ea earum.",
            "description": "Error sed animi blanditiis dolorum. Ullam voluptatem commodi ut iste. Dolorem architecto modi. Quia nostrum autem quia error voluptatem reiciendis occaecati accusamus et. Mollitia ipsa quibusdam repellat eos. Facilis quia quo ut eum odit est qui sit et.",
            "category": "Suit",
            "default_price": "703.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37851,
            "campus": "hr-rfe",
            "name": "Clint Coat",
            "slogan": "Iure doloribus unde qui modi cupiditate quia.",
            "description": "Qui necessitatibus sequi et porro. Voluptatibus nihil doloremque quibusdam ut. Omnis aperiam aut voluptatum ab debitis eligendi unde id.",
            "category": "Coat",
            "default_price": "402.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37852,
            "campus": "hr-rfe",
            "name": "Antonietta Hat",
            "slogan": "Ipsa molestias perspiciatis omnis dolorem sit placeat excepturi et.",
            "description": "Porro esse explicabo repellat velit rem officia. Distinctio excepturi ab est. Sint et ullam deleniti qui. Reiciendis voluptatibus qui dicta. Sit quaerat exercitationem consequatur voluptate.",
            "category": "Hat",
            "default_price": "831.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37853,
            "campus": "hr-rfe",
            "name": "Lizeth Sunglasses",
            "slogan": "Odit sapiente ut ipsam modi accusamus quaerat.",
            "description": "Qui ratione nulla sint rerum magni cum. Temporibus quis aspernatur rerum. Suscipit est sint id sed velit est quidem ut. Enim sed sint voluptate ducimus. Temporibus temporibus aut voluptas accusantium.",
            "category": "Sunglasses",
            "default_price": "574.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37854,
            "campus": "hr-rfe",
            "name": "Allene Suit",
            "slogan": "Odit tempora nostrum non enim et eaque quasi repellendus.",
            "description": "Dolorem aut voluptatem sint magni et qui sed id laudantium. Sunt dolor neque sint non provident quam. Velit architecto perferendis omnis voluptatem aliquam est quae est mollitia. Impedit quas repellat temporibus aperiam. Quisquam provident cum minima ut.",
            "category": "Suit",
            "default_price": "100.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37855,
            "campus": "hr-rfe",
            "name": "Kaleigh Coat",
            "slogan": "Error nostrum ut ullam nobis aut delectus sint velit nostrum.",
            "description": "Qui totam est aliquam cum non est provident. Sit ut omnis neque. Cupiditate aut autem laboriosam molestias eaque et laboriosam porro expedita. Amet eos alias nisi fugiat odit. Cum sed aperiam amet. Voluptatem similique rerum magni ab enim.",
            "category": "Coat",
            "default_price": "449.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37856,
            "campus": "hr-rfe",
            "name": "Lourdes Suit",
            "slogan": "A rerum et sint repellendus quo quod doloremque.",
            "description": "Minus inventore ut harum molestiae provident velit a aut non. Porro neque nesciunt et perferendis minus deleniti perferendis. Aut beatae vero aspernatur quis nam.",
            "category": "Suit",
            "default_price": "54.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37857,
            "campus": "hr-rfe",
            "name": "Lauryn Tank Top",
            "slogan": "Magni esse eius molestiae earum repellat.",
            "description": "Rerum blanditiis sunt. Eius accusamus eligendi nam quod nulla reiciendis quod porro. Natus laboriosam aut nesciunt vel voluptatem necessitatibus. Officiis aut ex sit ipsam iure. Incidunt voluptatem nisi repellendus dolor et minima. Ex voluptates id.",
            "category": "Tank Top",
            "default_price": "656.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37858,
            "campus": "hr-rfe",
            "name": "Hayden 300 Jacket",
            "slogan": "Cumque velit porro.",
            "description": "Debitis expedita voluptatibus voluptas nemo eum cum. Ut aut laudantium sint. Quae fugit et quia dolores sunt soluta qui. Asperiores qui ad debitis unde. Sed nam fugit ut dignissimos.",
            "category": "Jacket",
            "default_price": "148.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37859,
            "campus": "hr-rfe",
            "name": "Rebecca Skirt",
            "slogan": "Ullam quasi eos fugit.",
            "description": "Quisquam ea assumenda. Fugit nulla qui tempora ut occaecati aliquid dolores cum. Sapiente vel ex. Ullam quaerat placeat dolores debitis. Quos dolores corporis beatae rerum tenetur voluptatem. Ducimus magni veniam est.",
            "category": "Skirt",
            "default_price": "656.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37860,
            "campus": "hr-rfe",
            "name": "Roosevelt Boots",
            "slogan": "Vel vel minus laborum numquam.",
            "description": "Omnis dolorem dolores officiis rerum. Placeat harum illo cupiditate suscipit quia officia. Pariatur amet sunt ex fuga error commodi. Beatae earum id ea. Rerum delectus asperiores cumque.",
            "category": "Boots",
            "default_price": "232.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37861,
            "campus": "hr-rfe",
            "name": "Isac Trousers",
            "slogan": "Rerum nulla ut est.",
            "description": "Nam velit ipsam veniam corrupti optio quaerat sed consequatur voluptatem. Facere adipisci praesentium necessitatibus illo veniam debitis. Possimus fuga eum vero consequatur beatae.",
            "category": "Trousers",
            "default_price": "377.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37862,
            "campus": "hr-rfe",
            "name": "Troy Slacks",
            "slogan": "Aut ipsam pariatur aut.",
            "description": "Tempore veritatis temporibus deleniti qui deleniti beatae dolorem. Voluptatibus doloribus modi neque officia suscipit. Quae sed accusantium repellendus alias.",
            "category": "Slacks",
            "default_price": "335.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37863,
            "campus": "hr-rfe",
            "name": "Davon Hoodie",
            "slogan": "Ratione autem ipsum consequatur dolorem numquam ut eligendi qui quia.",
            "description": "Velit omnis quidem delectus est. Qui tempora ad provident sunt aut velit. Nisi voluptas praesentium ea ad nobis nam. Aut dolor aut sint.",
            "category": "Hoodie",
            "default_price": "546.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37864,
            "campus": "hr-rfe",
            "name": "George Jacket",
            "slogan": "Modi in excepturi voluptatem id illum.",
            "description": "Rerum vitae voluptas ea optio enim minima est. Distinctio rerum ea est nihil consequatur. Et aliquam esse molestiae est.",
            "category": "Jacket",
            "default_price": "865.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37865,
            "campus": "hr-rfe",
            "name": "Heath Cap",
            "slogan": "Autem vero reiciendis reiciendis vitae sequi.",
            "description": "Ad beatae possimus enim consequatur quis. Et occaecati et labore quae blanditiis alias nisi. Optio quasi est dolor aut sed et quidem. Ut est eos omnis quia tenetur porro error. Voluptatem qui velit eligendi quos ad voluptatem et.",
            "category": "Cap",
            "default_price": "589.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37866,
            "campus": "hr-rfe",
            "name": "Jamarcus Socks",
            "slogan": "Consequatur consequatur labore autem tempora error dolores qui.",
            "description": "Ut sit quae explicabo esse quidem. Consectetur voluptate omnis voluptatem architecto velit dolorem odit. Cum est eaque soluta doloribus occaecati dolorem ut expedita a.",
            "category": "Socks",
            "default_price": "106.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37867,
            "campus": "hr-rfe",
            "name": "Nelda Romper",
            "slogan": "Consequuntur eaque et facilis voluptas modi sequi maiores.",
            "description": "Porro soluta qui sunt. Ad eligendi et quod qui. Error eligendi blanditiis molestiae delectus quo. Qui tempora vero quam minima enim dolores. Sunt qui consectetur nam qui totam officiis aut. Est nisi numquam.",
            "category": "Romper",
            "default_price": "496.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37868,
            "campus": "hr-rfe",
            "name": "Rick Romper",
            "slogan": "Eos vitae error nobis et quos enim voluptatem voluptas.",
            "description": "Vel iusto quo numquam aut sed nesciunt quos numquam et. Unde non perferendis occaecati cumque laboriosam sequi aliquam sunt non. Voluptate ratione autem voluptatem asperiores dolorem atque dolorum et commodi. Autem qui ipsum aliquid.",
            "category": "Romper",
            "default_price": "237.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37869,
            "campus": "hr-rfe",
            "name": "Zora Trousers",
            "slogan": "Quidem ut fugiat.",
            "description": "Saepe quis suscipit ut nam perspiciatis aut. Tempore dolorum omnis nihil nam explicabo. Dolor sapiente eum omnis. Eveniet tempora sit.",
            "category": "Trousers",
            "default_price": "361.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37870,
            "campus": "hr-rfe",
            "name": "Russel Backpack",
            "slogan": "Occaecati non aut temporibus et repellat expedita.",
            "description": "Sit animi neque. Molestiae rerum iste velit qui eligendi nam omnis nam ea. Voluptatibus illum inventore aut nulla velit minima. Quam quam aliquam. Nostrum quis quia ut ea corrupti quos ullam. Rerum ullam unde adipisci sit a sint blanditiis quas vel.",
            "category": "Backpack",
            "default_price": "147.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37871,
            "campus": "hr-rfe",
            "name": "Connor Backpack",
            "slogan": "Odit sed dignissimos totam commodi eum libero voluptatem ab aliquam.",
            "description": "Voluptate facilis repellendus ex. Recusandae ut in odio. Ex dicta totam sapiente quia consequuntur repellat. Et a non consequatur laboriosam est error et. Sequi sunt nostrum.",
            "category": "Backpack",
            "default_price": "151.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37872,
            "campus": "hr-rfe",
            "name": "Clarissa 1500 Heels",
            "slogan": "Quis et placeat porro hic dignissimos eum fuga doloribus magni.",
            "description": "Omnis libero veritatis aut aut maxime neque totam ut. Accusamus consequatur expedita molestiae consequatur nostrum quo voluptatem consectetur et. Soluta et explicabo omnis sed et. Et aut fugiat qui. Sed voluptate omnis placeat. Est earum quidem.",
            "category": "Heels",
            "default_price": "56.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37873,
            "campus": "hr-rfe",
            "name": "Yadira 450 Shorts",
            "slogan": "Ipsam enim est repudiandae commodi eum consequatur delectus.",
            "description": "Tenetur consequatur vel sunt. Nihil culpa ab consequatur delectus consequatur illo. Voluptate officiis aliquam est sit et harum aut.",
            "category": "Shorts",
            "default_price": "574.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37874,
            "campus": "hr-rfe",
            "name": "Jacques Skirt",
            "slogan": "Temporibus et voluptatem.",
            "description": "Autem pariatur numquam dolor. Voluptate voluptate explicabo rerum. Rem libero voluptas incidunt. Vero omnis quos et ex beatae sit exercitationem ratione facilis. Ut accusantium officia animi ipsa eos delectus modi voluptates qui.",
            "category": "Skirt",
            "default_price": "39.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37875,
            "campus": "hr-rfe",
            "name": "Consuelo Shoes",
            "slogan": "Ab repudiandae sit tempora sunt voluptas adipisci.",
            "description": "Quos cum inventore delectus ipsam praesentium quia incidunt. Numquam nesciunt illo molestias sunt alias. Minus culpa consequatur totam officia voluptas mollitia. Ipsam et est voluptatem ut atque id vitae deleniti. Impedit nihil animi sit aut dolor quia vel incidunt explicabo. Sit a modi quo.",
            "category": "Shoes",
            "default_price": "251.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37876,
            "campus": "hr-rfe",
            "name": "Lucio Socks",
            "slogan": "Aliquid et beatae expedita nobis magni et dolorem suscipit.",
            "description": "Reiciendis nisi cupiditate cumque optio animi harum rem. At rerum non quia alias sunt incidunt. Qui voluptatem aut ut consequatur accusantium voluptate et nostrum. Natus eos tempore neque laboriosam placeat impedit inventore. Molestiae nobis et eos sequi ullam facilis vitae eum et.",
            "category": "Socks",
            "default_price": "43.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37877,
            "campus": "hr-rfe",
            "name": "Mya 800 Pants",
            "slogan": "Nesciunt id aut.",
            "description": "Nam reprehenderit eos enim eveniet eaque autem. Ut quos et voluptatem minima libero ea. Qui eum ex et quae ratione consectetur in.",
            "category": "Pants",
            "default_price": "732.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37878,
            "campus": "hr-rfe",
            "name": "Lindsay Suit",
            "slogan": "Voluptatem et aut.",
            "description": "Quo nostrum asperiores dolor doloremque sed omnis earum pariatur qui. Ut accusantium sed optio. Nobis suscipit voluptatum voluptate nihil. Ut facilis omnis aut qui et consectetur. Dolor maxime molestiae error et dolor tenetur.",
            "category": "Suit",
            "default_price": "421.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37879,
            "campus": "hr-rfe",
            "name": "Mohammed Dress",
            "slogan": "Pariatur et culpa omnis ut corrupti.",
            "description": "Amet soluta minus dolores placeat consequatur quibusdam sint optio. Natus adipisci ad illum veritatis ut est architecto. Tempore nam necessitatibus excepturi beatae aut est. Qui ducimus aut pariatur et. Reprehenderit temporibus aut laborum fugit harum. Aut facilis facere laboriosam aut ut labore.",
            "category": "Dress",
            "default_price": "720.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37880,
            "campus": "hr-rfe",
            "name": "Reece Suit",
            "slogan": "Harum ut laborum minima sint eos fugiat.",
            "description": "Quam cupiditate quod molestiae earum aut expedita minima itaque. Est modi sequi amet rerum. Laudantium assumenda perspiciatis aspernatur dolorem vitae et consequuntur. Voluptatem nostrum sint in atque eveniet sint dicta at. Unde odit et ut. Dolor sit perferendis ipsum ut sequi labore aut iste.",
            "category": "Suit",
            "default_price": "181.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37881,
            "campus": "hr-rfe",
            "name": "Colt Heels",
            "slogan": "Fuga aut inventore.",
            "description": "Quidem deserunt quo exercitationem qui. Voluptatem consequuntur perferendis odio fugiat repudiandae blanditiis impedit placeat omnis. Vitae nobis non et. Laboriosam et voluptatem aut et. Laboriosam laudantium fuga officia esse saepe facere.",
            "category": "Heels",
            "default_price": "996.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37882,
            "campus": "hr-rfe",
            "name": "Eunice Shoes",
            "slogan": "Vitae sit assumenda quaerat facilis cupiditate quia tempore ut.",
            "description": "Dignissimos asperiores consequuntur. Deserunt nobis recusandae magnam. Deserunt ducimus aut aliquid consequuntur nostrum recusandae voluptatem eum.",
            "category": "Shoes",
            "default_price": "130.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37883,
            "campus": "hr-rfe",
            "name": "Deion Coat",
            "slogan": "Voluptatum reprehenderit similique consequuntur in fuga cupiditate quia.",
            "description": "Culpa doloremque atque accusantium voluptatem vitae. Non voluptatem quia voluptatem quam nihil. Quaerat velit eaque voluptatem et nobis voluptates est. Incidunt quidem modi ut. Consequuntur officia distinctio et animi quae.",
            "category": "Coat",
            "default_price": "559.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37884,
            "campus": "hr-rfe",
            "name": "Jeffery Cap",
            "slogan": "Facilis culpa qui ut maiores ut natus architecto eius.",
            "description": "Et earum perspiciatis aperiam omnis. Ducimus reiciendis voluptatem laudantium et error velit facilis dolor asperiores. Exercitationem est ipsum voluptate et nemo vitae velit et. Sunt libero non earum eos non voluptates pariatur et. Quis sit soluta error molestias repellat.",
            "category": "Cap",
            "default_price": "987.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37885,
            "campus": "hr-rfe",
            "name": "Kieran Pants",
            "slogan": "Dolore ducimus atque doloribus aut.",
            "description": "Vero praesentium unde officia harum iure. Nulla optio aut consequatur quis omnis impedit modi doloremque soluta. Sit ut eaque voluptas necessitatibus dolores quam culpa vitae et.",
            "category": "Pants",
            "default_price": "477.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37886,
            "campus": "hr-rfe",
            "name": "Rhiannon Heels",
            "slogan": "Molestias quod reprehenderit totam quae suscipit.",
            "description": "Eaque aut ipsa totam aspernatur. Dolor incidunt sint ex. Nisi illum similique eaque perferendis accusamus sit. Cumque voluptates ut cupiditate nemo ullam excepturi at rerum.",
            "category": "Heels",
            "default_price": "912.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37887,
            "campus": "hr-rfe",
            "name": "Judson Backpack",
            "slogan": "Dolore et ut ea suscipit reiciendis.",
            "description": "Quos deleniti praesentium similique aut voluptatum. Et sed esse commodi sit quisquam omnis. Sequi saepe doloribus voluptatum corrupti repellat laboriosam veritatis in. Similique veniam ullam alias commodi itaque rerum rerum.",
            "category": "Backpack",
            "default_price": "920.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37888,
            "campus": "hr-rfe",
            "name": "Bria Jacket",
            "slogan": "Voluptatem unde rerum earum reiciendis inventore laudantium ab quibusdam.",
            "description": "Adipisci neque libero voluptatem quo. Autem qui rerum tempore. In rem asperiores.",
            "category": "Jacket",
            "default_price": "914.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37889,
            "campus": "hr-rfe",
            "name": "Maybelle Shoes",
            "slogan": "Et et quo sit molestiae dolor.",
            "description": "Quos accusantium fugit sint nulla aut. Commodi corporis modi laboriosam dolorem reiciendis aut facilis qui. Impedit doloribus dolore soluta accusantium officiis necessitatibus et id. Dignissimos quas rerum unde ullam.",
            "category": "Shoes",
            "default_price": "783.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37890,
            "campus": "hr-rfe",
            "name": "Mia Dress",
            "slogan": "Et quia inventore voluptatem.",
            "description": "Excepturi aliquid vero sed esse omnis eum labore. Repudiandae dolorem voluptatibus aut qui. Ut sequi esse consequatur.",
            "category": "Dress",
            "default_price": "214.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37891,
            "campus": "hr-rfe",
            "name": "Susana Boots",
            "slogan": "Et impedit distinctio.",
            "description": "Reiciendis ut ipsam reprehenderit ab. Nulla similique quam minima sed iste voluptatem. Quas rerum ratione. Quam non cupiditate molestiae. Vero temporibus hic sit impedit repudiandae.",
            "category": "Boots",
            "default_price": "783.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37892,
            "campus": "hr-rfe",
            "name": "Jeramie Shoes",
            "slogan": "Numquam eos et illo alias.",
            "description": "Cupiditate omnis voluptatem aliquid aspernatur sed. Voluptatem vel odio et modi nemo omnis dolores illo. Aspernatur suscipit sunt odio magnam quod ut adipisci dolores. Quam maiores assumenda et perspiciatis a reprehenderit aut. Maiores officia earum facilis vel est.",
            "category": "Shoes",
            "default_price": "177.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37893,
            "campus": "hr-rfe",
            "name": "Antone Jacket",
            "slogan": "Molestias reprehenderit dolor.",
            "description": "Voluptate animi porro nihil eum id voluptatibus quam. Et dignissimos ut voluptatem. Alias optio nihil consectetur. Omnis amet voluptates qui qui ipsam eum. Id voluptas ipsam aut quisquam molestias distinctio alias et maiores. Adipisci ipsam ut unde odio fugit sapiente.",
            "category": "Jacket",
            "default_price": "738.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37894,
            "campus": "hr-rfe",
            "name": "Candace Hoodie",
            "slogan": "Quaerat velit ad laborum nobis exercitationem.",
            "description": "Accusamus dolorem et quae. Voluptatem non sunt laboriosam omnis quisquam molestiae. Dolor tenetur quasi et. Ea maiores nam rem.",
            "category": "Hoodie",
            "default_price": "146.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37895,
            "campus": "hr-rfe",
            "name": "Skylar Shirt",
            "slogan": "Repudiandae modi consequatur expedita nihil quod.",
            "description": "Provident impedit libero perferendis quaerat dolorem harum dolorum est et. Necessitatibus non at enim velit vel occaecati cupiditate. Facere placeat quaerat occaecati ad aut voluptatibus aliquid dolorem.",
            "category": "Shirt",
            "default_price": "182.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37896,
            "campus": "hr-rfe",
            "name": "Dagmar Sunglasses",
            "slogan": "Quis vero neque et minus quia.",
            "description": "Accusantium quasi ad eveniet consequatur. Magnam temporibus repellendus voluptatibus. Voluptatem fuga debitis. Sit sed tenetur. Similique repellat velit. Nesciunt sit atque ut laboriosam enim.",
            "category": "Sunglasses",
            "default_price": "808.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37897,
            "campus": "hr-rfe",
            "name": "Dixie 1600 Hoodie",
            "slogan": "Sed voluptatem voluptatem eum.",
            "description": "Voluptatem aut et voluptatibus fugit. Est itaque quam et ut sed. Quia quo aliquam blanditiis possimus asperiores quidem voluptas eaque. Magni officia consequatur ipsa delectus.",
            "category": "Hoodie",
            "default_price": "813.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37898,
            "campus": "hr-rfe",
            "name": "Mayra Heels",
            "slogan": "Excepturi debitis sit dolores doloremque repellendus iste dolores rem fugit.",
            "description": "Deserunt placeat magni commodi. Mollitia occaecati nobis quis aut incidunt unde delectus ullam omnis. Dolores ipsa et consequatur magnam. Voluptas occaecati aperiam sit in amet voluptatibus quasi. Non maiores qui quasi enim est et. Vero ex asperiores adipisci enim ipsam nemo.",
            "category": "Heels",
            "default_price": "762.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37899,
            "campus": "hr-rfe",
            "name": "Isabell Trousers",
            "slogan": "Voluptate laudantium nisi libero modi.",
            "description": "Et aut totam quia enim reprehenderit ut autem. Dolores dolores quam laboriosam. Autem consequatur similique cumque.",
            "category": "Trousers",
            "default_price": "863.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37900,
            "campus": "hr-rfe",
            "name": "Wanda Tank Top",
            "slogan": "Officiis consequatur natus at ut sequi.",
            "description": "Quaerat et quibusdam maxime aut. Ducimus maiores et molestiae temporibus saepe. Necessitatibus quos tenetur. Quo itaque iusto in et at harum aliquid. Qui qui maiores quae tenetur.",
            "category": "Tank Top",
            "default_price": "968.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37901,
            "campus": "hr-rfe",
            "name": "Angelica 600 Heels",
            "slogan": "Soluta et exercitationem similique.",
            "description": "Expedita error aspernatur voluptas doloremque eveniet omnis. Unde libero repellat minus sint aut saepe. Exercitationem ad et expedita quae sunt recusandae. Aut reiciendis vero.",
            "category": "Heels",
            "default_price": "726.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37902,
            "campus": "hr-rfe",
            "name": "Kattie Hoodie",
            "slogan": "Qui tempora eum corporis optio nihil optio quidem molestiae.",
            "description": "Harum delectus dolor blanditiis ab dolor. Aut non voluptatem est porro. Ipsum incidunt accusantium et iure qui cupiditate aliquam. Quia et omnis itaque. Quam voluptas facere nihil dolore quia. Expedita necessitatibus temporibus quia et.",
            "category": "Hoodie",
            "default_price": "857.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37903,
            "campus": "hr-rfe",
            "name": "Brittany Sweatpants",
            "slogan": "Atque sit nostrum natus aut sed.",
            "description": "Id qui eaque iure corrupti repellat eum omnis. Magnam adipisci et est eius rerum amet atque quos. Ullam enim omnis consectetur odit aspernatur autem et nesciunt. Id quas vitae et molestiae autem dolore est. Commodi neque eius aut quo facilis praesentium quo hic vel. Eum in nihil et enim autem autem.",
            "category": "Sweatpants",
            "default_price": "996.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37904,
            "campus": "hr-rfe",
            "name": "Alexandre Dress",
            "slogan": "Sit odio voluptatibus nisi quibusdam sit.",
            "description": "Aperiam nobis ea rerum voluptas distinctio dolores asperiores sapiente. Tempora quisquam quaerat sit sit velit molestias suscipit quidem esse. Porro ea et et error iure debitis libero fugit quasi.",
            "category": "Dress",
            "default_price": "979.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37905,
            "campus": "hr-rfe",
            "name": "Conner Slacks",
            "slogan": "Dicta distinctio laborum eos voluptas a minus qui ut.",
            "description": "Dolores sint blanditiis aliquam porro cumque libero voluptas cum. Et libero id qui blanditiis veniam. Facere non omnis non laborum laboriosam sed eum.",
            "category": "Slacks",
            "default_price": "644.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37906,
            "campus": "hr-rfe",
            "name": "Afton Hoodie",
            "slogan": "Quis consequuntur et possimus.",
            "description": "Ut fuga quam illum est sunt necessitatibus temporibus non. Nobis qui aspernatur voluptatem porro harum. Eos eos non fugit delectus ut qui deleniti voluptatem laboriosam.",
            "category": "Hoodie",
            "default_price": "712.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37907,
            "campus": "hr-rfe",
            "name": "Dagmar Tank Top",
            "slogan": "Qui ut reiciendis vel provident voluptate quia nemo aut sed.",
            "description": "Laboriosam vero ad consequatur assumenda delectus aut cum vero. Aperiam eum corrupti magni et harum. Occaecati dolor laborum vitae molestiae qui eum quia. Exercitationem neque adipisci eius et libero tempore dolores hic.",
            "category": "Tank Top",
            "default_price": "578.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37908,
            "campus": "hr-rfe",
            "name": "The Molly Shorts",
            "slogan": "Eum molestias a iusto.",
            "description": "Numquam deleniti blanditiis esse earum. Dicta rerum aut quia incidunt minus corporis. Dolores sint enim ratione ullam neque ab quia.",
            "category": "Shorts",
            "default_price": "838.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37909,
            "campus": "hr-rfe",
            "name": "The Modesta Romper",
            "slogan": "Iusto adipisci consectetur et exercitationem nisi est consectetur.",
            "description": "Iure illum nemo sed. Illum eligendi rerum voluptatem suscipit laudantium iusto possimus neque. Consequuntur est molestias repudiandae accusantium officiis velit sunt voluptatem illum.",
            "category": "Romper",
            "default_price": "430.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37910,
            "campus": "hr-rfe",
            "name": "Liza Romper",
            "slogan": "Error occaecati officia.",
            "description": "Sit est est. Aut sequi eos nobis sint at repellendus aut vel consequatur. Mollitia magni minima eaque repudiandae unde id ducimus sed necessitatibus. Quibusdam quis nostrum. Accusantium quam voluptas nihil aut quidem laudantium. At possimus eaque temporibus.",
            "category": "Romper",
            "default_price": "684.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37911,
            "campus": "hr-rfe",
            "name": "Stefan Hat",
            "slogan": "Inventore laudantium ut rerum.",
            "description": "Aut aperiam nostrum odit harum laboriosam corrupti nostrum quisquam. Veritatis aut eos facilis pariatur vero dignissimos est veritatis. Maiores et quibusdam et voluptas omnis consectetur facere illo.",
            "category": "Hat",
            "default_price": "452.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37912,
            "campus": "hr-rfe",
            "name": "Maybell Shirt",
            "slogan": "Cum distinctio omnis ut ut et iste repudiandae aut.",
            "description": "Ipsam optio ut quia id ut tempore molestias autem fuga. Soluta sint voluptas perferendis dolorem. Nihil ut consequatur alias vel ullam quisquam. Rerum sunt repudiandae mollitia qui officia alias totam.",
            "category": "Shirt",
            "default_price": "634.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37913,
            "campus": "hr-rfe",
            "name": "Baby Hoodie",
            "slogan": "Veniam quaerat aliquam.",
            "description": "Sed explicabo voluptates aut est suscipit possimus laudantium praesentium quis. Iste sint animi magnam. Dolorem nesciunt maiores aut impedit ipsam.",
            "category": "Hoodie",
            "default_price": "279.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37914,
            "campus": "hr-rfe",
            "name": "Jacinthe Suit",
            "slogan": "Non magni soluta aut aut facere et unde.",
            "description": "Iure qui error. Dolorem harum enim at. Excepturi doloribus quia in ullam nihil. Cupiditate qui blanditiis voluptas voluptatem totam. Aut alias enim voluptatum. Autem et non vitae consequatur est corrupti autem dolores et.",
            "category": "Suit",
            "default_price": "989.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37915,
            "campus": "hr-rfe",
            "name": "General Hat",
            "slogan": "Optio accusantium nihil autem maiores maxime quam.",
            "description": "Dolorem consectetur hic hic vel rerum eaque. Rerum delectus et. Et doloribus molestiae non.",
            "category": "Hat",
            "default_price": "244.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37916,
            "campus": "hr-rfe",
            "name": "The Otis Sunglasses",
            "slogan": "Ut at repudiandae alias aut aperiam consequatur expedita ab est.",
            "description": "Quasi placeat reiciendis quia inventore maxime in. Ullam qui vel aperiam dignissimos ut aut a. Cum ex rerum voluptatibus aperiam ut ullam dolores.",
            "category": "Sunglasses",
            "default_price": "101.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37917,
            "campus": "hr-rfe",
            "name": "Dillan 400 Socks",
            "slogan": "Non neque molestiae qui rerum omnis nisi maiores.",
            "description": "Occaecati alias debitis voluptas quis veniam impedit quis. Earum eligendi debitis pariatur est iste itaque maxime. Iste debitis error labore velit voluptates asperiores voluptatem vitae sed. Sint sed molestias quae occaecati. Temporibus dolorum ducimus vel neque repudiandae esse occaecati necessitatibus.",
            "category": "Socks",
            "default_price": "57.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37918,
            "campus": "hr-rfe",
            "name": "Preston Shirt",
            "slogan": "Eos excepturi voluptas necessitatibus.",
            "description": "Ab voluptatum soluta corporis quia voluptas. Consequatur accusantium voluptatum commodi ad aspernatur ut eius. Sed magni quaerat autem velit quas cum.",
            "category": "Shirt",
            "default_price": "83.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37919,
            "campus": "hr-rfe",
            "name": "Noe Slacks",
            "slogan": "Voluptatum sed velit non dignissimos nostrum quo expedita fugit et.",
            "description": "Similique vel voluptatem aliquid nemo impedit non omnis. Accusamus iste quas impedit illo provident. Aliquam aperiam amet magnam et.",
            "category": "Slacks",
            "default_price": "34.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37920,
            "campus": "hr-rfe",
            "name": "Daphne Sunglasses",
            "slogan": "Est eum ullam alias occaecati dolore molestias et.",
            "description": "Suscipit quam excepturi minus et id. Odit pariatur vero corrupti ut omnis dicta sint eaque. Quo molestiae debitis amet vero illo.",
            "category": "Sunglasses",
            "default_price": "129.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37921,
            "campus": "hr-rfe",
            "name": "Pansy Hoodie",
            "slogan": "Ut omnis iure aut sint nulla fugit aliquam eius.",
            "description": "Quasi omnis ut similique et dignissimos a et. Repellendus quasi reiciendis. Vel occaecati et unde et magni.",
            "category": "Hoodie",
            "default_price": "371.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37922,
            "campus": "hr-rfe",
            "name": "Carmelo Tank Top",
            "slogan": "Eaque officia eligendi doloremque optio alias.",
            "description": "Ut ex repellendus omnis saepe qui enim. Dolorem tempora rerum quo autem nesciunt. Exercitationem doloribus aliquid ea ea quaerat eos dolor et neque. Consectetur alias optio minus voluptatem voluptatem a rem alias voluptas.",
            "category": "Tank Top",
            "default_price": "923.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37923,
            "campus": "hr-rfe",
            "name": "John Socks",
            "slogan": "Omnis harum molestiae dolor nihil provident et voluptatem velit eius.",
            "description": "Ut suscipit et possimus harum doloribus. Unde velit et cumque quas aperiam aut sunt quisquam doloribus. Recusandae beatae libero consequatur quis in quas occaecati.",
            "category": "Socks",
            "default_price": "756.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37924,
            "campus": "hr-rfe",
            "name": "Marlene Skirt",
            "slogan": "Soluta molestiae qui quidem.",
            "description": "Quae quisquam earum fugiat commodi incidunt magnam. Laudantium ut et quia alias et sit repellat consequatur. Minima voluptatem magnam et sit.",
            "category": "Skirt",
            "default_price": "545.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37925,
            "campus": "hr-rfe",
            "name": "Johann Skirt",
            "slogan": "Non maxime in veniam et numquam voluptatem voluptas fugit asperiores.",
            "description": "Minus modi dolorem accusantium qui illum sunt iure dolorem voluptatum. Quam incidunt omnis quia dolor voluptas qui excepturi qui. A sint perferendis facere voluptatem alias necessitatibus molestiae quisquam molestiae. Fugit similique omnis dolorem in qui accusantium distinctio. Deleniti vitae officia nobis neque velit quisquam dolor et.",
            "category": "Skirt",
            "default_price": "746.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37926,
            "campus": "hr-rfe",
            "name": "Lola Coat",
            "slogan": "Laboriosam numquam nostrum reiciendis voluptates doloribus unde esse quo.",
            "description": "Nihil rerum odio officia sit itaque qui et. Et temporibus libero corporis blanditiis iure. Et est illo aliquid.",
            "category": "Coat",
            "default_price": "752.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37927,
            "campus": "hr-rfe",
            "name": "Leo Cap",
            "slogan": "Nulla fugit assumenda suscipit itaque in harum aut ipsam tempore.",
            "description": "Alias facilis unde dignissimos nesciunt omnis magnam provident magni voluptatum. Sed animi possimus vero pariatur nesciunt impedit incidunt. Non id quas deserunt quidem. Iusto officia quasi adipisci voluptatem facilis. Voluptatem animi sint omnis. Exercitationem animi nulla molestiae placeat dignissimos aut.",
            "category": "Cap",
            "default_price": "599.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37928,
            "campus": "hr-rfe",
            "name": "Josie 500 Jacket",
            "slogan": "Sit non non consequuntur sequi quis omnis iusto.",
            "description": "Autem magnam reiciendis. Distinctio fuga aspernatur et fugiat. Incidunt cum qui dolor ducimus ut autem deserunt nobis. Accusamus et aperiam ullam qui.",
            "category": "Jacket",
            "default_price": "993.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37929,
            "campus": "hr-rfe",
            "name": "Georgianna Shorts",
            "slogan": "Non delectus atque.",
            "description": "Quidem sunt qui. Omnis maiores deserunt est sit a quam architecto. Fuga saepe voluptas ipsa id ullam eos unde. Reiciendis est ut voluptas vitae minus tempore. Quo qui in sit sunt repudiandae voluptas libero doloremque quae.",
            "category": "Shorts",
            "default_price": "578.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37930,
            "campus": "hr-rfe",
            "name": "Loyal Shoes",
            "slogan": "Nihil sint nisi unde in deleniti quia quis tempora.",
            "description": "Id est qui delectus fugiat et quis. Quo adipisci fuga quo corporis velit maxime. Aut dolorem ipsa. Sunt quibusdam fugiat.",
            "category": "Shoes",
            "default_price": "922.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37931,
            "campus": "hr-rfe",
            "name": "Mercedes Jacket",
            "slogan": "Vitae ipsum ab ab sed.",
            "description": "Omnis deleniti quis id. Mollitia reiciendis blanditiis nesciunt. Adipisci inventore officiis fugit dolorum non enim ipsum ad molestias. Atque sed est enim corporis. Amet totam voluptate et corrupti placeat odio velit.",
            "category": "Jacket",
            "default_price": "48.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37932,
            "campus": "hr-rfe",
            "name": "Liza Coat",
            "slogan": "Neque laudantium debitis.",
            "description": "Est est excepturi veritatis veritatis. Ut facilis cupiditate maxime veritatis sed non odit magni. Maiores eius aliquid et voluptatem fugit reprehenderit sunt reprehenderit.",
            "category": "Coat",
            "default_price": "583.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37933,
            "campus": "hr-rfe",
            "name": "Roosevelt Coat",
            "slogan": "Ad quod est ut quam doloremque.",
            "description": "Ipsam quam et a aliquid. Et et aut aut itaque quo error recusandae. Voluptatem voluptatem quia. Porro impedit minus possimus esse sint. Quia maxime deleniti et rerum. Dolor deleniti recusandae repudiandae voluptas maiores animi.",
            "category": "Coat",
            "default_price": "356.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37934,
            "campus": "hr-rfe",
            "name": "Ayla Shirt",
            "slogan": "Reprehenderit et saepe distinctio blanditiis.",
            "description": "Est neque dolores sunt. Natus et consequatur temporibus. Itaque inventore ut ullam eveniet optio et delectus veniam magnam. Necessitatibus neque recusandae ut eum et ut accusamus et. Dolorem molestiae deserunt non sed vitae et esse vel.",
            "category": "Shirt",
            "default_price": "247.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37935,
            "campus": "hr-rfe",
            "name": "Presley Trousers",
            "slogan": "Repellendus suscipit illo itaque.",
            "description": "Placeat quo vero nobis illum error nam. Dolorum voluptatem dolor eius corrupti nobis assumenda aut tempore ut. Ratione sapiente placeat. Voluptas labore est officia inventore dolores tenetur iusto dolorem voluptatibus. A quod voluptas quaerat incidunt eum quidem et iure.",
            "category": "Trousers",
            "default_price": "77.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37936,
            "campus": "hr-rfe",
            "name": "The Velma Shorts",
            "slogan": "Illo sunt minus.",
            "description": "Qui iste ex magni quas pariatur rerum voluptatibus molestias exercitationem. Error nisi quia. Et iste quia blanditiis et ex qui esse in qui.",
            "category": "Shorts",
            "default_price": "345.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37937,
            "campus": "hr-rfe",
            "name": "Mavis Skirt",
            "slogan": "Doloribus laudantium vero perspiciatis sint deserunt.",
            "description": "Laborum sapiente adipisci aperiam quae. Delectus velit nihil. Eius autem expedita velit tenetur officiis deleniti dignissimos aut vero.",
            "category": "Skirt",
            "default_price": "508.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37938,
            "campus": "hr-rfe",
            "name": "Rubye Suit",
            "slogan": "Est voluptas aliquid.",
            "description": "Impedit dolore deleniti a atque rem laborum incidunt qui. Qui aut fugiat maxime quisquam error dolor aliquam. Doloremque et ut sapiente. Perspiciatis quo dolor numquam magni ut odio tenetur ex.",
            "category": "Suit",
            "default_price": "116.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37939,
            "campus": "hr-rfe",
            "name": "Brooklyn Socks",
            "slogan": "Voluptatum eum atque inventore qui sint.",
            "description": "Et deserunt sit velit et quis est laudantium aut soluta. Omnis assumenda nisi accusamus id nemo quia delectus. Est neque quia qui quas non quo sed similique saepe.",
            "category": "Socks",
            "default_price": "537.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37940,
            "campus": "hr-rfe",
            "name": "Jaida 1100 Hat",
            "slogan": "Incidunt molestiae voluptate sapiente.",
            "description": "Voluptatem qui inventore est. Quia odio ea voluptates ut deleniti ut. Occaecati omnis ipsa illum aut nisi recusandae mollitia deserunt quo. Sequi et sunt id non illum et.",
            "category": "Hat",
            "default_price": "34.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37941,
            "campus": "hr-rfe",
            "name": "Danielle Cap",
            "slogan": "Voluptatem sapiente perspiciatis nam odit molestiae ea ab numquam aliquid.",
            "description": "Dolorem a totam voluptatem. Facere vel molestiae soluta eum nesciunt necessitatibus ullam. Iusto recusandae rerum nobis amet. Id ex adipisci temporibus.",
            "category": "Cap",
            "default_price": "460.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37942,
            "campus": "hr-rfe",
            "name": "Sabina Socks",
            "slogan": "Sed magni voluptate repudiandae.",
            "description": "Libero consectetur eos sunt. Ea possimus quam aliquid facilis accusamus sit aspernatur. Et voluptates occaecati. Qui architecto tempora quia fuga mollitia quibusdam assumenda quia. Dolores voluptatem adipisci fuga voluptas nulla consectetur excepturi quo exercitationem.",
            "category": "Socks",
            "default_price": "159.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37943,
            "campus": "hr-rfe",
            "name": "Liliane Shorts",
            "slogan": "A velit temporibus officiis inventore.",
            "description": "Laborum eveniet dicta quo est. Fugiat perspiciatis aperiam corporis est cumque quo aut quidem. In velit aliquid sapiente accusamus error quam fugit. Quia qui animi fugiat. Reprehenderit accusamus quae ab asperiores aut.",
            "category": "Shorts",
            "default_price": "437.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37944,
            "campus": "hr-rfe",
            "name": "Dasia Hoodie",
            "slogan": "Minus dignissimos sit.",
            "description": "Omnis cupiditate eos sint sed dolore. Eos ut aperiam quae. Nisi quasi quaerat porro officiis aperiam et.",
            "category": "Hoodie",
            "default_price": "398.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37945,
            "campus": "hr-rfe",
            "name": "Nedra Shorts",
            "slogan": "Velit minima reiciendis placeat ut laudantium accusamus hic.",
            "description": "Id perspiciatis atque et ut quidem voluptatem alias at. Aut tempore aut voluptas dolorem consequatur saepe aut nesciunt. Aut accusamus expedita sed fugiat consequuntur. Qui consequatur quis mollitia quis quisquam fugiat optio. Dolores nostrum ratione at ad autem aliquam.",
            "category": "Shorts",
            "default_price": "420.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37946,
            "campus": "hr-rfe",
            "name": "Ada Sunglasses",
            "slogan": "Quos magni et.",
            "description": "Voluptatibus non enim voluptate illo. Ducimus placeat est facere maiores nam. Saepe sapiente perferendis tempora.",
            "category": "Sunglasses",
            "default_price": "861.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37947,
            "campus": "hr-rfe",
            "name": "Johnpaul Sweatpants",
            "slogan": "Amet neque ipsa temporibus id qui qui et.",
            "description": "Quisquam facere est voluptatem at eos ut quia eveniet. Inventore sunt rerum sed esse qui qui. Cum ipsam ratione.",
            "category": "Sweatpants",
            "default_price": "745.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37948,
            "campus": "hr-rfe",
            "name": "Enrique Tank Top",
            "slogan": "Voluptatem laudantium doloribus in tempore minus.",
            "description": "Tempore non maiores dolore et est voluptates nesciunt corporis voluptatem. Quae totam earum sed aliquam. Odit ut qui assumenda atque aspernatur tempore dolorum. Sit rerum velit placeat tempore incidunt minus earum exercitationem optio. Ea et ut neque.",
            "category": "Tank Top",
            "default_price": "973.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37949,
            "campus": "hr-rfe",
            "name": "Rowan 600 Boots",
            "slogan": "Dolores asperiores dicta iure odio saepe eligendi.",
            "description": "Omnis alias ut soluta quia et cupiditate perferendis voluptatem quibusdam. Reiciendis iure assumenda officiis. Placeat porro ut.",
            "category": "Boots",
            "default_price": "186.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37950,
            "campus": "hr-rfe",
            "name": "Ashtyn Cap",
            "slogan": "Optio veniam impedit nobis.",
            "description": "Ea exercitationem dolore a rerum. Voluptas fugiat quo amet aliquam ut voluptas delectus. Ea debitis consequatur nam non commodi repellendus perferendis enim voluptates. Esse qui eum officia mollitia aut unde incidunt.",
            "category": "Cap",
            "default_price": "663.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37951,
            "campus": "hr-rfe",
            "name": "Torrance Coat",
            "slogan": "Et iusto tenetur fugiat facilis dolore maxime dolor vitae.",
            "description": "Odio iste enim rerum in quas dolorum. Doloremque blanditiis et similique sed numquam laboriosam praesentium ut ut. Neque similique quod dolor amet. Suscipit voluptatum fugit ut sed odit. Provident velit ut tempore atque omnis. Assumenda repellat ut voluptatum commodi laborum nostrum.",
            "category": "Coat",
            "default_price": "779.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37952,
            "campus": "hr-rfe",
            "name": "Garnett Shoes",
            "slogan": "Dolore explicabo dolorum earum eum est rerum.",
            "description": "Autem perspiciatis nesciunt modi corrupti quos est. Distinctio amet doloremque illo ut dolore aut veritatis pariatur. Et et labore reiciendis non harum facere. Blanditiis minus expedita explicabo voluptatem vero accusantium magnam. Eum aut id tenetur.",
            "category": "Shoes",
            "default_price": "944.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37953,
            "campus": "hr-rfe",
            "name": "Milford Sweater",
            "slogan": "Et excepturi ut ad.",
            "description": "Voluptas rerum neque. Mollitia provident culpa dolor sequi consequuntur quos qui iste. Nam quod a est tenetur ut et. Labore expedita et cum quo. Voluptas et vero laborum. Id necessitatibus ad fuga aliquid est est.",
            "category": "Sweater",
            "default_price": "904.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37954,
            "campus": "hr-rfe",
            "name": "Destin Suit",
            "slogan": "Et ut et vel eum voluptas libero est dignissimos.",
            "description": "Dolorem quae eos consequatur qui debitis autem. Dolores at maxime. Aut eum est nesciunt quidem aut recusandae. Quos laudantium sed enim at et voluptatem.",
            "category": "Suit",
            "default_price": "349.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37955,
            "campus": "hr-rfe",
            "name": "Suzanne Backpack",
            "slogan": "Suscipit dolorem vel provident voluptatibus perspiciatis a consequuntur.",
            "description": "Voluptatem ea debitis eligendi sunt facilis rem qui non. Et laborum magnam ipsa voluptatem dolores dolor. Dolor ipsa temporibus voluptate velit dolores fugiat praesentium quae. Distinctio labore doloribus quis accusamus et et unde. Necessitatibus quod quidem esse sequi quas et odio dicta. Blanditiis qui voluptatum dolorem.",
            "category": "Backpack",
            "default_price": "124.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37956,
            "campus": "hr-rfe",
            "name": "Francesca Romper",
            "slogan": "A dicta ratione nostrum.",
            "description": "Occaecati itaque quo enim omnis cupiditate deserunt optio rem. Ut qui eos qui recusandae. Sed sint velit veritatis cupiditate voluptas natus. Est quo sint quod praesentium non. Eum ut totam accusantium.",
            "category": "Romper",
            "default_price": "652.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37957,
            "campus": "hr-rfe",
            "name": "Karl Shoes",
            "slogan": "Quis officiis voluptas placeat autem magnam occaecati quidem ab est.",
            "description": "Molestiae vero eum quia. Suscipit voluptatum ducimus sit quasi magni accusamus dolores dolorem. Assumenda sint suscipit et est praesentium delectus. Et ut ea ad voluptatem perferendis. Rem vero ut cum ex est doloribus et.",
            "category": "Shoes",
            "default_price": "720.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37958,
            "campus": "hr-rfe",
            "name": "Beulah Tank Top",
            "slogan": "Voluptas voluptatem cum assumenda.",
            "description": "Alias odio quae et. Possimus non recusandae aliquam eos excepturi. Nesciunt aut aut praesentium.",
            "category": "Tank Top",
            "default_price": "874.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37959,
            "campus": "hr-rfe",
            "name": "Elsie Hoodie",
            "slogan": "Quae non facere fugit fugit ut enim error voluptatem voluptas.",
            "description": "Officiis nostrum officiis et. Qui amet reprehenderit recusandae accusantium alias nam magnam. Sunt adipisci eum. Illum dolores adipisci consequuntur autem est. Ipsam est perspiciatis quos. Et dignissimos eligendi et ratione quod quaerat quos et.",
            "category": "Hoodie",
            "default_price": "192.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37960,
            "campus": "hr-rfe",
            "name": "Hayden Skirt",
            "slogan": "Quis iste eaque dolore accusantium vitae.",
            "description": "Quae tempora placeat ut cupiditate. Necessitatibus maiores aspernatur reprehenderit eaque est at ea. Ducimus rerum laudantium.",
            "category": "Skirt",
            "default_price": "712.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37961,
            "campus": "hr-rfe",
            "name": "Carleton Tank Top",
            "slogan": "Ratione et velit vitae maxime et veritatis.",
            "description": "Eos sed voluptas dolores laboriosam aliquam consequatur pariatur hic. Odit sequi nesciunt eos. Nihil eos fugiat inventore laboriosam et est optio. Est assumenda officiis rem enim consequatur ullam molestiae totam. Eveniet eos in maxime aut dolore est eum.",
            "category": "Tank Top",
            "default_price": "694.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37962,
            "campus": "hr-rfe",
            "name": "Jayden Shirt",
            "slogan": "Illo id reiciendis distinctio nihil.",
            "description": "Perferendis id consequatur laboriosam aliquid pariatur et. Veritatis perspiciatis explicabo modi omnis consequatur eum facilis. Molestias reiciendis eius. Occaecati et sed fugit voluptatem sit. Dolorem temporibus quia aperiam provident nam eius. Mollitia aspernatur officia non deleniti.",
            "category": "Shirt",
            "default_price": "656.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37963,
            "campus": "hr-rfe",
            "name": "Savannah Jacket",
            "slogan": "Quasi cum vitae.",
            "description": "Velit velit reprehenderit magnam aut sapiente id. Blanditiis facere facere odit veritatis qui vel tempora fugit. Autem dolorum maiores et minima blanditiis ex voluptas. Est eos dolorem unde. Animi qui impedit molestiae.",
            "category": "Jacket",
            "default_price": "249.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37964,
            "campus": "hr-rfe",
            "name": "Krystina Shoes",
            "slogan": "Et qui aut illum.",
            "description": "Sit velit dolore aliquam. Doloribus deleniti aut ut. Ad quibusdam aspernatur quaerat. Placeat cum eum corporis quod quos velit amet blanditiis.",
            "category": "Shoes",
            "default_price": "30.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37965,
            "campus": "hr-rfe",
            "name": "The Edd Suit",
            "slogan": "Id incidunt adipisci.",
            "description": "Sed est voluptatum voluptas. Aspernatur assumenda aut deserunt at quo quia. Eaque ab et enim. Sint cupiditate aut sit unde corrupti. Iusto numquam dolorum nihil tempore dolorum et reiciendis non. Repellat vero ab labore in sunt.",
            "category": "Suit",
            "default_price": "586.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37966,
            "campus": "hr-rfe",
            "name": "Magali Shoes",
            "slogan": "Nulla voluptates dicta voluptatem sint tempore et iure repellat deserunt.",
            "description": "Illum voluptas eum et iusto. Quam optio aliquam deserunt vel repellat molestiae et temporibus. Nobis dolor omnis explicabo deserunt officiis omnis. Accusamus neque omnis nulla adipisci. Inventore qui provident minus assumenda vel.",
            "category": "Shoes",
            "default_price": "221.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37967,
            "campus": "hr-rfe",
            "name": "Nora Shirt",
            "slogan": "Unde beatae fugit officia magnam dolorem et et ex.",
            "description": "Nobis ullam aut quasi officiis vel cum animi minus. Aut facilis sed est. Impedit veritatis molestiae doloremque odit nostrum voluptatem est illo molestias. Dicta ut optio ea molestiae hic perspiciatis. Quae deserunt delectus voluptas fuga expedita porro eligendi.",
            "category": "Shirt",
            "default_price": "604.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37968,
            "campus": "hr-rfe",
            "name": "The Pascale Hoodie",
            "slogan": "Esse voluptatem ut voluptatem quas vel ut.",
            "description": "Qui fugiat sint voluptas sequi asperiores accusamus eligendi et. Doloribus inventore a mollitia id dolorem perspiciatis qui. Quia ex illum. Autem ea ratione quo aspernatur dolor ut illo aut dolore.",
            "category": "Hoodie",
            "default_price": "126.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37969,
            "campus": "hr-rfe",
            "name": "Arjun Jacket",
            "slogan": "Harum dignissimos molestiae soluta eligendi voluptatem molestiae est quaerat.",
            "description": "Ipsa id in repellendus quia perspiciatis. Ut debitis id earum expedita. Ex quia rerum sit accusamus officia amet. Unde dignissimos rerum quam esse earum sed deleniti perspiciatis aliquam.",
            "category": "Jacket",
            "default_price": "194.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37970,
            "campus": "hr-rfe",
            "name": "Ludie Backpack",
            "slogan": "Velit a deserunt explicabo quibusdam nihil eum dolore voluptatem.",
            "description": "Assumenda natus aliquid. Voluptatem a eligendi officia asperiores omnis perferendis facilis suscipit. Ut nostrum quia expedita officiis eum labore laborum accusantium. Commodi aliquam distinctio officia est. Doloribus voluptatem cumque et nostrum vero.",
            "category": "Backpack",
            "default_price": "95.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37971,
            "campus": "hr-rfe",
            "name": "Gisselle Dress",
            "slogan": "Officia quis atque exercitationem minus.",
            "description": "Nihil aut voluptas aut et porro deleniti quibusdam non vel. A ipsa repellat voluptas et. Rerum et necessitatibus. Hic et recusandae quod. Iure beatae et aut.",
            "category": "Dress",
            "default_price": "690.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37972,
            "campus": "hr-rfe",
            "name": "Magdalen Pants",
            "slogan": "Ipsam et quae natus sit necessitatibus.",
            "description": "Excepturi molestiae ut sed omnis sed voluptatem quasi provident. Omnis vel rerum. Officia nobis aspernatur ut. Est aut occaecati praesentium autem voluptatem nostrum velit.",
            "category": "Pants",
            "default_price": "804.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37973,
            "campus": "hr-rfe",
            "name": "Ettie Jacket",
            "slogan": "Non consequatur voluptates sint qui.",
            "description": "Vel eveniet voluptatem enim sunt id commodi praesentium distinctio. Aut aut facilis voluptatem iure asperiores. Qui fuga nesciunt corporis. Unde est est. Magnam impedit qui. Ex sed voluptas.",
            "category": "Jacket",
            "default_price": "97.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37974,
            "campus": "hr-rfe",
            "name": "Drew Trousers",
            "slogan": "Et accusantium dolore sint ducimus.",
            "description": "Quo labore ratione blanditiis deserunt ipsum rerum facilis autem. Necessitatibus temporibus explicabo cupiditate sed illo odio incidunt eos. Deleniti nihil eligendi quia aspernatur vero.",
            "category": "Trousers",
            "default_price": "288.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37975,
            "campus": "hr-rfe",
            "name": "Kiarra Skirt",
            "slogan": "Totam vitae deleniti esse.",
            "description": "Dignissimos provident iusto enim quod voluptatem aut accusantium dolor. Quibusdam sed quas. Aut perferendis libero cumque veniam quam dolore officiis voluptas.",
            "category": "Skirt",
            "default_price": "13.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37976,
            "campus": "hr-rfe",
            "name": "Darby Boots",
            "slogan": "Vitae unde id at reprehenderit hic quos debitis.",
            "description": "Reprehenderit nihil sint error. Ex porro repellendus cum qui voluptates temporibus vel perferendis. Architecto illum placeat adipisci. Repudiandae quam sapiente rerum aliquam architecto veniam.",
            "category": "Boots",
            "default_price": "868.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37977,
            "campus": "hr-rfe",
            "name": "Kennedi Hat",
            "slogan": "Corporis in rerum beatae vel soluta dicta animi.",
            "description": "Quia magnam voluptatem aut sunt laboriosam dignissimos mollitia sed in. Rerum sit est possimus sit quia. Vel dolorem quod velit vel reprehenderit quis. Et sit nulla et autem ut vitae sunt eligendi.",
            "category": "Hat",
            "default_price": "359.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37978,
            "campus": "hr-rfe",
            "name": "Lelah Pants",
            "slogan": "Ipsam et blanditiis iure sunt cum facere sint.",
            "description": "Omnis exercitationem explicabo iste sit illo est impedit iste. Dolores culpa similique ut iure laboriosam amet. Neque et architecto voluptatum ratione voluptatem dolores. Natus saepe numquam in laborum. Voluptatum officia amet deserunt voluptatem aperiam consequatur. Recusandae vel consequatur est blanditiis sunt.",
            "category": "Pants",
            "default_price": "306.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37979,
            "campus": "hr-rfe",
            "name": "Elise 950 Shoes",
            "slogan": "Quas est voluptas nisi voluptas id eligendi.",
            "description": "Minus tempora impedit enim temporibus voluptate hic molestias et nam. Est nemo qui laboriosam temporibus tenetur et illo voluptas et. Et voluptatem esse vel eaque consequatur enim velit magnam error. Mollitia expedita laudantium repellat assumenda ut repellendus. Distinctio aliquid voluptas deleniti vel quam voluptatem sint distinctio.",
            "category": "Shoes",
            "default_price": "23.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37980,
            "campus": "hr-rfe",
            "name": "Victor Hoodie",
            "slogan": "Iure debitis et in sit labore nisi est doloremque.",
            "description": "Possimus placeat soluta corporis atque ullam. Alias quos quia nemo aut tempora voluptatem in exercitationem. Est quis numquam voluptate esse voluptatum provident dolores. Eaque deserunt qui est molestiae ut deserunt id. Dignissimos et sit non et natus. Et et repudiandae sed ipsam porro asperiores aliquid culpa.",
            "category": "Hoodie",
            "default_price": "711.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37981,
            "campus": "hr-rfe",
            "name": "Tracy Shorts",
            "slogan": "Qui nesciunt beatae accusamus similique commodi nesciunt.",
            "description": "Cum quia rerum. Officia minima velit et enim non quia sequi dignissimos ratione. Magnam quasi molestias laudantium rem rerum explicabo voluptatem consequuntur nesciunt.",
            "category": "Shorts",
            "default_price": "111.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37982,
            "campus": "hr-rfe",
            "name": "Juliana Romper",
            "slogan": "Non et accusamus nihil.",
            "description": "Cumque voluptatem et aperiam sit eaque qui qui. Ipsa in cum ullam nemo. Molestiae ea voluptatibus debitis repudiandae. Vel nemo ad rem. Officia beatae eligendi dignissimos.",
            "category": "Romper",
            "default_price": "422.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37983,
            "campus": "hr-rfe",
            "name": "Leon 700 Pants",
            "slogan": "Et saepe dicta ut non ut.",
            "description": "Non laboriosam doloribus odio ipsa. Sequi consequuntur non. Nihil quisquam voluptatum animi. Beatae expedita odit error aut. Libero voluptatibus unde occaecati quia rerum omnis. Qui et atque impedit repellat ratione maxime eligendi voluptatem.",
            "category": "Pants",
            "default_price": "775.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37984,
            "campus": "hr-rfe",
            "name": "Eusebio Tank Top",
            "slogan": "Veniam dolore voluptatibus excepturi sit deserunt.",
            "description": "Perferendis eum cumque qui dolor. Quasi assumenda necessitatibus. Dolorem dolorem sed iusto natus. Neque id asperiores est eum beatae qui quod.",
            "category": "Tank Top",
            "default_price": "256.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37985,
            "campus": "hr-rfe",
            "name": "Marcia Sunglasses",
            "slogan": "Repellendus modi eos magnam incidunt officia beatae.",
            "description": "Culpa adipisci vero similique quae error commodi. Eveniet atque quia aliquam. Est nostrum magni voluptatum atque pariatur atque. Quidem ut quos ad dolor. Repellendus cumque dolor doloremque. Harum sapiente velit sint nam non totam et.",
            "category": "Sunglasses",
            "default_price": "33.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37986,
            "campus": "hr-rfe",
            "name": "Carol Hoodie",
            "slogan": "Qui maiores et dignissimos doloremque sunt numquam nulla sed porro.",
            "description": "Repellendus praesentium quia incidunt earum. Voluptate commodi minima ut ad vitae voluptas nesciunt. Velit nam quae facilis. Alias debitis earum aperiam. Modi ea dolorem at laboriosam aut nostrum dolores. Reiciendis quidem sint sed.",
            "category": "Hoodie",
            "default_price": "20.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37987,
            "campus": "hr-rfe",
            "name": "The Maybelle Cap",
            "slogan": "Ipsum voluptatem velit.",
            "description": "Eum quia sint esse qui praesentium dolores quia est saepe. Odit atque eaque sit. Eos similique eius quia ipsam eaque expedita voluptate nulla ab.",
            "category": "Cap",
            "default_price": "686.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37988,
            "campus": "hr-rfe",
            "name": "Kirstin 100 Romper",
            "slogan": "Quo quidem earum ad cumque possimus consequuntur similique.",
            "description": "Hic perspiciatis quo omnis. Doloribus ea deserunt ratione dolorem fugiat necessitatibus. Consectetur quae quia saepe perspiciatis cupiditate vel sunt. Accusamus aut error optio molestias voluptatem.",
            "category": "Romper",
            "default_price": "349.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37989,
            "campus": "hr-rfe",
            "name": "Owen Sunglasses",
            "slogan": "Voluptas consectetur id aspernatur quis aut rerum tempore ut incidunt.",
            "description": "Omnis ut voluptatem enim incidunt eos. Molestias unde nemo dolore excepturi tenetur libero. Aut et quam. Atque et dolores velit voluptas placeat est voluptas dolorem.",
            "category": "Sunglasses",
            "default_price": "80.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37990,
            "campus": "hr-rfe",
            "name": "Ricky 150 Sunglasses",
            "slogan": "Quia quia est.",
            "description": "Culpa ut rerum. Quia occaecati et. Amet voluptatibus vero aut consequatur dicta qui assumenda qui voluptates.",
            "category": "Sunglasses",
            "default_price": "112.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37991,
            "campus": "hr-rfe",
            "name": "Megane Socks",
            "slogan": "Qui quasi id voluptates eos aspernatur eos excepturi.",
            "description": "Sapiente dolores minus nulla similique in omnis alias ea aut. Optio quo dolorem ipsam enim est est sint. Reiciendis dolores iure vel cupiditate. Quod nihil blanditiis hic sequi dolorem.",
            "category": "Socks",
            "default_price": "151.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37992,
            "campus": "hr-rfe",
            "name": "Keanu Slacks",
            "slogan": "Minus laboriosam et qui repudiandae accusamus voluptatum iusto autem.",
            "description": "Sit omnis eveniet dolores aut est eum. Aut cumque molestiae accusantium ad odio neque esse dicta. Qui eius necessitatibus error vitae et facilis. Est ut tempora a quo quia nihil sapiente. Corrupti quaerat accusantium.",
            "category": "Slacks",
            "default_price": "889.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37993,
            "campus": "hr-rfe",
            "name": "Lois Shoes",
            "slogan": "Quo quasi hic dignissimos consequatur in occaecati.",
            "description": "Reiciendis inventore dolorum. Occaecati nulla consectetur dolorem voluptatem reprehenderit non et. Ipsa deserunt tempora eveniet. Ut ut unde illum magnam distinctio. Accusamus ut accusamus.",
            "category": "Shoes",
            "default_price": "737.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37994,
            "campus": "hr-rfe",
            "name": "Velma Sunglasses",
            "slogan": "Velit repellendus harum harum nesciunt sunt exercitationem.",
            "description": "Nulla incidunt deleniti ut sapiente. Ab doloremque enim quo assumenda non illum consequuntur est. Quo et similique eveniet fugiat rerum.",
            "category": "Sunglasses",
            "default_price": "907.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37995,
            "campus": "hr-rfe",
            "name": "Domenick Hat",
            "slogan": "Commodi tempora omnis.",
            "description": "Omnis maxime autem sapiente odit vero et. Labore et qui fugit magni corporis excepturi quo non libero. Amet et architecto minus.",
            "category": "Hat",
            "default_price": "367.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37996,
            "campus": "hr-rfe",
            "name": "Carmella Dress",
            "slogan": "Provident et ducimus eos vel quia sit.",
            "description": "Doloremque ab quam architecto sit saepe totam. Sunt ut neque inventore voluptate. Et necessitatibus voluptatem asperiores molestiae.",
            "category": "Dress",
            "default_price": "321.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37997,
            "campus": "hr-rfe",
            "name": "Camren Shoes",
            "slogan": "Ut ullam aut est.",
            "description": "Accusamus odit consequatur est qui suscipit officiis. Et qui nihil et. Dolor magnam sint officiis natus voluptas est. Ut eveniet vitae occaecati qui atque animi.",
            "category": "Shoes",
            "default_price": "931.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37998,
            "campus": "hr-rfe",
            "name": "Keyon Socks",
            "slogan": "Consequatur qui nemo est aut deleniti assumenda.",
            "description": "Dignissimos sit aut. Aliquam aliquid hic. Possimus dolor at laboriosam.",
            "category": "Socks",
            "default_price": "413.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 37999,
            "campus": "hr-rfe",
            "name": "Katlyn Sweatpants",
            "slogan": "Ipsa deleniti in unde omnis ut non.",
            "description": "Ut velit quasi provident fuga quis alias nobis sed voluptas. Architecto repellendus ut. Autem dolores facilis ullam.",
            "category": "Sweatpants",
            "default_price": "185.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38000,
            "campus": "hr-rfe",
            "name": "River Heels",
            "slogan": "Id rerum ducimus in qui eum quo ullam consequatur quia.",
            "description": "Voluptatem officia esse provident suscipit quidem saepe ut eos. Qui ad in ut est et. Distinctio amet aut quibusdam sequi quia mollitia. Voluptas quia unde dolores quam dolorem maiores. Sed perspiciatis accusantium est dicta. Voluptas rem omnis consequatur atque at assumenda ducimus.",
            "category": "Heels",
            "default_price": "939.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38001,
            "campus": "hr-rfe",
            "name": "The Merritt Hoodie",
            "slogan": "Consequatur ad iste.",
            "description": "Optio omnis repellendus et blanditiis exercitationem quia tenetur pariatur. Excepturi qui ad. Doloremque dicta neque iusto iusto velit rerum minus officia cumque. Repellat delectus sunt accusamus incidunt blanditiis et excepturi.",
            "category": "Hoodie",
            "default_price": "403.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38002,
            "campus": "hr-rfe",
            "name": "Charity Hat",
            "slogan": "Vel neque temporibus quasi dolor eum magnam iure voluptatem et.",
            "description": "Nesciunt non libero consequatur perferendis vel debitis doloribus magni. Et occaecati consectetur est qui. Quos porro qui nostrum optio ut omnis sit iusto magnam. Et non aperiam laborum dolor in. Similique et id debitis quasi et.",
            "category": "Hat",
            "default_price": "248.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38003,
            "campus": "hr-rfe",
            "name": "Federico Sweater",
            "slogan": "Repudiandae expedita sit et.",
            "description": "Excepturi occaecati enim sunt eos voluptates dolor ex optio. Nesciunt harum qui. Maxime sit voluptatem. Hic recusandae delectus et. Asperiores quisquam aut. Quaerat sed earum voluptatibus.",
            "category": "Sweater",
            "default_price": "431.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38004,
            "campus": "hr-rfe",
            "name": "Raphaelle 1150 Tank Top",
            "slogan": "Qui aut reprehenderit aut.",
            "description": "Nam iusto ad nemo voluptas aut molestias rerum. Est aut eveniet non pariatur sit a quia. Architecto sit minima laudantium quia et. Non similique voluptatem velit magni amet veniam.",
            "category": "Tank Top",
            "default_price": "461.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38005,
            "campus": "hr-rfe",
            "name": "Scot Tank Top",
            "slogan": "Qui necessitatibus et vitae itaque eos omnis impedit.",
            "description": "Ab quia quis deleniti ratione ut. Consequatur perferendis expedita enim aliquid et. Eos ex voluptate mollitia ut soluta.",
            "category": "Tank Top",
            "default_price": "259.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38006,
            "campus": "hr-rfe",
            "name": "Rae Boots",
            "slogan": "Tempora quos quaerat aut explicabo voluptas recusandae explicabo possimus.",
            "description": "Rerum quod a minima illo impedit temporibus fuga. Aut eum est nobis molestiae et mollitia nobis numquam id. Sit ea sit aperiam impedit. Sed deserunt voluptatem ut accusamus qui.",
            "category": "Boots",
            "default_price": "46.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38007,
            "campus": "hr-rfe",
            "name": "Gene 500 Sunglasses",
            "slogan": "Vitae vel rerum repellendus veniam nisi a ut ex.",
            "description": "Exercitationem quaerat dolorum. Iusto aut debitis error non ullam minus. Autem quibusdam amet sint omnis. Est dignissimos dolor quisquam. Quia ea beatae eos minus consequuntur quo facilis facilis quos. Sit nobis aut in neque quis eaque perspiciatis quis reiciendis.",
            "category": "Sunglasses",
            "default_price": "897.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38008,
            "campus": "hr-rfe",
            "name": "Myriam 1450 Sweatpants",
            "slogan": "Quo aspernatur est delectus vel quia non rerum in.",
            "description": "Quia ducimus dolorem. Id placeat commodi cupiditate quas a. Minima sequi qui sit est accusamus ut consequatur. Eos odit dolor commodi omnis in maxime assumenda. Cum veritatis iure placeat voluptatem voluptatem qui. Accusantium sequi hic quisquam quisquam consectetur sunt facere aut voluptate.",
            "category": "Sweatpants",
            "default_price": "20.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38009,
            "campus": "hr-rfe",
            "name": "Claudia Backpack",
            "slogan": "Commodi quasi cumque itaque similique voluptatum.",
            "description": "Esse aspernatur dolor aut asperiores accusantium laborum modi. Sunt eos ex quod omnis optio. Aut tenetur quia deleniti quisquam eaque. Qui adipisci facilis labore aut et.",
            "category": "Backpack",
            "default_price": "723.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38010,
            "campus": "hr-rfe",
            "name": "Kristofer Sweatpants",
            "slogan": "Et commodi sed et consequuntur odio cumque.",
            "description": "Qui hic repellat nam labore animi. Libero dolor molestiae eveniet adipisci excepturi. At voluptas et id.",
            "category": "Sweatpants",
            "default_price": "76.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38011,
            "campus": "hr-rfe",
            "name": "Myron Jacket",
            "slogan": "Consectetur odio et eaque minus.",
            "description": "Itaque molestias beatae vitae rerum delectus quisquam ab facilis voluptatem. Quisquam suscipit aperiam consequatur. Non aperiam eos nobis debitis. Autem laudantium quo assumenda.",
            "category": "Jacket",
            "default_price": "651.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38012,
            "campus": "hr-rfe",
            "name": "Emelie 0 Hoodie",
            "slogan": "Fugit quisquam pariatur inventore odio quia voluptatem qui qui.",
            "description": "Pariatur aut quia accusamus iusto quae. Ea esse deleniti. Nobis dicta animi quis. Ut qui est minus tempore quae itaque dolore sed et. Voluptas ut odio laborum quis delectus laborum. Harum consequatur tempore recusandae consectetur.",
            "category": "Hoodie",
            "default_price": "376.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38013,
            "campus": "hr-rfe",
            "name": "Jeramy Backpack",
            "slogan": "Debitis distinctio unde et.",
            "description": "Ut perferendis rerum fuga. Omnis ut minus. Cupiditate qui dolores et.",
            "category": "Backpack",
            "default_price": "921.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38014,
            "campus": "hr-rfe",
            "name": "Pascale Socks",
            "slogan": "Vitae sunt commodi occaecati ipsam quo eos aliquam est sint.",
            "description": "Aut similique laudantium molestias facilis ab fugiat quisquam. Nulla consequatur atque voluptates commodi. At eius esse cumque autem distinctio voluptatem consectetur et voluptatem.",
            "category": "Socks",
            "default_price": "734.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38015,
            "campus": "hr-rfe",
            "name": "Leora Shoes",
            "slogan": "Maxime nulla quia aspernatur dolores.",
            "description": "Libero officiis sequi vel. Doloremque neque consequatur minus quisquam. Est non ipsum adipisci rem aperiam. Vel incidunt repudiandae provident porro qui fugit est.",
            "category": "Shoes",
            "default_price": "578.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38016,
            "campus": "hr-rfe",
            "name": "Carlotta Backpack",
            "slogan": "Maxime asperiores vitae in laborum.",
            "description": "Beatae deleniti saepe neque quia et dolorem. Quo facilis vel accusamus et est. Officiis et ipsa vel accusantium molestiae qui similique.",
            "category": "Backpack",
            "default_price": "305.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38017,
            "campus": "hr-rfe",
            "name": "Leslie Suit",
            "slogan": "Consequatur suscipit ipsam reiciendis.",
            "description": "Aspernatur sit quis. Eos itaque omnis ab pariatur facilis culpa quis et. Excepturi doloremque rerum sint ut atque eaque iste rerum. Quae deleniti ut dolorem modi incidunt. Non inventore non repellendus quos odit.",
            "category": "Suit",
            "default_price": "189.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38018,
            "campus": "hr-rfe",
            "name": "Lindsey Skirt",
            "slogan": "Est nihil animi dicta ut voluptates voluptatem.",
            "description": "Eum nam nulla est magnam repellat. Veritatis aliquam est consectetur eligendi qui corporis. Ullam consectetur et qui blanditiis. Voluptatum rem illum quas nesciunt sit ut dolorem et. Dolor voluptas placeat totam dolorem sit modi id accusamus. Sunt labore iure.",
            "category": "Skirt",
            "default_price": "612.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38019,
            "campus": "hr-rfe",
            "name": "Pearl Sunglasses",
            "slogan": "Mollitia quo doloribus odit fuga reprehenderit et.",
            "description": "Animi ratione inventore ratione. Numquam hic consectetur qui saepe velit eveniet. Sunt deleniti ut officiis ipsum et et ducimus dolorem. Dolore quis assumenda inventore vel suscipit natus ea. Sint voluptas rerum culpa quia.",
            "category": "Sunglasses",
            "default_price": "814.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38020,
            "campus": "hr-rfe",
            "name": "Elody Shoes",
            "slogan": "Corporis sunt qui harum iusto dolor ut aspernatur voluptatum officia.",
            "description": "Accusantium dignissimos est deleniti ut sit ut est ipsam. Incidunt dolorem porro iure velit quis. Ut minima et. Tempore quo et dolor minus vel enim. Enim fuga impedit dignissimos qui nobis. Quisquam cum dolorem perspiciatis qui accusamus.",
            "category": "Shoes",
            "default_price": "834.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38021,
            "campus": "hr-rfe",
            "name": "Bridget Trousers",
            "slogan": "Et culpa fugiat quaerat incidunt tempora et velit.",
            "description": "Vel quos voluptatem saepe alias ullam. Temporibus provident non ut eum rem quia fuga possimus. Natus ut a praesentium qui blanditiis est quo labore est. Quibusdam voluptas vel.",
            "category": "Trousers",
            "default_price": "629.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38022,
            "campus": "hr-rfe",
            "name": "Dora Cap",
            "slogan": "Dolorem nihil sunt voluptate rerum quia ex et.",
            "description": "Quo aut in eveniet aut quidem. In omnis et mollitia necessitatibus sed voluptatem animi et. Sed minus in molestiae vitae.",
            "category": "Cap",
            "default_price": "364.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38023,
            "campus": "hr-rfe",
            "name": "The Guillermo Trousers",
            "slogan": "Nulla est in fugiat.",
            "description": "Esse fugit explicabo deserunt dolores et. Cupiditate veniam vel est velit eligendi voluptatem mollitia officiis expedita. Ut aliquid dolorem quae dolorem laudantium quas et. Sit culpa iusto. Aut quae veritatis quod. Aut et non est cum ut laudantium iure.",
            "category": "Trousers",
            "default_price": "363.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38024,
            "campus": "hr-rfe",
            "name": "Ezra 750 Tank Top",
            "slogan": "Doloremque dolores asperiores magnam natus veniam.",
            "description": "Incidunt occaecati et omnis ratione quidem ex odit. Tenetur ut eius eveniet fugit impedit cumque voluptatem. Quis perferendis quia vel modi autem velit. Alias neque consectetur incidunt expedita veritatis ducimus sapiente voluptatem. Eos et qui aut magnam minus quis provident officia. Quia animi nam distinctio.",
            "category": "Tank Top",
            "default_price": "871.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38025,
            "campus": "hr-rfe",
            "name": "Maynard Socks",
            "slogan": "Quo exercitationem amet quod dolores et velit.",
            "description": "Dolorem qui sapiente et possimus a maxime expedita. Est tempore tempore sed ut repudiandae. Temporibus beatae ex et quas omnis totam. Deleniti sapiente quia perspiciatis.",
            "category": "Socks",
            "default_price": "449.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38026,
            "campus": "hr-rfe",
            "name": "Kenyatta Pants",
            "slogan": "Excepturi perspiciatis vel minus facere hic.",
            "description": "Dolorem dolor non sint quisquam dolorum pariatur. Quasi nemo et pariatur praesentium aspernatur deserunt perferendis. Adipisci animi similique.",
            "category": "Pants",
            "default_price": "759.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38027,
            "campus": "hr-rfe",
            "name": "Muriel Socks",
            "slogan": "Debitis ad iste non suscipit et ex delectus.",
            "description": "Doloribus occaecati ut reiciendis nemo dignissimos. Doloribus vel accusamus veritatis aut voluptas perferendis et eius enim. Voluptate doloribus nemo voluptatem est voluptatem qui magnam. Et asperiores laboriosam molestias blanditiis quibusdam officia natus delectus. Reprehenderit dolorum qui doloribus voluptate soluta ut. Omnis voluptatem tenetur rem ut eius enim rerum corporis delectus.",
            "category": "Socks",
            "default_price": "743.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38028,
            "campus": "hr-rfe",
            "name": "Rachael Romper",
            "slogan": "Eum velit ab id cum repellat perspiciatis sit omnis.",
            "description": "Iusto officiis et eaque possimus possimus id quia laudantium. Placeat ipsa qui dolor exercitationem expedita culpa magni quod deleniti. Est quia neque.",
            "category": "Romper",
            "default_price": "841.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38029,
            "campus": "hr-rfe",
            "name": "Kaela Jacket",
            "slogan": "Libero magni hic earum et rem et sunt odio omnis.",
            "description": "Libero error sapiente. Rerum velit veritatis reiciendis accusamus eos. Eveniet omnis rerum provident placeat ea in deserunt.",
            "category": "Jacket",
            "default_price": "402.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38030,
            "campus": "hr-rfe",
            "name": "Gabrielle Boots",
            "slogan": "Et voluptatem natus dolor repellat.",
            "description": "Ut perspiciatis nam occaecati. Temporibus sint dolorem nostrum. Pariatur saepe esse qui mollitia eos doloribus. Corrupti laudantium sed aut quis ullam est quisquam et. Sapiente amet in distinctio rerum quia.",
            "category": "Boots",
            "default_price": "919.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38031,
            "campus": "hr-rfe",
            "name": "Jeanne Pants",
            "slogan": "Quae maxime ex alias voluptatem quia consectetur.",
            "description": "Consequatur placeat nihil dolor. Repellat omnis quo consequuntur sapiente aut voluptatem deserunt eum architecto. Blanditiis necessitatibus animi et ratione ut nulla. Earum fugiat nihil doloremque ratione cupiditate itaque nemo. Reiciendis dolor molestiae qui molestiae maxime consequatur. Consectetur explicabo unde quidem ipsam quia reiciendis amet dolorem.",
            "category": "Pants",
            "default_price": "156.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38032,
            "campus": "hr-rfe",
            "name": "Lemuel Coat",
            "slogan": "Quaerat repudiandae facilis ducimus sed maxime omnis quod explicabo et.",
            "description": "Amet culpa non modi quibusdam repellendus vitae inventore. Aut nemo culpa qui dignissimos aut consectetur quas consequatur. Magnam nostrum atque vero perferendis. Sint ducimus enim repellat in. Natus eum totam aut incidunt eos eaque exercitationem.",
            "category": "Coat",
            "default_price": "336.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38033,
            "campus": "hr-rfe",
            "name": "Jamarcus Sunglasses",
            "slogan": "Ullam et et officia a aspernatur ipsam explicabo enim.",
            "description": "Ipsam incidunt enim placeat impedit enim labore fugit quasi. Sunt nisi totam animi delectus cum accusantium consequatur recusandae. Voluptatum sint laborum aliquam expedita neque amet laboriosam. Laboriosam nostrum quaerat.",
            "category": "Sunglasses",
            "default_price": "927.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38034,
            "campus": "hr-rfe",
            "name": "Jermaine Backpack",
            "slogan": "Sunt quaerat qui.",
            "description": "Repudiandae facere perspiciatis est quae fugit. Quam reiciendis dolore natus magni. Nemo sed illum.",
            "category": "Backpack",
            "default_price": "114.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38035,
            "campus": "hr-rfe",
            "name": "Beryl Shorts",
            "slogan": "Repellendus itaque est qui labore quos in quibusdam.",
            "description": "Quod magnam vitae totam laborum. Dignissimos explicabo sit soluta. Quia atque voluptas pariatur amet assumenda aut blanditiis. Ut autem omnis ea quos qui.",
            "category": "Shorts",
            "default_price": "296.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38036,
            "campus": "hr-rfe",
            "name": "Lynn Backpack",
            "slogan": "Et laudantium et vero recusandae qui sequi.",
            "description": "Impedit qui ducimus. Alias et sit odit exercitationem consectetur est. Est praesentium aut. Sit nulla dignissimos qui rem voluptas illum nulla eos eum. Qui cumque ut et.",
            "category": "Backpack",
            "default_price": "461.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38037,
            "campus": "hr-rfe",
            "name": "Dena Hat",
            "slogan": "Quidem et expedita.",
            "description": "Ullam labore et illo. Impedit occaecati ea voluptatem sunt. Voluptates voluptatibus numquam. Explicabo non rerum nisi. Iusto laboriosam rerum dolorum rerum qui error aut et.",
            "category": "Hat",
            "default_price": "798.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38038,
            "campus": "hr-rfe",
            "name": "Carolyne Hoodie",
            "slogan": "A debitis ducimus quia eum.",
            "description": "Corporis ipsum ut voluptate praesentium sit itaque et. Nulla voluptates fuga ut et voluptatem enim. Rerum qui quidem consectetur quia. A et enim dolorum. Sed dolores tempora et reprehenderit eaque est eos et. Suscipit doloribus recusandae hic vitae saepe repudiandae id qui.",
            "category": "Hoodie",
            "default_price": "232.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38039,
            "campus": "hr-rfe",
            "name": "Rahul Suit",
            "slogan": "Eos libero atque quia.",
            "description": "Aspernatur qui at. Illum praesentium omnis alias. Assumenda omnis magnam libero. Blanditiis accusamus quasi qui.",
            "category": "Suit",
            "default_price": "327.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38040,
            "campus": "hr-rfe",
            "name": "Melyssa Tank Top",
            "slogan": "Aperiam et tenetur sunt quia a ducimus assumenda.",
            "description": "Necessitatibus deserunt sint ut. Reprehenderit dolores qui provident soluta rerum enim rerum sunt. Hic quas inventore neque sint adipisci ut. Molestiae repellat quisquam. Nemo sit optio recusandae voluptatem vero aspernatur. Doloremque consequatur consequatur possimus amet.",
            "category": "Tank Top",
            "default_price": "752.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38041,
            "campus": "hr-rfe",
            "name": "Terence Sweater",
            "slogan": "Accusantium enim maiores alias.",
            "description": "Nihil ea ad voluptatem ipsum est. Asperiores aut accusantium. Voluptas at ipsum possimus sit debitis ratione voluptatibus consequatur. Maiores iure perspiciatis repellendus aut. Ut quia rerum. Et qui aliquam consequuntur non facere sed iste.",
            "category": "Sweater",
            "default_price": "393.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38042,
            "campus": "hr-rfe",
            "name": "Retha Slacks",
            "slogan": "Cupiditate non quisquam consectetur sed neque delectus velit veritatis.",
            "description": "Consequatur assumenda est eum id aut optio sapiente modi odio. Et explicabo error et expedita explicabo quisquam ut ab. Asperiores sint porro et nulla est ab nulla mollitia laborum. Voluptatem non repudiandae.",
            "category": "Slacks",
            "default_price": "981.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38043,
            "campus": "hr-rfe",
            "name": "Nils Slacks",
            "slogan": "Eligendi et consequatur illum dicta.",
            "description": "Enim repudiandae tempora quasi expedita maiores consequatur et. Nemo ea pariatur. Harum hic minus asperiores architecto. Harum numquam odio sit odit est id illo nisi porro.",
            "category": "Slacks",
            "default_price": "845.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38044,
            "campus": "hr-rfe",
            "name": "Lillie Shirt",
            "slogan": "Non laudantium voluptates nulla dolor.",
            "description": "Deserunt ut et. Maiores repudiandae perspiciatis assumenda. Aut neque ea a aliquid necessitatibus atque optio eos. Voluptatem animi enim enim eaque voluptatem dolor id harum pariatur. Excepturi saepe dolorem sit velit iure eum mollitia accusamus. Aut qui in dolor enim est quae quia unde enim.",
            "category": "Shirt",
            "default_price": "57.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38045,
            "campus": "hr-rfe",
            "name": "Lurline Jacket",
            "slogan": "Corrupti asperiores nihil voluptatem qui sit.",
            "description": "Rerum eaque quisquam. Ducimus qui tenetur quia iure eos similique perferendis accusantium accusantium. Non autem corporis dolores repellat aut velit voluptatum. Aut ex quia quaerat sunt voluptates amet repudiandae accusantium eveniet. Similique cumque ea aut. Exercitationem reprehenderit impedit facilis magnam.",
            "category": "Jacket",
            "default_price": "740.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38046,
            "campus": "hr-rfe",
            "name": "Annamarie Skirt",
            "slogan": "Eos qui id perspiciatis consectetur cum.",
            "description": "Est laudantium neque nobis rerum. Sed iure sunt. Corporis tenetur dolorem voluptas accusamus ut delectus. Veritatis dignissimos dolorem. Laboriosam ut dolorem et maiores quos ut. Et nulla aut minus veniam voluptatem quos.",
            "category": "Skirt",
            "default_price": "759.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38047,
            "campus": "hr-rfe",
            "name": "Timmy Heels",
            "slogan": "Inventore labore vero.",
            "description": "At veniam quos mollitia eaque cumque accusamus nostrum. Vitae vitae eveniet omnis non laudantium recusandae sint modi. Autem hic incidunt qui suscipit rerum sunt. Iusto minima autem expedita debitis sed sit est et.",
            "category": "Heels",
            "default_price": "256.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38048,
            "campus": "hr-rfe",
            "name": "Marley Socks",
            "slogan": "Nemo et ipsam laboriosam provident corporis.",
            "description": "Ea atque nulla hic reprehenderit sit ea. Placeat sed ut distinctio. Dignissimos voluptates quos officiis. Non sint suscipit quibusdam minus voluptas qui quia rerum. Asperiores explicabo ea. Id sed aut voluptas.",
            "category": "Socks",
            "default_price": "670.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38049,
            "campus": "hr-rfe",
            "name": "Wanda Trousers",
            "slogan": "Harum eaque magnam aut et fugit quia dolorem.",
            "description": "Error delectus sint. Fuga ut blanditiis debitis nulla ipsum aut saepe porro sed. Qui cupiditate sit ut unde. Quia quia enim totam qui dolor qui mollitia occaecati.",
            "category": "Trousers",
            "default_price": "880.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38050,
            "campus": "hr-rfe",
            "name": "Otto Boots",
            "slogan": "Soluta provident consequatur itaque quo non aut pariatur.",
            "description": "Aliquid mollitia eum ab quae doloribus voluptatem asperiores. Itaque asperiores in id necessitatibus. Praesentium enim aliquam itaque molestias. Voluptatem ut distinctio laboriosam voluptatum repellat reiciendis.",
            "category": "Boots",
            "default_price": "583.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38051,
            "campus": "hr-rfe",
            "name": "Cristopher Romper",
            "slogan": "Neque minima corrupti qui dolorum quibusdam voluptas dolorum sint et.",
            "description": "At dolores earum sit et omnis qui necessitatibus aut et. Qui qui laborum. Incidunt culpa ut doloremque. Porro ut quasi optio rem consectetur ad incidunt ut autem.",
            "category": "Romper",
            "default_price": "559.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38052,
            "campus": "hr-rfe",
            "name": "Jakob Pants",
            "slogan": "Et provident beatae nulla doloribus qui.",
            "description": "Recusandae facere fugit dignissimos sunt sint a consequatur. Qui ratione velit in eum. Maiores quibusdam rerum omnis consequuntur at impedit nihil.",
            "category": "Pants",
            "default_price": "61.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38053,
            "campus": "hr-rfe",
            "name": "Clement Sunglasses",
            "slogan": "Omnis error et est rerum fugit itaque voluptatem.",
            "description": "Laudantium consequatur doloribus soluta nulla omnis voluptatem magnam similique consequatur. Sed distinctio sed minus nam fuga modi. Dicta ipsam ut consequatur minima officiis possimus maxime sit. Excepturi et molestias illum commodi. Laborum magni distinctio quo possimus ut aliquam. Laudantium culpa inventore ea dolores accusantium hic autem impedit.",
            "category": "Sunglasses",
            "default_price": "291.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38054,
            "campus": "hr-rfe",
            "name": "Paxton Hoodie",
            "slogan": "Sequi non blanditiis quia sit vitae et quam deserunt aut.",
            "description": "Sed aut veniam rerum earum laborum nostrum delectus. Consequatur voluptas et nihil voluptatem aut sequi aliquam. Minus et quia eaque sunt accusamus deserunt numquam sapiente. Quam ducimus fugiat nisi. Eius iusto porro labore nulla et.",
            "category": "Hoodie",
            "default_price": "602.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38055,
            "campus": "hr-rfe",
            "name": "Wyatt 1750 Jacket",
            "slogan": "Quidem cumque maiores.",
            "description": "Pariatur necessitatibus et est error quam dicta autem enim maxime. Voluptas sit placeat quo optio sapiente magni neque omnis aliquid. Est hic enim pariatur fugiat sit quaerat et animi. Cupiditate magnam repellat perferendis ratione et et et. Soluta doloribus quia.",
            "category": "Jacket",
            "default_price": "16.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38056,
            "campus": "hr-rfe",
            "name": "Torrance Slacks",
            "slogan": "Officia nemo ut.",
            "description": "Dolor molestiae qui rerum praesentium facere iure omnis deleniti suscipit. Corrupti quia dolor eos ut eos. Nihil molestiae beatae amet nulla dolor. Rerum doloribus et voluptatem.",
            "category": "Slacks",
            "default_price": "976.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38057,
            "campus": "hr-rfe",
            "name": "Timmy Cap",
            "slogan": "Deleniti qui ex.",
            "description": "Quod perspiciatis sit eligendi delectus vitae natus. Nobis fuga dolore quis debitis sunt sed inventore sit. Fugit officiis corrupti porro quia exercitationem dolor soluta voluptas. Sequi ea veniam adipisci inventore minus cupiditate est.",
            "category": "Cap",
            "default_price": "474.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38058,
            "campus": "hr-rfe",
            "name": "Brenda Cap",
            "slogan": "Ea eius et autem.",
            "description": "Cumque repellendus dolor. Assumenda itaque eos dolorem fuga debitis. Facere unde voluptate quasi soluta sequi.",
            "category": "Cap",
            "default_price": "606.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38059,
            "campus": "hr-rfe",
            "name": "Pierce Dress",
            "slogan": "Voluptatem sint et rerum delectus reprehenderit consequatur iure qui.",
            "description": "Non est ullam molestiae eligendi omnis et consequatur iure et. Dolores ea rerum et illo blanditiis modi facere. Ab qui laudantium necessitatibus. Eaque quia cum et ut et consequatur tempora.",
            "category": "Dress",
            "default_price": "172.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38060,
            "campus": "hr-rfe",
            "name": "Terry Sweater",
            "slogan": "Nam labore corrupti possimus non aperiam id.",
            "description": "Amet molestiae veniam quasi accusamus nobis et. Quaerat eum reiciendis suscipit aperiam aliquam autem et. Expedita repellat facilis eaque facilis quos qui est nam omnis. Nobis eos ipsam quo repellendus eaque ratione non. Dolorum suscipit quas. Aut nostrum quia quis.",
            "category": "Sweater",
            "default_price": "593.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38061,
            "campus": "hr-rfe",
            "name": "Tessie Socks",
            "slogan": "Est deserunt voluptatem et qui nihil necessitatibus ut.",
            "description": "Iure excepturi adipisci in qui quod. Fugit et qui laudantium tempore accusantium. Repudiandae sit odio molestias odio consequatur aut velit quam dicta.",
            "category": "Socks",
            "default_price": "646.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38062,
            "campus": "hr-rfe",
            "name": "Jorge Sweatpants",
            "slogan": "Quasi neque quia corporis expedita reprehenderit unde optio quis.",
            "description": "Consequatur suscipit quasi amet aut voluptates aliquam eveniet blanditiis. Asperiores mollitia officia quia itaque pariatur corporis. Molestiae consequatur nulla rem aut doloremque. Commodi sunt ab pariatur fugit quas nobis. Amet eum et alias animi veniam aliquam et voluptate reiciendis.",
            "category": "Sweatpants",
            "default_price": "801.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38063,
            "campus": "hr-rfe",
            "name": "Felicia Trousers",
            "slogan": "Omnis nulla nisi.",
            "description": "Dignissimos autem commodi voluptas. Qui dolor aut. Cupiditate et sed placeat iste autem quibusdam. Minus sequi ipsum.",
            "category": "Trousers",
            "default_price": "228.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38064,
            "campus": "hr-rfe",
            "name": "Eino Sweater",
            "slogan": "Nesciunt commodi quis.",
            "description": "Illo autem porro eius amet molestiae aut ipsum. Distinctio iusto voluptatem est. Inventore sed maxime ut dolorem aut assumenda molestiae.",
            "category": "Sweater",
            "default_price": "572.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38065,
            "campus": "hr-rfe",
            "name": "Keyon Hat",
            "slogan": "Sed ex odio laborum quam et est fugiat quisquam.",
            "description": "Voluptatibus delectus iusto in id quis temporibus. Aut corrupti libero. Minus labore dolores est voluptatem vero culpa. Voluptas culpa praesentium. Aut amet rerum et. In nostrum sit sit.",
            "category": "Hat",
            "default_price": "132.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38066,
            "campus": "hr-rfe",
            "name": "Saige Romper",
            "slogan": "Illo quia et sit consequatur nemo qui pariatur et doloremque.",
            "description": "Sint voluptates laborum voluptatem. Voluptatem numquam placeat libero iusto optio quo esse. Non nihil molestias ut. Voluptas voluptatum sint ipsa.",
            "category": "Romper",
            "default_price": "204.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38067,
            "campus": "hr-rfe",
            "name": "Hiram Tank Top",
            "slogan": "Molestiae dignissimos maxime esse laboriosam eum corporis incidunt ad.",
            "description": "Consectetur quis non dignissimos velit voluptatibus quam repellendus cumque. Incidunt vel id nemo ab nostrum praesentium minus. Doloremque eum fuga eius explicabo. Voluptatem dolores repudiandae praesentium est praesentium. Sit accusamus sunt. Et velit aperiam sint quia.",
            "category": "Tank Top",
            "default_price": "441.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38068,
            "campus": "hr-rfe",
            "name": "The Dallas Jacket",
            "slogan": "Ex dolorum occaecati ipsa nihil ut.",
            "description": "Ut molestiae quia suscipit sed eligendi eaque et. Repellendus alias et fugit vitae maxime. Aut magnam ut aliquam tenetur fuga provident aspernatur nobis. Voluptates sit praesentium enim porro. Ducimus voluptatibus rem est laudantium rerum.",
            "category": "Jacket",
            "default_price": "258.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38069,
            "campus": "hr-rfe",
            "name": "The Ella Romper",
            "slogan": "Numquam deserunt et vel et a aut.",
            "description": "Sed similique aperiam excepturi qui id illo. Facilis aut cupiditate dolores expedita qui qui facilis non. Consequatur praesentium et qui quidem quia esse quo sit. Et non aliquam magni nihil nihil sed eius dolore. Unde distinctio assumenda architecto.",
            "category": "Romper",
            "default_price": "892.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38070,
            "campus": "hr-rfe",
            "name": "Ruthie Coat",
            "slogan": "Ea architecto quo illo cumque facilis magnam odio.",
            "description": "Fugiat tempora et accusantium quasi soluta consectetur eos exercitationem. Dolore eum eveniet sit necessitatibus maiores ipsum excepturi facilis. Vitae blanditiis modi quia voluptatem sunt est. Debitis illum in ipsum aut. Ut minus et quisquam non voluptate a.",
            "category": "Coat",
            "default_price": "292.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38071,
            "campus": "hr-rfe",
            "name": "Morris Shirt",
            "slogan": "Nihil omnis eveniet dolores eius reiciendis sed sunt qui nisi.",
            "description": "Qui ab commodi. Totam nemo reprehenderit odio accusantium sit dignissimos enim. Unde iusto ad dolor qui velit qui quia ut quos.",
            "category": "Shirt",
            "default_price": "830.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38072,
            "campus": "hr-rfe",
            "name": "Dereck Backpack",
            "slogan": "Saepe dolor et at dolorem.",
            "description": "Quam nisi ea voluptatem ut ipsam velit fuga delectus. Velit officiis ut fuga quis voluptatum. Dolor nam aliquam error sed quaerat. Laudantium quia omnis eum in consectetur dolores. Perspiciatis molestiae vel.",
            "category": "Backpack",
            "default_price": "313.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38073,
            "campus": "hr-rfe",
            "name": "Golda Romper",
            "slogan": "Suscipit nemo molestias velit suscipit.",
            "description": "Error sapiente qui sit modi adipisci porro sed veritatis. Facere ducimus aut ex error sed velit. Harum ad tempore nostrum rem magni molestias sint asperiores. Dolore beatae id quis quae ut sed qui. Quibusdam earum ut veritatis error consequatur.",
            "category": "Romper",
            "default_price": "120.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38074,
            "campus": "hr-rfe",
            "name": "Natasha Backpack",
            "slogan": "Voluptatum expedita tempore magnam voluptates.",
            "description": "Ratione non autem dolorum et voluptas. Quibusdam quis omnis voluptates ut. Dolores perferendis praesentium illo quas reiciendis sunt odio at. Sequi ipsum distinctio illum maxime ea quia. Quis maxime delectus. Ex rem iste quisquam iusto sint sed aspernatur.",
            "category": "Backpack",
            "default_price": "142.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38075,
            "campus": "hr-rfe",
            "name": "Alberto Romper",
            "slogan": "Quibusdam quia voluptatem deleniti.",
            "description": "Earum non aliquid vitae quo sunt sit. Nulla hic optio esse ducimus natus ut. Atque praesentium libero natus ipsa et sit consequuntur esse. Autem facilis aut perspiciatis distinctio quia distinctio. Facilis laboriosam illo. Officia dolore et optio non debitis veritatis soluta fugit.",
            "category": "Romper",
            "default_price": "675.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38076,
            "campus": "hr-rfe",
            "name": "Mae Sunglasses",
            "slogan": "Accusantium accusamus dolor aut aspernatur modi et eaque quis dignissimos.",
            "description": "Quam a quam modi vel tenetur. Sint voluptas eligendi nostrum sequi voluptates recusandae aut et. Velit qui quam quam neque. Quod et vel voluptas sequi corrupti alias molestiae non. Veritatis vitae iste non deserunt. Tenetur dolorem magnam itaque est maiores.",
            "category": "Sunglasses",
            "default_price": "910.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38077,
            "campus": "hr-rfe",
            "name": "Darrell Tank Top",
            "slogan": "Ut corporis ipsam sunt aspernatur magni expedita officia.",
            "description": "Et aut quis sed omnis quia et. Voluptatem ipsam ipsum eaque totam. Architecto est voluptatibus eos magnam aut animi. Maiores provident harum nostrum. Tempora architecto consequatur culpa dolor quas perspiciatis omnis quia. Et debitis aut natus asperiores maxime praesentium.",
            "category": "Tank Top",
            "default_price": "277.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38078,
            "campus": "hr-rfe",
            "name": "Oswald Backpack",
            "slogan": "Porro ut quia aperiam cumque aut.",
            "description": "Nulla mollitia enim ut. Ipsam sit nesciunt corrupti qui libero. Sint ut laboriosam molestiae quo ut repellendus.",
            "category": "Backpack",
            "default_price": "438.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38079,
            "campus": "hr-rfe",
            "name": "Baby Shorts",
            "slogan": "Atque quam delectus molestiae consequuntur iste cumque accusantium excepturi consequatur.",
            "description": "Optio laboriosam doloribus labore omnis eum enim tempore. Illum molestias qui quia aliquam impedit exercitationem. Doloribus voluptate rerum esse et enim qui non. Est ut magnam beatae repellat saepe et.",
            "category": "Shorts",
            "default_price": "800.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38080,
            "campus": "hr-rfe",
            "name": "Freddy Romper",
            "slogan": "Est fugiat rem.",
            "description": "Qui ut iure dolores natus et. Sapiente eum totam libero voluptas expedita officiis. Voluptatem laboriosam ut fugit sit odit eligendi repellat minima maxime. Expedita quia quo est. Beatae aut eligendi omnis repudiandae fugit cum.",
            "category": "Romper",
            "default_price": "912.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38081,
            "campus": "hr-rfe",
            "name": "Verda Trousers",
            "slogan": "Natus rerum asperiores in laborum et et beatae.",
            "description": "Id facere atque voluptates nobis libero aperiam illum. Sequi veritatis molestias dolor eius vero eos autem. Laboriosam eveniet in. Facere est quam voluptatum et sapiente a id. Quas sed quia molestias maxime et nulla nihil libero repellat.",
            "category": "Trousers",
            "default_price": "853.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38082,
            "campus": "hr-rfe",
            "name": "Geovanni Socks",
            "slogan": "Ipsam aut tenetur.",
            "description": "Dolore odit perspiciatis. Et eum iusto aut maxime. Culpa ipsum earum quod alias quis quia.",
            "category": "Socks",
            "default_price": "284.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38083,
            "campus": "hr-rfe",
            "name": "Nathan Boots",
            "slogan": "Maiores corporis officia pariatur expedita adipisci eaque est.",
            "description": "Sint eos asperiores non velit est excepturi dolor. Asperiores cupiditate et vel. Dolor non dolor rem ut delectus qui in incidunt.",
            "category": "Boots",
            "default_price": "620.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38084,
            "campus": "hr-rfe",
            "name": "Edythe Trousers",
            "slogan": "Est enim voluptate vel qui eum non aliquam voluptatem adipisci.",
            "description": "Sunt doloremque accusamus alias. Fugiat dolor aut non temporibus quae. Magnam et sint perferendis minus tempore eos. Doloremque omnis quis culpa ut soluta.",
            "category": "Trousers",
            "default_price": "278.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38085,
            "campus": "hr-rfe",
            "name": "Irving Tank Top",
            "slogan": "Reprehenderit ducimus expedita.",
            "description": "Possimus qui at dolorem earum quo consequatur vel aut aut. Accusamus recusandae consectetur quia vel ea ad labore. Suscipit ratione ut sunt numquam corrupti fugiat qui dicta. Et suscipit optio doloribus id excepturi eum voluptas. Sit ipsa repellat porro nihil quas veritatis non. Totam totam in quam voluptatem distinctio.",
            "category": "Tank Top",
            "default_price": "172.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38086,
            "campus": "hr-rfe",
            "name": "Jeanne 1500 Trousers",
            "slogan": "Aut omnis quia.",
            "description": "Quaerat magni impedit sed et et. Quaerat minima enim est officiis voluptates aut. Iste voluptas et exercitationem facere dolorum quibusdam. Quaerat molestias ut autem harum natus. Praesentium illum possimus.",
            "category": "Trousers",
            "default_price": "988.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38087,
            "campus": "hr-rfe",
            "name": "Brandt Sweater",
            "slogan": "Fuga suscipit laudantium tempore rerum minima vitae.",
            "description": "Et nulla nobis aliquid voluptatem laborum quos eum. Quo sit ex ut quos consequatur nisi illum dolor. Illum est provident assumenda repellat in sequi dolor corporis velit. Beatae unde ad ipsum sed explicabo. Optio aut est et voluptate necessitatibus ex laudantium.",
            "category": "Sweater",
            "default_price": "340.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38088,
            "campus": "hr-rfe",
            "name": "Lorenza Boots",
            "slogan": "Amet eius iure fugiat quas rerum.",
            "description": "Dolore est recusandae eligendi dicta. Ut quis est vel eius dolorem ad enim voluptatibus aut. Quo quaerat quia voluptatem et aspernatur. Excepturi ut optio non. Vero omnis et voluptatum dolores ut voluptatem sed dolorem. Voluptatem consectetur ratione asperiores exercitationem rem.",
            "category": "Boots",
            "default_price": "710.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38089,
            "campus": "hr-rfe",
            "name": "Pattie Pants",
            "slogan": "Alias autem sunt est dolores a facere nesciunt qui assumenda.",
            "description": "Velit rem est vitae. Perspiciatis ea et voluptatem eos provident possimus in doloremque soluta. Delectus eligendi enim illum modi officiis eius optio. Rerum vero error. Praesentium aspernatur facilis eos ut veniam unde quis. Ut recusandae eaque officia.",
            "category": "Pants",
            "default_price": "16.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38090,
            "campus": "hr-rfe",
            "name": "Name Coat",
            "slogan": "Dolorem eaque voluptatem ipsam unde dolores.",
            "description": "Velit provident voluptas eius qui illum. Ipsum incidunt ipsam qui. Fuga et consequuntur odit sint tenetur unde animi rerum qui.",
            "category": "Coat",
            "default_price": "467.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38091,
            "campus": "hr-rfe",
            "name": "Kathlyn Coat",
            "slogan": "Commodi recusandae totam illum voluptatum aliquid deleniti.",
            "description": "Est qui sit molestiae est et incidunt laudantium. Aut impedit dolor. Nisi libero et veritatis natus facilis provident voluptatem deleniti vel. Voluptatem est quam dolores deleniti.",
            "category": "Coat",
            "default_price": "23.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38092,
            "campus": "hr-rfe",
            "name": "Emmanuel Sunglasses",
            "slogan": "Omnis velit et.",
            "description": "Similique et voluptatem. Quis aut saepe voluptatem aut. Deserunt aliquam id sunt vel.",
            "category": "Sunglasses",
            "default_price": "633.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38093,
            "campus": "hr-rfe",
            "name": "Lowell Coat",
            "slogan": "Et veritatis quod commodi voluptatem pariatur.",
            "description": "Aliquid distinctio magni consequuntur eum provident. Impedit maiores eum ab aliquid aut aliquam. Qui hic ad illum et aut. Dicta et enim perferendis qui soluta. Laborum et libero fugiat occaecati molestiae quos. Enim necessitatibus perferendis consequuntur.",
            "category": "Coat",
            "default_price": "801.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38094,
            "campus": "hr-rfe",
            "name": "Mazie Tank Top",
            "slogan": "Deleniti quaerat non libero.",
            "description": "Voluptas adipisci est est quo molestiae sunt sed quia laboriosam. Minus quia aut nemo molestiae dolor perferendis quae nisi autem. Sit et necessitatibus quia expedita minima aut neque. Perspiciatis ex qui temporibus voluptatem. Odit aut corrupti ipsum cum laborum. Qui doloremque est ipsam quo velit velit velit facilis voluptatem.",
            "category": "Tank Top",
            "default_price": "168.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38095,
            "campus": "hr-rfe",
            "name": "Ashlee Pants",
            "slogan": "Eius non quis ipsam dolorem expedita et aliquam perspiciatis.",
            "description": "Aut sint eum voluptatum. Voluptate est quo voluptas vitae deserunt ut mollitia ipsam amet. Recusandae et sit distinctio minima dolor doloribus in.",
            "category": "Pants",
            "default_price": "785.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38096,
            "campus": "hr-rfe",
            "name": "Savanah Hoodie",
            "slogan": "Sunt esse eum.",
            "description": "Nobis quo et praesentium vitae eos qui. Doloribus exercitationem eveniet et et mollitia rerum. Ut numquam est dolores. Sequi sapiente facilis rerum. Pariatur vel sunt exercitationem. Vel amet nihil occaecati.",
            "category": "Hoodie",
            "default_price": "331.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38097,
            "campus": "hr-rfe",
            "name": "Wallace 600 Sweatpants",
            "slogan": "Vel debitis qui aut incidunt fugit earum molestias labore itaque.",
            "description": "Sapiente aliquam nulla et facilis ab odit et ipsa. Dolorem sunt consequatur eum deserunt ea. Illum in aut velit velit occaecati sit hic et et. Et a minima quidem deserunt numquam inventore aut esse.",
            "category": "Sweatpants",
            "default_price": "813.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38098,
            "campus": "hr-rfe",
            "name": "Jeffrey Sunglasses",
            "slogan": "Qui tempora ut quo.",
            "description": "Non et inventore. Est ut ut corrupti modi voluptatibus. Et natus maiores. Cupiditate dolor nesciunt cupiditate. Consequuntur minima rerum optio modi fugit delectus omnis dolores.",
            "category": "Sunglasses",
            "default_price": "541.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38099,
            "campus": "hr-rfe",
            "name": "Raheem Trousers",
            "slogan": "Necessitatibus dignissimos minus nam dolores necessitatibus cumque.",
            "description": "Eos ut voluptatem ullam aspernatur consequatur architecto reiciendis in. Aut quia officiis cum eum enim natus. Eos aliquam beatae ipsum consequatur dolores voluptas alias similique. Qui sed voluptate incidunt. Aspernatur dolorem aperiam. Esse placeat sunt rerum sapiente veritatis iusto est.",
            "category": "Trousers",
            "default_price": "759.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38100,
            "campus": "hr-rfe",
            "name": "Aglae Shirt",
            "slogan": "Dolore labore voluptates aut sit dolorum enim ut repellat quod.",
            "description": "Cupiditate inventore cupiditate sed molestiae molestiae. Molestiae accusantium reiciendis aut totam nihil. Delectus magnam ullam impedit ipsum aliquid in architecto consequatur. Consequatur in tempore tempore nobis quisquam sequi veniam quos. Et qui unde exercitationem. Facere voluptatem quis et aperiam reprehenderit explicabo saepe odio quo.",
            "category": "Shirt",
            "default_price": "768.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38101,
            "campus": "hr-rfe",
            "name": "Grayson Jacket",
            "slogan": "Vel nesciunt facilis autem sed id veritatis.",
            "description": "Corporis placeat rem qui asperiores. Et dolor doloremque sequi nostrum sunt nihil. Eaque sequi aspernatur omnis consequuntur quia dicta. Rerum labore rerum quibusdam cum sed expedita inventore omnis et. Rerum quam quisquam aut exercitationem est quia non.",
            "category": "Jacket",
            "default_price": "635.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38102,
            "campus": "hr-rfe",
            "name": "Mya Hat",
            "slogan": "Vitae quae autem.",
            "description": "Officiis exercitationem dolore vero velit non accusamus. Et qui porro quis maxime debitis tenetur velit. Assumenda nesciunt atque dignissimos est quisquam. Non distinctio sequi magnam. Numquam natus vitae delectus non asperiores occaecati harum alias.",
            "category": "Hat",
            "default_price": "306.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38103,
            "campus": "hr-rfe",
            "name": "Darryl Hoodie",
            "slogan": "Reiciendis quas qui tempora odio accusantium.",
            "description": "Ut ut sed excepturi occaecati dolore eos itaque nobis. Suscipit ratione perferendis et incidunt doloremque. Voluptatibus doloremque commodi quia rerum atque veniam voluptatem tenetur illo. Perferendis quia ut accusamus beatae. Blanditiis rerum maiores alias architecto voluptas harum. Cupiditate ratione temporibus numquam nam et ullam adipisci facilis.",
            "category": "Hoodie",
            "default_price": "941.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38104,
            "campus": "hr-rfe",
            "name": "Juston Romper",
            "slogan": "Eaque in adipisci ut dolor non ipsa est ut ipsum.",
            "description": "Placeat rerum repellendus commodi. Eligendi et dolor iusto dolor. Porro accusantium voluptatibus corrupti eos dolores. Dolorem explicabo cum commodi debitis qui aperiam sunt.",
            "category": "Romper",
            "default_price": "670.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38105,
            "campus": "hr-rfe",
            "name": "Koby Sunglasses",
            "slogan": "Veritatis dolore libero quo eaque deleniti voluptas.",
            "description": "Consequatur officia iusto minus sint corrupti. Sapiente sed est delectus sequi cum sint alias quo atque. Nam quos tenetur quae tempora quisquam est consequuntur et. Veritatis officiis voluptatem delectus magni aut laudantium ullam. Sit et illum ut ex nostrum.",
            "category": "Sunglasses",
            "default_price": "379.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38106,
            "campus": "hr-rfe",
            "name": "Stan Romper",
            "slogan": "Aliquam ut odit.",
            "description": "Et totam consectetur ut nihil id non quidem ut et. Provident fugiat enim tempore quod similique vitae. Voluptate et exercitationem deleniti repellendus adipisci magnam explicabo eligendi. Tempore impedit et autem.",
            "category": "Romper",
            "default_price": "139.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38107,
            "campus": "hr-rfe",
            "name": "Karine Sweatpants",
            "slogan": "Blanditiis aperiam magni eligendi sint.",
            "description": "In beatae fugit eum totam ab facere labore aliquam. Est reiciendis quia in excepturi. Dolores quam unde nesciunt sunt ipsam dolorem omnis dolorem fugit. Eum et provident iure ut.",
            "category": "Sweatpants",
            "default_price": "964.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38108,
            "campus": "hr-rfe",
            "name": "Will 200 Skirt",
            "slogan": "Sit modi alias magnam.",
            "description": "Unde quia natus sit ut aut. Tempora in ut est animi sit quaerat ipsum. Voluptas sit sit quae est voluptates. Unde omnis sint veniam illum accusamus eos dolorum. Maiores veniam assumenda inventore quia aspernatur dolore sunt quibusdam. Quidem voluptates odit officiis natus.",
            "category": "Skirt",
            "default_price": "747.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38109,
            "campus": "hr-rfe",
            "name": "Vivien Boots",
            "slogan": "Quam blanditiis officia doloribus repellendus doloremque.",
            "description": "Quod aspernatur iste necessitatibus accusantium iure ipsam dicta et tempora. Impedit suscipit qui ut. Quibusdam accusantium voluptatem aliquam dolores velit sunt cum. Voluptatem sunt commodi commodi nam nisi. Aspernatur voluptatem beatae.",
            "category": "Boots",
            "default_price": "561.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38110,
            "campus": "hr-rfe",
            "name": "Katheryn Boots",
            "slogan": "Exercitationem perspiciatis voluptatem.",
            "description": "Voluptatem occaecati dolor tempora et iusto sint saepe voluptas voluptates. Autem aut velit. Perferendis vero sunt porro.",
            "category": "Boots",
            "default_price": "642.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38111,
            "campus": "hr-rfe",
            "name": "Diana Romper",
            "slogan": "Minus accusamus enim.",
            "description": "Voluptatem est saepe et quis velit iure eos. Expedita aperiam quasi dignissimos. Ea non sunt facere impedit qui est. Assumenda iure eos et aut consequatur dolorem. Adipisci voluptates minima error et odio et aliquid. Inventore rerum est.",
            "category": "Romper",
            "default_price": "919.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38112,
            "campus": "hr-rfe",
            "name": "Emmett Coat",
            "slogan": "Accusamus omnis qui dignissimos.",
            "description": "Tempora recusandae quis voluptas quam quisquam. Alias nemo dolores voluptates eligendi et eos distinctio. Culpa aut ut officiis perspiciatis non natus. Dolor dignissimos ex et dicta blanditiis et tempora nulla facilis. Ullam quibusdam aut eos.",
            "category": "Coat",
            "default_price": "396.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38113,
            "campus": "hr-rfe",
            "name": "Ariel Cap",
            "slogan": "Quo non quae cumque sapiente maxime provident molestiae molestiae.",
            "description": "Necessitatibus sit amet quis pariatur porro voluptates. Porro reiciendis possimus cupiditate non et laudantium ullam. Voluptatem fugiat quod incidunt iure quo assumenda nobis quos. Tempora vel in ratione unde eum voluptate ullam. Facere ipsa sint magni qui culpa. Qui inventore est vel hic aliquid nisi nisi id.",
            "category": "Cap",
            "default_price": "619.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38114,
            "campus": "hr-rfe",
            "name": "Rose Hat",
            "slogan": "Ut itaque labore architecto autem enim vel.",
            "description": "Omnis nam et blanditiis hic non ipsam assumenda velit optio. Et autem laboriosam. Corrupti velit doloribus magnam itaque non non consequuntur consequatur cum. Recusandae id delectus. Cum aut assumenda qui exercitationem architecto est sed voluptatibus qui. Ducimus voluptatem tempore qui quo aperiam quia.",
            "category": "Hat",
            "default_price": "995.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38115,
            "campus": "hr-rfe",
            "name": "Ayana Heels",
            "slogan": "Eum officiis optio unde possimus veritatis.",
            "description": "Omnis praesentium sed occaecati beatae quia nihil eum nesciunt praesentium. Sed minus illum non tempore maxime laborum. Magni facilis fugiat cumque reiciendis quidem.",
            "category": "Heels",
            "default_price": "669.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38116,
            "campus": "hr-rfe",
            "name": "Vicente Pants",
            "slogan": "Asperiores aliquid asperiores.",
            "description": "Error et distinctio sunt maiores vel maxime voluptatem. Sed exercitationem et nihil corrupti repellat. Ipsam illum accusamus praesentium. Et facere voluptatem consequatur ipsum sint dolore qui. Ut laudantium dolorem. In autem quia facilis et et nulla delectus id.",
            "category": "Pants",
            "default_price": "912.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38117,
            "campus": "hr-rfe",
            "name": "Mckenna Dress",
            "slogan": "Consequatur ut ut sequi ut id delectus eos nostrum quos.",
            "description": "Velit at magnam. Aut velit saepe fugit non id saepe. Quasi itaque ea illo labore dolor accusantium iusto. Eveniet optio ut a totam. Et in illum quis aut voluptatem eaque officiis neque.",
            "category": "Dress",
            "default_price": "53.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38118,
            "campus": "hr-rfe",
            "name": "Cathrine Shirt",
            "slogan": "Culpa corporis dolorum nihil corporis quia quia.",
            "description": "Ratione a et. Voluptatem id voluptas ipsam culpa occaecati. Minus repudiandae eligendi perferendis laboriosam. Facilis vitae provident nesciunt. Impedit molestiae ad est. Aliquid consequuntur nulla quia voluptatibus beatae ullam quo deleniti ipsum.",
            "category": "Shirt",
            "default_price": "45.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38119,
            "campus": "hr-rfe",
            "name": "Ruthe Sweatpants",
            "slogan": "Quia sit veniam non.",
            "description": "Temporibus quam dicta dicta. Aut iusto modi magnam autem voluptate. Sunt voluptatem quis aspernatur et. Exercitationem mollitia eos.",
            "category": "Sweatpants",
            "default_price": "710.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38120,
            "campus": "hr-rfe",
            "name": "Brain Boots",
            "slogan": "Cupiditate nihil aut et in dolor voluptatibus numquam.",
            "description": "Nulla aspernatur et id sit sed qui sit vel. Quod et sunt asperiores eum sunt. Harum dignissimos dolores omnis atque.",
            "category": "Boots",
            "default_price": "969.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38121,
            "campus": "hr-rfe",
            "name": "Lenora Sweatpants",
            "slogan": "Quis eos eveniet et occaecati.",
            "description": "Tempora a veniam nemo aut aliquid nemo. Voluptas hic consectetur praesentium asperiores et distinctio. Facere ad fuga officiis est atque nihil distinctio architecto ullam. Consequuntur et nemo porro veniam. Vel aut qui. Assumenda aut sapiente ad quia nam voluptas.",
            "category": "Sweatpants",
            "default_price": "317.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38122,
            "campus": "hr-rfe",
            "name": "Joyce Pants",
            "slogan": "Corrupti neque eum fugiat in.",
            "description": "Optio autem qui non. Quos excepturi maxime ad minus molestiae. Maiores qui repellendus quae. Odit eius itaque modi enim ipsa. Vitae ad nam dolores earum unde qui ipsam.",
            "category": "Pants",
            "default_price": "442.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38123,
            "campus": "hr-rfe",
            "name": "Jermey Backpack",
            "slogan": "Debitis error beatae nihil non.",
            "description": "Ut sit non suscipit laborum corrupti sit totam. Aut culpa distinctio et. Exercitationem nihil occaecati ab. Delectus voluptatem aut unde hic sunt optio est.",
            "category": "Backpack",
            "default_price": "793.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38124,
            "campus": "hr-rfe",
            "name": "Marie Shirt",
            "slogan": "Sint quia magni corporis doloremque itaque ad dolor architecto quis.",
            "description": "Illum eligendi odio. Quam quo esse quae fugit ducimus. Accusantium repellat aut corporis sunt consectetur explicabo.",
            "category": "Shirt",
            "default_price": "516.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38125,
            "campus": "hr-rfe",
            "name": "Arielle Sweater",
            "slogan": "Cupiditate veniam impedit esse nihil.",
            "description": "Cupiditate ut facilis dolor qui aut. Quia omnis unde debitis laborum. Dolores sequi non.",
            "category": "Sweater",
            "default_price": "20.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38126,
            "campus": "hr-rfe",
            "name": "Viva Backpack",
            "slogan": "Dolorum ex ut et quisquam qui cum maxime.",
            "description": "Voluptas id expedita distinctio et nisi aspernatur occaecati voluptas. Sunt numquam dolore minus non dolorum dolor voluptatem quia. Nisi et consequatur beatae aspernatur. Aut molestiae beatae nobis nisi est repudiandae dolorem sunt et.",
            "category": "Backpack",
            "default_price": "440.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38127,
            "campus": "hr-rfe",
            "name": "Rod Dress",
            "slogan": "Quam tempore eos.",
            "description": "Omnis sed in sapiente architecto voluptatibus vitae dolor voluptatem velit. Laborum est tempore occaecati non. Eius et aliquam quis quia veritatis.",
            "category": "Dress",
            "default_price": "602.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38128,
            "campus": "hr-rfe",
            "name": "Lloyd Hoodie",
            "slogan": "Amet quo et sit.",
            "description": "Consequatur quia vitae. Distinctio quasi est hic. Occaecati quo aspernatur architecto. Quisquam ullam natus nulla qui est autem totam architecto eveniet. Molestiae non quam.",
            "category": "Hoodie",
            "default_price": "785.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38129,
            "campus": "hr-rfe",
            "name": "Troy Sweater",
            "slogan": "Enim rerum similique tenetur atque nihil voluptatem aut.",
            "description": "Deserunt optio et est unde magni. Nesciunt quisquam occaecati et numquam totam numquam sequi blanditiis. Dicta molestiae atque. Ipsa maxime inventore velit voluptates molestiae sunt est et.",
            "category": "Sweater",
            "default_price": "767.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38130,
            "campus": "hr-rfe",
            "name": "The Bonnie Sweatpants",
            "slogan": "Ratione nesciunt aut et similique voluptate necessitatibus laudantium.",
            "description": "Consequatur perferendis nisi sit corporis inventore voluptates nesciunt. Numquam culpa cumque. Et et corrupti quia quibusdam quia. Voluptatem enim sequi atque sint voluptas odio dolores facilis id. Ut qui inventore sit. Ex et impedit consequatur molestiae iste.",
            "category": "Sweatpants",
            "default_price": "861.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38131,
            "campus": "hr-rfe",
            "name": "Ryder Jacket",
            "slogan": "Tempora voluptatem ut impedit rerum recusandae autem dolore.",
            "description": "Dolore doloremque autem at. Ut quo iste sit aut. Veritatis occaecati eius qui eum repellendus et velit autem. Quidem omnis omnis tempore consectetur qui reiciendis. Excepturi magni possimus sunt ipsam sint harum delectus.",
            "category": "Jacket",
            "default_price": "43.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38132,
            "campus": "hr-rfe",
            "name": "Earnestine 200 Tank Top",
            "slogan": "Aut cupiditate minus corporis.",
            "description": "Asperiores consequatur et ut velit ullam ipsa ut expedita. Consectetur aut consequuntur velit recusandae. Expedita totam et necessitatibus nesciunt facilis ab quibusdam ut voluptatem. Nemo ab magnam. Vel nemo provident in non pariatur magnam velit quia.",
            "category": "Tank Top",
            "default_price": "598.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38133,
            "campus": "hr-rfe",
            "name": "Queenie 1650 Jacket",
            "slogan": "Fuga animi maiores rerum provident architecto aut non voluptatibus.",
            "description": "Vel soluta molestiae et occaecati autem aut. Rerum sequi odio. Nesciunt repellendus et repellendus sit eum distinctio praesentium ducimus voluptatibus. Vitae similique consectetur voluptatem labore autem adipisci aut deserunt omnis. Quaerat laudantium enim.",
            "category": "Jacket",
            "default_price": "375.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38134,
            "campus": "hr-rfe",
            "name": "Josefa Pants",
            "slogan": "Esse repellendus accusamus velit molestiae mollitia qui et eius.",
            "description": "Sed consectetur quo eius deserunt aperiam voluptatem at. Voluptatibus quo molestias cum neque possimus et et aliquam in. Et nemo fuga dolorem. Quaerat non vel architecto et culpa sed. Aut nobis dolores fugit nisi fugit earum placeat officiis nobis. Voluptas animi beatae facilis optio odit facere laboriosam voluptatibus ex.",
            "category": "Pants",
            "default_price": "648.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38135,
            "campus": "hr-rfe",
            "name": "Chaim Shorts",
            "slogan": "Unde dolores at natus labore repellat similique error.",
            "description": "Est qui vel quod. Officiis nesciunt et. Harum nihil dolores adipisci error qui vero. Totam qui vitae velit dolor porro qui asperiores id non. Deleniti iusto quo eos quibusdam et ab dolorum sit voluptatibus.",
            "category": "Shorts",
            "default_price": "982.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38136,
            "campus": "hr-rfe",
            "name": "The Zackery Pants",
            "slogan": "Sit sed optio hic est enim reprehenderit quidem.",
            "description": "Iusto aliquam et sint eaque eaque mollitia. Odit est tenetur ducimus consequatur vero. Unde vero dolorem sed modi consequatur odio dolor ea eos.",
            "category": "Pants",
            "default_price": "88.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38137,
            "campus": "hr-rfe",
            "name": "Ramiro Pants",
            "slogan": "Sint ducimus placeat ipsam dolorum qui.",
            "description": "In eos ut necessitatibus itaque. Voluptatem voluptatum eum hic qui consequuntur. Aperiam reiciendis qui magnam aut quas labore laborum. Accusamus repudiandae itaque et deleniti magnam sit adipisci. Eligendi perferendis ratione quam quia omnis excepturi sed.",
            "category": "Pants",
            "default_price": "402.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38138,
            "campus": "hr-rfe",
            "name": "The Ila Trousers",
            "slogan": "Enim ad ducimus mollitia adipisci dolores.",
            "description": "Consequatur ex voluptate impedit rerum culpa inventore. Ex amet eveniet aut voluptas non ipsum incidunt consequatur. Ut et deleniti voluptatem repellendus alias ratione nam omnis. Doloribus at perspiciatis optio tempore. Consectetur sunt repudiandae nostrum ut et qui in.",
            "category": "Trousers",
            "default_price": "646.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38139,
            "campus": "hr-rfe",
            "name": "Carli 1200 Skirt",
            "slogan": "Dolorem vel vel quasi aut.",
            "description": "Accusantium qui modi officiis voluptate nobis vel eum. Hic eos aliquid qui. Veniam vitae et quis voluptatem possimus aspernatur commodi.",
            "category": "Skirt",
            "default_price": "998.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38140,
            "campus": "hr-rfe",
            "name": "Cornelius Suit",
            "slogan": "Omnis sequi dolorem.",
            "description": "Velit aut id esse voluptas blanditiis quis. Qui id accusantium officiis maiores hic doloremque hic. Tempore sint et corrupti facere rerum.",
            "category": "Suit",
            "default_price": "988.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38141,
            "campus": "hr-rfe",
            "name": "Jakayla Suit",
            "slogan": "A assumenda doloremque recusandae ullam aut enim voluptatum est iusto.",
            "description": "Error ut non quo non. Similique minus aut et harum autem accusantium velit nesciunt sapiente. Qui et laudantium dolores non et. Quis vero sunt. Iste ducimus reiciendis ratione dolorum fuga numquam.",
            "category": "Suit",
            "default_price": "471.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38142,
            "campus": "hr-rfe",
            "name": "Zella Romper",
            "slogan": "Voluptatibus sit optio laboriosam et non eveniet quis consectetur suscipit.",
            "description": "Officia dolores velit aut. Quia culpa sit excepturi sapiente et neque dolor ad adipisci. Quasi dicta non itaque aut corrupti exercitationem aliquam.",
            "category": "Romper",
            "default_price": "209.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38143,
            "campus": "hr-rfe",
            "name": "Nellie Backpack",
            "slogan": "Ut et quidem sint minus est neque illum qui quo.",
            "description": "Harum vero sed excepturi consequatur. Ad sequi qui eum enim. Tenetur eaque dolorem et libero quis excepturi quam. Debitis repellat vero quia aut maxime omnis et temporibus. Recusandae totam eaque a est quas dolores officiis est commodi.",
            "category": "Backpack",
            "default_price": "682.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38144,
            "campus": "hr-rfe",
            "name": "Kendrick Pants",
            "slogan": "Temporibus officiis laboriosam doloribus non est.",
            "description": "Quae incidunt cumque et ex quaerat consequatur est soluta architecto. Quis id qui tenetur sapiente voluptas itaque nobis. Quo et eum earum. Deleniti debitis cum error facere libero est doloribus sint. Similique rem totam rem id voluptatem omnis doloremque. Beatae et quis reiciendis repudiandae amet dolore expedita ut est.",
            "category": "Pants",
            "default_price": "225.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38145,
            "campus": "hr-rfe",
            "name": "Lacey Trousers",
            "slogan": "Ullam molestias exercitationem atque rerum.",
            "description": "Quas non qui at et ex aliquid eaque aut aut. Id velit id enim repellat. Qui voluptas animi. Perferendis aspernatur aut earum molestiae molestiae atque cumque. Temporibus et corrupti sit animi voluptatem reiciendis totam rem autem.",
            "category": "Trousers",
            "default_price": "625.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38146,
            "campus": "hr-rfe",
            "name": "Justine Trousers",
            "slogan": "Possimus nulla illum amet.",
            "description": "Consequatur non odit. Veritatis quod temporibus impedit voluptas voluptatem eaque reprehenderit suscipit. Explicabo veniam magni ab qui dolore assumenda ipsa.",
            "category": "Trousers",
            "default_price": "899.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38147,
            "campus": "hr-rfe",
            "name": "Steve Skirt",
            "slogan": "Rem dignissimos consequatur autem veritatis.",
            "description": "Labore facilis rerum et natus quibusdam laboriosam. Dolor vel voluptatum in voluptas quia sint eligendi. Qui veniam aperiam. Aut ad ad debitis voluptas voluptas veniam qui ea enim. Neque expedita et illo aut. Recusandae aut dolor commodi accusantium laudantium rerum tenetur maxime.",
            "category": "Skirt",
            "default_price": "551.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38148,
            "campus": "hr-rfe",
            "name": "Britney 1550 Backpack",
            "slogan": "Nulla odit saepe tempore labore quam sit et qui a.",
            "description": "Veritatis dolores rem et consequatur nemo. Placeat consequatur odit sunt accusamus et. Ab eveniet neque repellendus ut fugit pariatur. Voluptatem iure vero nobis nemo dolore. Sed fuga fugiat. Non itaque odit ullam.",
            "category": "Backpack",
            "default_price": "517.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38149,
            "campus": "hr-rfe",
            "name": "Rossie Dress",
            "slogan": "Impedit rerum blanditiis hic nulla accusamus.",
            "description": "Aliquid et et aut neque nam dolorem. Qui ratione nisi quasi aut. Dicta ipsam molestiae nulla reprehenderit ut eaque ipsum itaque consequatur. Ad qui quia repellat.",
            "category": "Dress",
            "default_price": "663.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38150,
            "campus": "hr-rfe",
            "name": "Hellen Skirt",
            "slogan": "Et omnis incidunt et possimus ipsam sit.",
            "description": "Qui atque consequatur vel ad eveniet soluta accusantium commodi quos. Rerum et consequatur illum eum deleniti. A nihil esse qui debitis eum nam dolores dignissimos.",
            "category": "Skirt",
            "default_price": "759.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38151,
            "campus": "hr-rfe",
            "name": "Hilma Shirt",
            "slogan": "Repellendus necessitatibus non consectetur quam voluptatum omnis aspernatur et.",
            "description": "Mollitia dolore voluptatem earum omnis odit. Qui eum tenetur. Amet commodi est itaque. Vero facere eius architecto nemo animi hic nam blanditiis. Nesciunt ut reprehenderit beatae mollitia et eum sint aperiam. Omnis vel ut.",
            "category": "Shirt",
            "default_price": "594.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38152,
            "campus": "hr-rfe",
            "name": "Jordon Socks",
            "slogan": "Consequatur dolor suscipit.",
            "description": "Dolore beatae sed omnis. Omnis quidem voluptates sed qui. Voluptate rem molestiae accusantium ut consequatur odio molestiae minima.",
            "category": "Socks",
            "default_price": "782.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38153,
            "campus": "hr-rfe",
            "name": "Sandra Tank Top",
            "slogan": "Non est voluptates.",
            "description": "Magnam aut omnis maiores nobis dolorum est. Quia eum magni vel omnis voluptatem ipsa possimus delectus. Laborum et unde voluptas qui. Dolor vitae aut fugit dolor labore amet. Totam delectus sequi.",
            "category": "Tank Top",
            "default_price": "10.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38154,
            "campus": "hr-rfe",
            "name": "Alivia Sweater",
            "slogan": "Quia nihil blanditiis ad unde quam totam.",
            "description": "Voluptatem accusamus placeat. Accusamus quo labore commodi. Vitae non expedita et distinctio.",
            "category": "Sweater",
            "default_price": "743.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38155,
            "campus": "hr-rfe",
            "name": "Lula Boots",
            "slogan": "Totam non culpa harum.",
            "description": "Ex accusantium fugiat sed at. Illum excepturi animi. Cum voluptatum et nisi tenetur.",
            "category": "Boots",
            "default_price": "697.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38156,
            "campus": "hr-rfe",
            "name": "Otha Shirt",
            "slogan": "Possimus consequuntur aliquam ab nulla culpa itaque molestiae.",
            "description": "Molestiae et odit quia modi. Modi id repudiandae enim magni ipsum debitis. Dolorem officiis eligendi atque sed omnis nam molestiae provident aperiam.",
            "category": "Shirt",
            "default_price": "89.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38157,
            "campus": "hr-rfe",
            "name": "Jessyca Romper",
            "slogan": "Consequatur illo facilis ut consequatur minus non dolorem eveniet.",
            "description": "Provident quia quas. Enim architecto porro voluptas. Sed et cumque totam nihil. Maxime et sit voluptatem quisquam dignissimos laudantium deleniti rerum.",
            "category": "Romper",
            "default_price": "126.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38158,
            "campus": "hr-rfe",
            "name": "Karelle Sweater",
            "slogan": "Labore consequatur modi voluptate eaque et.",
            "description": "Consequatur voluptatibus qui aut et qui et. Quibusdam hic velit inventore. Autem voluptatem laudantium quia veniam consequatur magni perspiciatis deserunt occaecati.",
            "category": "Sweater",
            "default_price": "473.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38159,
            "campus": "hr-rfe",
            "name": "Kaylah Sweater",
            "slogan": "Itaque enim recusandae necessitatibus commodi est consectetur eum.",
            "description": "Aut qui et ipsa sit ad aliquid animi non eius. Qui quae qui temporibus totam est. Et aperiam corrupti.",
            "category": "Sweater",
            "default_price": "654.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38160,
            "campus": "hr-rfe",
            "name": "Kamren Heels",
            "slogan": "Qui non sint molestias sunt quod error aut in.",
            "description": "Repellendus magnam itaque delectus est ut cumque. Et dolorem ut nihil magnam beatae. Molestiae consequatur aut non non voluptatibus fuga porro voluptatibus. Ut sit est molestiae alias praesentium adipisci iusto fugiat.",
            "category": "Heels",
            "default_price": "322.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38161,
            "campus": "hr-rfe",
            "name": "Grace Sweater",
            "slogan": "Sed reiciendis amet quis voluptatum incidunt.",
            "description": "Pariatur tempora nostrum libero vel. Sit ipsum et atque et. Odit soluta et voluptatem quia ut nobis adipisci. Corporis et aliquid eius et. Id nobis quaerat. Et rerum vitae autem sit.",
            "category": "Sweater",
            "default_price": "920.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38162,
            "campus": "hr-rfe",
            "name": "Guiseppe Hoodie",
            "slogan": "Corporis ipsam qui dolorem sapiente accusamus cum.",
            "description": "Sed eum saepe. Et illum consequatur esse non ut praesentium aliquid voluptatem quasi. Et voluptatem velit eos molestias magni. Non error autem tenetur reiciendis aut aliquam. Qui hic est. Enim quo vel nisi pariatur exercitationem.",
            "category": "Hoodie",
            "default_price": "787.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38163,
            "campus": "hr-rfe",
            "name": "Sandrine Shorts",
            "slogan": "Suscipit similique mollitia.",
            "description": "Vero quo inventore nisi quos laboriosam sed. Alias qui nisi sed. Placeat voluptas dolor tempore.",
            "category": "Shorts",
            "default_price": "445.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38164,
            "campus": "hr-rfe",
            "name": "Reta Heels",
            "slogan": "Sit ut omnis amet sequi in alias quisquam nesciunt.",
            "description": "Harum excepturi occaecati amet qui a est. Aspernatur doloremque pariatur dolore dolores at atque labore et perspiciatis. Quas dolore quibusdam autem.",
            "category": "Heels",
            "default_price": "868.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38165,
            "campus": "hr-rfe",
            "name": "Jazmyne Socks",
            "slogan": "Alias et asperiores accusamus optio ducimus voluptate.",
            "description": "Omnis dolor molestias magnam magni quod. Ex illo voluptatum accusantium quod saepe libero molestiae amet. Consectetur quis odio aut. Error sed minima quae quia.",
            "category": "Socks",
            "default_price": "17.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38166,
            "campus": "hr-rfe",
            "name": "The Jacky Heels",
            "slogan": "Commodi odio magni itaque qui autem in aut cum enim.",
            "description": "Occaecati aut adipisci aliquam est rerum et culpa. Dolores non eos blanditiis vitae autem. Quis voluptatem et vel et. Voluptas quas laudantium itaque.",
            "category": "Heels",
            "default_price": "375.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38167,
            "campus": "hr-rfe",
            "name": "Alexys Hat",
            "slogan": "Quia eaque accusamus corporis odio molestias excepturi.",
            "description": "Sed dolor sequi consequatur sapiente. Hic velit ipsa ullam et sit recusandae voluptates. Eum consequatur sit et.",
            "category": "Hat",
            "default_price": "837.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38168,
            "campus": "hr-rfe",
            "name": "Jayne Shirt",
            "slogan": "Mollitia esse qui officiis aspernatur facere reiciendis et.",
            "description": "Dolorum fuga natus nemo iure ut in eum reprehenderit. Quis velit occaecati dolor tenetur amet vel magni. Nulla et dolores itaque quod enim non. Quaerat quia corporis et nihil vel. Atque hic similique nobis omnis esse harum corporis est.",
            "category": "Shirt",
            "default_price": "239.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38169,
            "campus": "hr-rfe",
            "name": "Liana Hoodie",
            "slogan": "Reprehenderit beatae placeat vel.",
            "description": "Voluptas labore veritatis sit totam accusamus autem dolores quaerat aliquam. Rerum esse corrupti animi velit. Distinctio voluptatem ullam molestiae qui ut. Dolorem magni sint ratione officia ut corporis. Accusamus odit autem neque et tempore sint. Doloremque possimus est quam expedita.",
            "category": "Hoodie",
            "default_price": "687.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38170,
            "campus": "hr-rfe",
            "name": "Crawford Sweater",
            "slogan": "Placeat ut et sequi quidem.",
            "description": "Et aut officia voluptatem ipsam quos rem fugit voluptatibus. Consequatur voluptatem et aut veritatis possimus magni ad. Aut magni et non corporis autem est mollitia. Quas culpa id est eum molestias numquam. Modi neque eos nemo quo quibusdam voluptas necessitatibus aliquam fuga.",
            "category": "Sweater",
            "default_price": "826.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38171,
            "campus": "hr-rfe",
            "name": "Valentin Jacket",
            "slogan": "Laborum veniam quibusdam fugit quis ducimus dicta blanditiis doloremque dolorem.",
            "description": "Rerum voluptatem velit sit voluptatem nulla aperiam totam laboriosam et. Ut adipisci voluptatem vero. Dolores harum eum quas nulla magni totam et reprehenderit. Aut eius consequatur aut aut autem expedita occaecati. Et in similique non natus.",
            "category": "Jacket",
            "default_price": "962.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38172,
            "campus": "hr-rfe",
            "name": "The Julien Skirt",
            "slogan": "Cumque voluptas quas et praesentium tempora ducimus.",
            "description": "Debitis iusto quis debitis unde. Et nemo non corrupti natus. Dolores sit voluptas.",
            "category": "Skirt",
            "default_price": "179.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38173,
            "campus": "hr-rfe",
            "name": "Yvonne Backpack",
            "slogan": "Nisi explicabo ut.",
            "description": "Sit qui quidem aut sunt quaerat provident vel ut non. Quae consequatur illum eum dolore voluptates est. Veritatis consequatur itaque velit voluptate ab. Voluptate cum et ut. Autem nihil rerum repellendus quasi quia dolores. Doloremque aliquid quasi unde sint nihil nihil dolorem.",
            "category": "Backpack",
            "default_price": "695.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38174,
            "campus": "hr-rfe",
            "name": "Emanuel 500 Shirt",
            "slogan": "Eveniet voluptatem quam delectus perspiciatis qui consectetur.",
            "description": "Vel totam velit numquam delectus totam cum. Et nulla id at velit. Sapiente ex laboriosam explicabo expedita.",
            "category": "Shirt",
            "default_price": "955.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38175,
            "campus": "hr-rfe",
            "name": "Kitty 400 Cap",
            "slogan": "Quisquam ipsam soluta suscipit dolore nulla similique libero ea.",
            "description": "Qui enim harum accusamus nisi illo similique doloremque sit neque. Placeat fuga officiis. Mollitia ex facere.",
            "category": "Cap",
            "default_price": "646.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38176,
            "campus": "hr-rfe",
            "name": "Edythe Hoodie",
            "slogan": "Voluptas eaque suscipit omnis non modi eum quidem consequuntur.",
            "description": "Provident qui officiis beatae enim ipsa. Aperiam consequatur sed et cupiditate fugit veniam. Qui delectus est officia expedita alias a fugit. Voluptas ipsa voluptatem ex voluptatem vel fugiat nam. Voluptates dignissimos consequatur ut accusamus sint. Et reiciendis delectus ut eveniet explicabo.",
            "category": "Hoodie",
            "default_price": "57.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38177,
            "campus": "hr-rfe",
            "name": "Alexandrea 1050 Suit",
            "slogan": "Vel exercitationem nesciunt et libero facere quis voluptas perspiciatis.",
            "description": "Fugit non recusandae sed tempore accusantium est sit nam eum. Voluptatem hic atque illo vel porro tenetur recusandae. Laudantium hic natus. Esse nihil sed dolore libero recusandae. Ut sed beatae sint quibusdam sit eos. Impedit aut labore voluptatem laborum vel.",
            "category": "Suit",
            "default_price": "785.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38178,
            "campus": "hr-rfe",
            "name": "Alverta Trousers",
            "slogan": "Ab veniam voluptas id dicta exercitationem.",
            "description": "Sint eius non qui qui. Vel aliquam exercitationem labore temporibus similique veniam est omnis. Cumque excepturi nemo ut veniam quia odit dicta. Ut recusandae totam vero enim. Facilis voluptatum ut sapiente. Unde ea sed est veritatis id et voluptatem.",
            "category": "Trousers",
            "default_price": "232.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38179,
            "campus": "hr-rfe",
            "name": "Cullen 400 Hoodie",
            "slogan": "Facilis facilis minus distinctio repudiandae ipsum sit.",
            "description": "Eos omnis consequuntur ipsum ea dignissimos eum hic iste. Accusantium voluptatem eos. Et sapiente deserunt odio.",
            "category": "Hoodie",
            "default_price": "36.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38180,
            "campus": "hr-rfe",
            "name": "Alexane Boots",
            "slogan": "Et aliquid recusandae.",
            "description": "Ut soluta quia. Quia voluptatem distinctio nisi sint dolore vel eum aspernatur beatae. Repellendus illum voluptatem quo voluptatem exercitationem rerum molestiae eos laudantium. Nobis ut suscipit.",
            "category": "Boots",
            "default_price": "831.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38181,
            "campus": "hr-rfe",
            "name": "Twila Coat",
            "slogan": "Ut nostrum quaerat tempore est illo dolorem debitis.",
            "description": "Mollitia quis aspernatur veniam rerum temporibus rerum. Eligendi maiores qui porro magni molestiae saepe. In et voluptatem accusantium et labore deleniti autem est debitis. Iusto qui ipsa necessitatibus voluptatem quae porro sit.",
            "category": "Coat",
            "default_price": "121.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38182,
            "campus": "hr-rfe",
            "name": "Neoma Tank Top",
            "slogan": "Ad amet repellat incidunt earum quaerat et ex.",
            "description": "Molestiae perferendis voluptate saepe voluptas fugiat sint. Asperiores facere distinctio doloribus. Debitis minima voluptatem voluptas. Quae rerum reprehenderit delectus odio possimus sed eaque. Repellat quo dolorem quia alias dolores dolores odit excepturi.",
            "category": "Tank Top",
            "default_price": "493.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38183,
            "campus": "hr-rfe",
            "name": "Jeffrey Heels",
            "slogan": "Et debitis debitis quam.",
            "description": "Qui quaerat et consequatur sapiente corporis voluptatem iusto. Eius molestiae ut mollitia eveniet. Libero incidunt doloremque modi ut cumque ea veritatis voluptas doloribus. Aut tenetur recusandae incidunt magnam accusamus.",
            "category": "Heels",
            "default_price": "612.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38184,
            "campus": "hr-rfe",
            "name": "Hope Romper",
            "slogan": "Quam voluptate et repellendus quibusdam.",
            "description": "Atque et quia. Sit molestiae eaque ipsam saepe. Est id nihil dolores.",
            "category": "Romper",
            "default_price": "462.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38185,
            "campus": "hr-rfe",
            "name": "Alysson Slacks",
            "slogan": "Eum omnis aut.",
            "description": "Provident excepturi voluptatem perferendis aut tenetur distinctio perspiciatis. Tempora ut aut impedit est veniam ut. Consectetur aliquid quos accusantium quia quia in sunt quaerat. Et magni quae. Voluptatem hic quo sed et.",
            "category": "Slacks",
            "default_price": "781.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38186,
            "campus": "hr-rfe",
            "name": "Erick Suit",
            "slogan": "Est ipsa vitae facere non.",
            "description": "Magnam aut ipsam iste ut iure omnis repudiandae. Assumenda exercitationem ut. Temporibus architecto aut aut officiis. Dolor aspernatur distinctio sit voluptates.",
            "category": "Suit",
            "default_price": "566.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38187,
            "campus": "hr-rfe",
            "name": "Casandra Suit",
            "slogan": "Dolorum totam dicta adipisci et.",
            "description": "Animi ad ut quis. Quam impedit eius eaque. Amet ducimus iusto recusandae deleniti ut.",
            "category": "Suit",
            "default_price": "728.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38188,
            "campus": "hr-rfe",
            "name": "Carter Slacks",
            "slogan": "Itaque saepe assumenda sit a quas animi hic.",
            "description": "Sit sit sint at ipsam est. Ut quam laudantium quia autem assumenda nemo. Fuga qui voluptatem illum. Inventore libero sit.",
            "category": "Slacks",
            "default_price": "590.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38189,
            "campus": "hr-rfe",
            "name": "Larue Shoes",
            "slogan": "Cum nihil placeat aut ad sed vitae non.",
            "description": "Ducimus deleniti vel unde. Vitae quasi consequatur doloribus libero esse. Qui aut tenetur dicta dolor culpa enim. At dolor totam. Voluptatem exercitationem quo molestiae qui illum molestiae quas fuga.",
            "category": "Shoes",
            "default_price": "599.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38190,
            "campus": "hr-rfe",
            "name": "Brennan Skirt",
            "slogan": "Qui dignissimos consectetur id.",
            "description": "Cum excepturi est. In dicta quaerat atque. Totam id quisquam.",
            "category": "Skirt",
            "default_price": "88.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38191,
            "campus": "hr-rfe",
            "name": "Ova Jacket",
            "slogan": "Reiciendis libero est aspernatur nesciunt dolorem sunt aut non.",
            "description": "Blanditiis repellat molestias soluta. Debitis rem consequatur necessitatibus provident ipsum quaerat voluptatem alias. Dolores cum debitis et inventore labore et in non. Nisi totam doloribus praesentium quos error ex et.",
            "category": "Jacket",
            "default_price": "732.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38192,
            "campus": "hr-rfe",
            "name": "Zita Dress",
            "slogan": "Dignissimos non non.",
            "description": "Velit quia debitis excepturi iste. Neque aut et amet officia nihil. Eos rem autem quo eum optio cupiditate perspiciatis accusamus.",
            "category": "Dress",
            "default_price": "656.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38193,
            "campus": "hr-rfe",
            "name": "Harmon Romper",
            "slogan": "Amet adipisci quidem nihil in ratione rerum.",
            "description": "Voluptates amet vero distinctio voluptas vitae dolorem perspiciatis similique. Non pariatur commodi. Blanditiis est amet placeat ipsum iure maxime eos incidunt.",
            "category": "Romper",
            "default_price": "716.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38194,
            "campus": "hr-rfe",
            "name": "Ryann Backpack",
            "slogan": "Non harum perferendis cumque in praesentium.",
            "description": "Aut quidem sit natus est. Consequuntur voluptatum quibusdam voluptate quia. Eveniet nobis aut perferendis. Qui ex incidunt unde corporis modi voluptate.",
            "category": "Backpack",
            "default_price": "99.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38195,
            "campus": "hr-rfe",
            "name": "Walton Romper",
            "slogan": "Exercitationem nostrum illo ullam cumque beatae est.",
            "description": "Soluta odit vel libero repellendus odit consequatur dolorem inventore voluptates. Est sequi iste qui. Ab veritatis distinctio alias in quo. Deleniti id similique reiciendis quis rerum facilis iusto.",
            "category": "Romper",
            "default_price": "601.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38196,
            "campus": "hr-rfe",
            "name": "Reinhold 800 Trousers",
            "slogan": "Consequatur sint molestiae voluptas officiis minima.",
            "description": "Fugiat minima enim dolorem nam. Et explicabo non dignissimos est voluptatum accusantium delectus voluptatibus odit. Tenetur dolorum et.",
            "category": "Trousers",
            "default_price": "670.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38197,
            "campus": "hr-rfe",
            "name": "Effie Tank Top",
            "slogan": "Vitae voluptas aut et aut ea numquam.",
            "description": "Nisi assumenda nihil voluptas in inventore et dolor sapiente. Asperiores illum sit. Assumenda optio nisi numquam harum. Et sunt eius. Ut perspiciatis modi rerum vel asperiores. Perspiciatis modi accusamus quia voluptatibus incidunt quasi nihil.",
            "category": "Tank Top",
            "default_price": "189.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38198,
            "campus": "hr-rfe",
            "name": "Albert Skirt",
            "slogan": "Delectus qui omnis molestiae eius natus omnis in molestiae est.",
            "description": "Libero qui labore vero aut minima. Eius id molestiae facilis sed ad consequuntur. Quos ipsum provident eum corrupti aut. Qui rerum molestiae ex voluptatibus qui et illum. Cumque non ducimus eum eaque veritatis dicta suscipit eveniet.",
            "category": "Skirt",
            "default_price": "145.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38199,
            "campus": "hr-rfe",
            "name": "Stanley Skirt",
            "slogan": "Aut atque at sequi sed omnis.",
            "description": "Odit saepe est dolor sed fugit. Inventore officia est et. Ab neque dolor unde unde laudantium in. Ducimus eaque et veniam perferendis. Expedita beatae modi ut porro doloremque velit dicta.",
            "category": "Skirt",
            "default_price": "505.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38200,
            "campus": "hr-rfe",
            "name": "Seamus Trousers",
            "slogan": "Eos et pariatur ullam hic.",
            "description": "Eligendi sunt totam iste molestiae modi non. Neque aut ut magnam magnam nemo neque quibusdam. Porro similique nostrum dolorum atque inventore dolorem suscipit recusandae.",
            "category": "Trousers",
            "default_price": "584.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38201,
            "campus": "hr-rfe",
            "name": "The Julio Pants",
            "slogan": "Possimus voluptatem ut sapiente nam.",
            "description": "Eos totam cupiditate cupiditate et. Rerum et eum commodi eaque rerum voluptatibus. Nobis voluptatem minus odio nobis sint a. Quo repellat corrupti qui sint sit quod voluptas id.",
            "category": "Pants",
            "default_price": "59.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38202,
            "campus": "hr-rfe",
            "name": "Trey Backpack",
            "slogan": "Deserunt occaecati soluta nulla debitis qui neque.",
            "description": "Est quos ullam et. Alias consequatur fugit sit reiciendis blanditiis cupiditate ut voluptas. Veritatis pariatur aut aut nulla fugiat. Enim similique sunt sed vitae. Odio est sint odio nihil quae animi culpa et omnis. Ullam non illo neque.",
            "category": "Backpack",
            "default_price": "135.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38203,
            "campus": "hr-rfe",
            "name": "Giuseppe Heels",
            "slogan": "Deserunt inventore ut aut corporis.",
            "description": "Ipsam et nobis est. Veritatis dolor rerum soluta autem deleniti dolores dolore earum. Porro aspernatur placeat. Beatae voluptatem delectus.",
            "category": "Heels",
            "default_price": "702.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38204,
            "campus": "hr-rfe",
            "name": "Bud Suit",
            "slogan": "Sapiente eius ratione sed impedit sequi nostrum sed.",
            "description": "Dolorum aut nihil necessitatibus. Error nam id veniam eum earum. Sequi officia est neque. Quia quia dignissimos quis et exercitationem sed quam ab ducimus. Aut incidunt odit fuga ducimus. Et ipsum quod.",
            "category": "Suit",
            "default_price": "768.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38205,
            "campus": "hr-rfe",
            "name": "Vincenzo Sweatpants",
            "slogan": "Autem et et placeat molestiae.",
            "description": "Dicta hic ut aut. Omnis consequatur esse. Beatae in quis temporibus quod eius voluptates hic. Ab in unde eum officia et voluptas praesentium.",
            "category": "Sweatpants",
            "default_price": "266.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38206,
            "campus": "hr-rfe",
            "name": "Aidan Sunglasses",
            "slogan": "Quo ut et dicta et at velit voluptas esse.",
            "description": "Excepturi iure odit. Voluptate dicta dolorem non blanditiis. Consectetur placeat quod est veniam occaecati et. Dignissimos ab dolor cupiditate sunt. Sint rerum distinctio voluptas veniam alias repudiandae porro aut libero. Dolor qui facilis molestiae autem consequatur voluptas odit.",
            "category": "Sunglasses",
            "default_price": "450.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38207,
            "campus": "hr-rfe",
            "name": "Izabella Shirt",
            "slogan": "Perferendis delectus consequuntur.",
            "description": "Blanditiis provident nesciunt voluptas dolore odio enim ducimus earum. Odio ad voluptates quas. Ex illo deserunt. Voluptatem aspernatur repellendus praesentium et. Hic nihil et reiciendis. Magni suscipit illum ipsa omnis dignissimos distinctio non perferendis.",
            "category": "Shirt",
            "default_price": "457.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38208,
            "campus": "hr-rfe",
            "name": "Modesto Trousers",
            "slogan": "Recusandae et maiores dolores quaerat quo quas.",
            "description": "Eum placeat laboriosam odio. Sint nesciunt sit veniam voluptatibus sunt ipsum ut officiis dolor. Est ipsam sit vel suscipit. Sed facilis vel aut molestias laboriosam. Necessitatibus rerum quia.",
            "category": "Trousers",
            "default_price": "527.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38209,
            "campus": "hr-rfe",
            "name": "Jammie Heels",
            "slogan": "Porro labore eum est cumque.",
            "description": "Laudantium qui rem iusto odio voluptatem qui quae quia. Dolorem quisquam sunt ut quibusdam inventore nulla aut quibusdam voluptatem. Reiciendis odit veniam numquam quas non expedita dolor magni. Occaecati nihil consequatur totam dolores qui rem voluptate et. Nulla laborum in enim fugiat molestiae nulla inventore. Culpa doloribus placeat dolor.",
            "category": "Heels",
            "default_price": "324.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38210,
            "campus": "hr-rfe",
            "name": "Daija Coat",
            "slogan": "Cupiditate quia sit molestiae nemo optio delectus aut magni.",
            "description": "Aspernatur ipsa ut non alias sequi. Non in sed temporibus animi ratione ut totam maxime eveniet. Minus in rem.",
            "category": "Coat",
            "default_price": "611.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38211,
            "campus": "hr-rfe",
            "name": "Jevon Slacks",
            "slogan": "Eligendi architecto quasi nisi qui unde ullam ut maiores.",
            "description": "Sit repellat deserunt placeat sit dolorem pariatur odio numquam. Tenetur rerum voluptatem provident vel laudantium distinctio ea commodi facere. Ullam quibusdam cumque quis adipisci. Architecto sed aliquid odio est qui libero dolore ipsa.",
            "category": "Slacks",
            "default_price": "115.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38212,
            "campus": "hr-rfe",
            "name": "Taryn Skirt",
            "slogan": "Nostrum ut sunt soluta saepe mollitia impedit voluptatem beatae accusantium.",
            "description": "Quam aperiam laborum maxime aut repudiandae. Rem natus nisi aperiam. Perspiciatis maxime nostrum porro impedit sequi alias id odio molestiae. Maxime et ea pariatur. Sunt magnam quis eos libero voluptate. Nulla tenetur consequatur et incidunt dolorem et nisi necessitatibus.",
            "category": "Skirt",
            "default_price": "801.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38213,
            "campus": "hr-rfe",
            "name": "Gardner Cap",
            "slogan": "Voluptatem natus repellendus omnis consectetur recusandae incidunt voluptate voluptatum.",
            "description": "Expedita harum deserunt maxime aliquam rem qui odit magnam. Molestiae tenetur perspiciatis sint voluptatem quasi animi. Est vel ratione. Autem occaecati eos aperiam aliquid. Ut et perspiciatis.",
            "category": "Cap",
            "default_price": "195.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38214,
            "campus": "hr-rfe",
            "name": "Evalyn Socks",
            "slogan": "Porro sapiente at voluptatem alias expedita.",
            "description": "Fugiat impedit voluptatibus voluptas iure voluptatibus. Ea non commodi eum neque aut inventore. Quos sequi voluptatem. Ab quos doloremque accusantium voluptatum et nostrum est. Omnis officia provident.",
            "category": "Socks",
            "default_price": "502.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38215,
            "campus": "hr-rfe",
            "name": "Nicholaus Boots",
            "slogan": "Possimus corrupti veritatis asperiores id ut nulla in fugiat voluptatibus.",
            "description": "Suscipit autem quis repellendus culpa delectus perspiciatis laudantium consequuntur. Vero aut qui consequuntur repudiandae debitis et. Blanditiis voluptatum eum molestiae ad nam dolor. Earum non consequuntur fugit consequatur nihil est quia distinctio voluptas. Similique quam nulla exercitationem dignissimos sunt.",
            "category": "Boots",
            "default_price": "301.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38216,
            "campus": "hr-rfe",
            "name": "Vilma Pants",
            "slogan": "Reiciendis eius qui cumque.",
            "description": "Temporibus dicta sed qui et reprehenderit molestiae vero aut. Pariatur magni autem et. Porro magnam et libero nostrum optio iste ut ullam molestiae. Dolor possimus maiores autem officiis. Sint saepe sed illum aspernatur iusto.",
            "category": "Pants",
            "default_price": "953.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38217,
            "campus": "hr-rfe",
            "name": "Savanna Backpack",
            "slogan": "Id dolore aut.",
            "description": "Odio nulla repellat adipisci sunt voluptatem molestias et ipsum. Magni nihil eligendi deleniti quisquam cumque. Et ducimus totam rerum porro repellendus consequatur ut necessitatibus. Molestiae quibusdam vitae perferendis reiciendis. Et praesentium et deserunt magnam vel aliquam eveniet. Ut sit natus rerum molestias ab.",
            "category": "Backpack",
            "default_price": "996.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38218,
            "campus": "hr-rfe",
            "name": "Jairo Hat",
            "slogan": "Omnis reiciendis atque debitis.",
            "description": "Corporis aliquam deleniti aut fuga voluptas earum impedit est. Temporibus architecto et porro vero cumque voluptas ea et. Ducimus dignissimos excepturi nemo ut aut veniam aut adipisci.",
            "category": "Hat",
            "default_price": "633.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38219,
            "campus": "hr-rfe",
            "name": "Ignatius Suit",
            "slogan": "Molestiae qui consequuntur et enim beatae voluptas molestiae voluptatem cum.",
            "description": "Perferendis necessitatibus aut in ad consequuntur. Minus aliquid tempora voluptatem facere non ipsa architecto. Repellendus quis in.",
            "category": "Suit",
            "default_price": "122.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38220,
            "campus": "hr-rfe",
            "name": "The Ophelia Skirt",
            "slogan": "Libero aut rem sed.",
            "description": "Ad nihil sed rerum tenetur consequatur sapiente minima ut. Velit et omnis asperiores non sequi quasi nulla. Quia quis sed. Architecto quasi et numquam expedita perferendis deserunt non. Velit rerum voluptatem molestiae animi ducimus. Sit repudiandae deleniti accusamus illo.",
            "category": "Skirt",
            "default_price": "887.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38221,
            "campus": "hr-rfe",
            "name": "Leif Coat",
            "slogan": "Aliquid qui non laborum sint velit.",
            "description": "Quia deserunt in cum explicabo accusantium molestias ducimus. Sit quia natus sed error sed. Enim quasi eum adipisci natus sunt officiis id. Deleniti neque porro deleniti laboriosam est corrupti culpa.",
            "category": "Coat",
            "default_price": "400.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38222,
            "campus": "hr-rfe",
            "name": "Walter Shoes",
            "slogan": "Optio qui neque facere.",
            "description": "Totam eos quidem nostrum animi eius. Perspiciatis maxime fuga maxime et blanditiis molestiae deleniti facilis vel. Animi atque omnis eaque ut officia sapiente.",
            "category": "Shoes",
            "default_price": "465.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38223,
            "campus": "hr-rfe",
            "name": "Cassandra Boots",
            "slogan": "Quia voluptas magnam reiciendis iusto in.",
            "description": "Et minima facere praesentium in. Qui tempore voluptas eum ut quia quos aspernatur. Inventore voluptatem ea qui eaque. Quia quia sit doloremque voluptates blanditiis repellat. Veniam nulla id voluptas natus qui. Expedita voluptates fuga voluptates velit tempore impedit.",
            "category": "Boots",
            "default_price": "318.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38224,
            "campus": "hr-rfe",
            "name": "Rosalinda Hoodie",
            "slogan": "Consequatur dicta praesentium.",
            "description": "Ut minima sapiente nobis ea quis pariatur cumque. Quae amet doloremque magnam voluptatum voluptatem ut repellat dignissimos. Nisi rerum debitis perspiciatis.",
            "category": "Hoodie",
            "default_price": "955.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38225,
            "campus": "hr-rfe",
            "name": "Vicky Slacks",
            "slogan": "In architecto totam ipsam delectus velit ut quas.",
            "description": "Sequi possimus quis ducimus deleniti ut illo officiis non. Esse totam sit earum voluptatem nobis aut sit consectetur. Quo tempora ipsa incidunt dolorem molestiae. Ea quod voluptates qui aut veniam. Dignissimos voluptatem minima natus laudantium accusamus soluta quam voluptas harum.",
            "category": "Slacks",
            "default_price": "630.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38226,
            "campus": "hr-rfe",
            "name": "Elsie Sweater",
            "slogan": "Dolorum animi beatae.",
            "description": "Repellat aut nemo et eius laudantium illo aut nesciunt. Ad modi quis consequuntur qui rerum. Nihil libero aperiam autem dolores est earum in et iure. Sint ut laboriosam expedita necessitatibus labore at aut culpa sit. Sit quaerat quia. Quos esse nemo.",
            "category": "Sweater",
            "default_price": "197.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38227,
            "campus": "hr-rfe",
            "name": "Lauryn Sweater",
            "slogan": "Necessitatibus illo dolor qui iste nesciunt autem deleniti illo omnis.",
            "description": "Ea hic praesentium. Veniam sit officia natus. Id autem a tempore qui facere ut. Quia aut voluptas illum eaque nisi id facilis explicabo. Accusantium saepe odit unde ipsum voluptates aspernatur quis cumque.",
            "category": "Sweater",
            "default_price": "268.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38228,
            "campus": "hr-rfe",
            "name": "Kaylee Hoodie",
            "slogan": "Tenetur consequatur ratione sed ea aut est ratione adipisci.",
            "description": "Molestias id quisquam. Et et laudantium provident nostrum qui. Reprehenderit consequatur dicta dolorum. Vel nulla et est harum architecto voluptatem vitae exercitationem et. Eos quo sapiente. Placeat voluptatem id ut nisi ducimus.",
            "category": "Hoodie",
            "default_price": "443.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38229,
            "campus": "hr-rfe",
            "name": "Karolann Dress",
            "slogan": "Consequatur ut eum maiores optio quasi asperiores porro dicta.",
            "description": "Ad in facere ducimus sit libero mollitia inventore et. Quam quia molestiae et velit tempore quis nostrum et vel. Nihil qui eos labore ab. Quia itaque quas necessitatibus at sit voluptatem. Doloribus nisi dolores omnis consequatur eos molestiae. Consequatur autem facere eum alias quibusdam repellendus error.",
            "category": "Dress",
            "default_price": "154.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38230,
            "campus": "hr-rfe",
            "name": "Katherine Boots",
            "slogan": "Rerum dolorum vel praesentium incidunt rerum voluptates quia dolores sapiente.",
            "description": "Rerum esse modi suscipit quae dolorem. Maiores ipsam voluptas unde eaque ipsam. Nisi est hic doloremque esse et est exercitationem culpa.",
            "category": "Boots",
            "default_price": "433.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38231,
            "campus": "hr-rfe",
            "name": "Jay 800 Jacket",
            "slogan": "Reprehenderit est voluptas omnis esse facilis laudantium soluta.",
            "description": "Earum veniam eaque iste et placeat reprehenderit. Quo consectetur possimus. Similique sit temporibus animi. Tempora nostrum et.",
            "category": "Jacket",
            "default_price": "507.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38232,
            "campus": "hr-rfe",
            "name": "Fiona Hat",
            "slogan": "Ex quae ex et ut dolorum in.",
            "description": "Hic consectetur voluptatem accusantium corporis aliquam error ea ut. Debitis doloribus magnam mollitia enim. Perferendis maxime quo repellat. Sit consequuntur est est facilis voluptas dolore iste. Voluptatem quae repudiandae laborum. Ex aut ab et reiciendis nemo voluptatibus.",
            "category": "Hat",
            "default_price": "149.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38233,
            "campus": "hr-rfe",
            "name": "Jefferey Trousers",
            "slogan": "Quod sit voluptates quo facilis dolorem.",
            "description": "Officiis omnis adipisci beatae et delectus similique eos. Quos voluptatem assumenda placeat eius voluptatem nihil. Explicabo consectetur et doloribus dolorum sit. Et quaerat id rerum natus.",
            "category": "Trousers",
            "default_price": "1.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38234,
            "campus": "hr-rfe",
            "name": "Jennings Skirt",
            "slogan": "Veniam occaecati rerum fugit est ipsa provident.",
            "description": "Aliquam sunt molestiae quia expedita animi. Molestiae veritatis voluptas doloremque corrupti dolor pariatur ut accusamus. Itaque aliquam minus impedit ea et commodi sit ad. Velit perferendis et eligendi consequuntur voluptatem.",
            "category": "Skirt",
            "default_price": "590.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38235,
            "campus": "hr-rfe",
            "name": "Ilene Cap",
            "slogan": "Labore vel et dolores dolorem distinctio cupiditate totam.",
            "description": "Ut vitae enim sint eos omnis. Est omnis odit quo aut. Ut voluptatibus et ipsa numquam deleniti maiores et suscipit corporis. Recusandae voluptatum libero.",
            "category": "Cap",
            "default_price": "204.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38236,
            "campus": "hr-rfe",
            "name": "Kareem Sunglasses",
            "slogan": "Sed dolor enim architecto autem voluptatibus dolor.",
            "description": "Vero explicabo nostrum non vel enim aut. Eos vel et voluptas dicta corporis. Iusto vel dolor nam aliquam pariatur et.",
            "category": "Sunglasses",
            "default_price": "397.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38237,
            "campus": "hr-rfe",
            "name": "Tiana Coat",
            "slogan": "Doloremque id fugiat ea tempore ut eos qui molestiae.",
            "description": "Reprehenderit amet dolore dolores. Iste et consectetur et dicta ipsa quaerat laudantium est. Fugiat incidunt tenetur qui dolor. Assumenda omnis eius dolorem eum quis qui quisquam.",
            "category": "Coat",
            "default_price": "68.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38238,
            "campus": "hr-rfe",
            "name": "Jazmin Jacket",
            "slogan": "Tempora aut iusto.",
            "description": "Perferendis aut ab repudiandae quas fugiat. Iure numquam aut dolor aliquid placeat quibusdam. Fugit provident nihil inventore temporibus voluptas repudiandae. Eaque quia autem reiciendis excepturi omnis accusantium aut non nisi. Molestiae distinctio temporibus inventore. Laudantium quasi in excepturi aliquam itaque.",
            "category": "Jacket",
            "default_price": "775.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38239,
            "campus": "hr-rfe",
            "name": "Dayana 1450 Dress",
            "slogan": "Aliquam quia molestiae omnis veritatis accusantium.",
            "description": "Minus odio laborum. Quam impedit est maxime quis asperiores est totam. Est minus aut aspernatur officiis quam est odit ut sint.",
            "category": "Dress",
            "default_price": "56.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38240,
            "campus": "hr-rfe",
            "name": "Einar Suit",
            "slogan": "Blanditiis rerum aperiam ut rerum esse.",
            "description": "Tenetur quae quis aperiam. Dolor ratione nostrum adipisci quia. Ea vero molestiae minima sequi illo vitae excepturi.",
            "category": "Suit",
            "default_price": "660.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38241,
            "campus": "hr-rfe",
            "name": "Payton Shorts",
            "slogan": "Cumque facere aliquam ipsum at laboriosam natus soluta.",
            "description": "Enim quidem libero odit magnam praesentium consequatur voluptates ut. Et sunt laborum omnis aut. Excepturi quae qui ab. Ut eum est quaerat tenetur soluta dolor provident consequatur et. Aut eos et aut iure ab alias voluptatem quia quos. Aut ut et iusto inventore nisi eligendi ipsa dolorem dolore.",
            "category": "Shorts",
            "default_price": "694.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38242,
            "campus": "hr-rfe",
            "name": "Maria 900 Shirt",
            "slogan": "Quisquam rerum delectus eaque possimus modi optio ratione debitis optio.",
            "description": "Corporis tempora quisquam facere magnam eum in. Molestias rerum aut quod omnis ab ipsum accusamus voluptate nam. A unde sed aut non laborum non tempore est sint.",
            "category": "Shirt",
            "default_price": "50.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38243,
            "campus": "hr-rfe",
            "name": "Karl Boots",
            "slogan": "Qui et debitis quidem a nihil omnis.",
            "description": "Voluptas id fuga voluptas illo optio. Cumque tempore laborum earum perspiciatis et. Debitis est rerum sit. Sapiente distinctio fuga velit qui ex nulla minus qui.",
            "category": "Boots",
            "default_price": "213.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38244,
            "campus": "hr-rfe",
            "name": "The Cecilia Boots",
            "slogan": "Iusto cum atque odit mollitia.",
            "description": "Accusamus totam consequatur et facilis a sunt ullam aut non. Omnis maiores autem soluta aut fugit sed nostrum. Ratione illum voluptates. Aut sunt iusto velit totam doloremque ducimus.",
            "category": "Boots",
            "default_price": "248.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38245,
            "campus": "hr-rfe",
            "name": "Clint 1000 Romper",
            "slogan": "Saepe laboriosam repellendus laborum alias vitae aliquid.",
            "description": "Dolor et perspiciatis sed omnis rerum reprehenderit aut. Quas quia enim excepturi ipsa neque et. Hic quis temporibus quia quos eum reiciendis. Ratione aperiam et. Deleniti rerum quo molestiae eveniet eum tempora odio tenetur. Quasi maxime fugit ut est quas.",
            "category": "Romper",
            "default_price": "839.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38246,
            "campus": "hr-rfe",
            "name": "Rubie Cap",
            "slogan": "Fuga voluptatem nobis.",
            "description": "Aut sit et. Reprehenderit odio quasi ipsa. Aspernatur error sunt quam. Sint consequatur vero qui. Inventore illum temporibus accusamus animi. Error dolor quos pariatur quam quaerat officiis esse velit et.",
            "category": "Cap",
            "default_price": "538.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38247,
            "campus": "hr-rfe",
            "name": "Cecile 800 Sunglasses",
            "slogan": "Beatae dicta blanditiis perspiciatis sed est error.",
            "description": "Dolore voluptatem beatae eligendi. Et consequuntur rem tempore. Autem quis voluptatem qui impedit. Rerum quas veniam omnis asperiores quia delectus ad corrupti. Qui eos vero excepturi nihil aliquam ipsam omnis ipsam.",
            "category": "Sunglasses",
            "default_price": "387.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38248,
            "campus": "hr-rfe",
            "name": "Adrian Trousers",
            "slogan": "Odit architecto consequuntur culpa beatae id at omnis aperiam eaque.",
            "description": "Et qui rerum. Ut praesentium alias dolor soluta aut. Deleniti minus deleniti earum. Est nostrum omnis aut. Quia quia deserunt dicta sint omnis sunt nemo quasi fugiat.",
            "category": "Trousers",
            "default_price": "731.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38249,
            "campus": "hr-rfe",
            "name": "Gertrude 1450 Jacket",
            "slogan": "Accusantium excepturi ut inventore perspiciatis praesentium.",
            "description": "Eum in ab enim deleniti veritatis qui. Totam alias sint temporibus ratione. Commodi nisi facilis nisi doloremque et. Inventore est voluptatum fugit et. Numquam consequuntur deserunt qui asperiores officia delectus rem corporis quod. Non et mollitia sed minus odit quo minima mollitia nulla.",
            "category": "Jacket",
            "default_price": "207.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38250,
            "campus": "hr-rfe",
            "name": "Aurelia Slacks",
            "slogan": "Fugit voluptas sint optio quam est eaque voluptas illum vitae.",
            "description": "Laboriosam vel dolore. Est quia fugit. Perferendis quidem esse. Omnis doloribus repellendus voluptatem id eaque ea ducimus.",
            "category": "Slacks",
            "default_price": "322.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38251,
            "campus": "hr-rfe",
            "name": "Noel Jacket",
            "slogan": "Aut eum quos quisquam ea.",
            "description": "Earum adipisci veritatis veniam neque et provident voluptatum adipisci aut. Doloribus maiores enim consequatur consequatur facere. Dolores modi harum. Culpa sapiente nostrum. Cupiditate qui ut eligendi debitis mollitia.",
            "category": "Jacket",
            "default_price": "193.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38252,
            "campus": "hr-rfe",
            "name": "Manley Jacket",
            "slogan": "Qui ipsa aut et similique molestiae.",
            "description": "Tenetur et nihil voluptatem possimus iure a. Expedita reiciendis cumque et voluptatem. Omnis est alias. Nihil iste maxime quas incidunt sit doloremque. Rerum ut aut dolore dignissimos voluptatem nulla.",
            "category": "Jacket",
            "default_price": "959.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38253,
            "campus": "hr-rfe",
            "name": "Connor Shoes",
            "slogan": "Repudiandae dolores maiores ducimus quia aut magnam non sapiente.",
            "description": "In ut corporis. In ut est et tempore et et et eligendi fugiat. Dicta et in occaecati dolorum possimus eum accusamus. Quo sint quae. Dicta et ducimus. Qui vitae velit eum rerum et.",
            "category": "Shoes",
            "default_price": "189.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38254,
            "campus": "hr-rfe",
            "name": "The Montana Dress",
            "slogan": "Quod quia et excepturi nesciunt quidem totam doloribus ratione.",
            "description": "Fuga possimus fuga voluptatem quas perferendis qui corrupti rerum nam. Vel eius in sit dolore. Iusto et amet in quia aut ducimus atque dolor.",
            "category": "Dress",
            "default_price": "751.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38255,
            "campus": "hr-rfe",
            "name": "Alec Slacks",
            "slogan": "Sapiente qui in repudiandae molestias at.",
            "description": "Consequatur similique sit est quaerat maxime nihil aut. Voluptas blanditiis quisquam est voluptas. Fugit dolorem pariatur voluptas. Minus dolores voluptatem ipsam eos quidem dolores id. Voluptatem doloremque officiis omnis et assumenda expedita. Sint laborum praesentium magnam ab distinctio vel.",
            "category": "Slacks",
            "default_price": "846.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38256,
            "campus": "hr-rfe",
            "name": "Alberta Sweatpants",
            "slogan": "Quo magni nesciunt et mollitia cum.",
            "description": "Temporibus est et sapiente reprehenderit praesentium cupiditate dignissimos aut aut. Ex optio dolor quisquam est ipsa repellat sit. Id nam iste consequatur aut laboriosam quia eligendi ut ad. Aut minima eveniet nulla deserunt reprehenderit cum.",
            "category": "Sweatpants",
            "default_price": "618.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38257,
            "campus": "hr-rfe",
            "name": "Demarco Hoodie",
            "slogan": "Corrupti laudantium placeat esse ad.",
            "description": "Occaecati ducimus sed esse accusantium consectetur nemo quia quae reprehenderit. Voluptas aliquid consequatur. Autem sed sunt doloribus assumenda.",
            "category": "Hoodie",
            "default_price": "859.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38258,
            "campus": "hr-rfe",
            "name": "Bo Heels",
            "slogan": "Dolor cumque explicabo.",
            "description": "Suscipit modi asperiores temporibus ducimus perspiciatis nisi laudantium. Eius cum quisquam est rerum. Iusto asperiores accusantium ut.",
            "category": "Heels",
            "default_price": "742.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38259,
            "campus": "hr-rfe",
            "name": "Demond Shoes",
            "slogan": "Ut incidunt id beatae et et eaque doloremque ab quidem.",
            "description": "Sit nihil inventore voluptatem ipsa mollitia quae voluptas est consequatur. Distinctio corporis sint doloribus alias et nihil voluptatem. Quidem quia est. Non nihil reiciendis qui non nemo. Consequatur rerum ipsam ratione quaerat et impedit. Ipsam consequatur aut.",
            "category": "Shoes",
            "default_price": "81.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38260,
            "campus": "hr-rfe",
            "name": "Justen 800 Romper",
            "slogan": "Libero nulla velit alias explicabo nemo deleniti.",
            "description": "Corporis aut dolorum eaque nulla id nostrum. Voluptates exercitationem et aut corrupti velit et sit officia. Rerum est accusantium aut debitis provident ipsam deleniti.",
            "category": "Romper",
            "default_price": "825.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38261,
            "campus": "hr-rfe",
            "name": "Maurice Hat",
            "slogan": "Iusto magnam et fuga temporibus fugiat libero.",
            "description": "Illum et ratione. Quos magni minus ea suscipit. Voluptas autem officia. Ex voluptas sint aut exercitationem est. Voluptatem itaque exercitationem aliquid unde dolore molestiae.",
            "category": "Hat",
            "default_price": "643.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38262,
            "campus": "hr-rfe",
            "name": "Lavada Hoodie",
            "slogan": "Quia officia blanditiis dolores incidunt veritatis laudantium a.",
            "description": "Praesentium quo animi dolores laborum sapiente. Enim eaque suscipit itaque repellendus ratione dignissimos. Maiores placeat odio autem sit neque quo eos adipisci. Incidunt vel dolorem nihil dolorem facilis voluptas ab nisi accusantium.",
            "category": "Hoodie",
            "default_price": "729.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38263,
            "campus": "hr-rfe",
            "name": "Aric Dress",
            "slogan": "Porro dicta suscipit ea commodi.",
            "description": "Voluptatem quasi in voluptatem nesciunt deleniti dolorum iste similique. Qui et recusandae optio. Ut et occaecati sit culpa distinctio.",
            "category": "Dress",
            "default_price": "245.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38264,
            "campus": "hr-rfe",
            "name": "The Sonya Sweatpants",
            "slogan": "Facere occaecati qui.",
            "description": "Adipisci repellendus labore sunt ea. Tempore deleniti velit atque libero dolorem. Et sequi magnam id molestiae quod.",
            "category": "Sweatpants",
            "default_price": "752.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38265,
            "campus": "hr-rfe",
            "name": "Anabelle Sweatpants",
            "slogan": "Exercitationem et id aliquam voluptates minus doloremque.",
            "description": "Enim aliquid praesentium aut aperiam quia autem eius. Enim aut aut. Aliquam in deserunt sunt est modi corrupti facilis animi qui. Sed amet a cumque labore ex earum nemo vitae. Dolore dignissimos alias laborum qui nihil qui.",
            "category": "Sweatpants",
            "default_price": "887.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38266,
            "campus": "hr-rfe",
            "name": "Ralph Suit",
            "slogan": "Dolor fugit aut.",
            "description": "Sit dignissimos dolorem dolor eos laudantium possimus molestias. Perferendis voluptatem vel debitis. Veniam voluptatem voluptatem rerum error neque omnis vitae.",
            "category": "Suit",
            "default_price": "685.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38267,
            "campus": "hr-rfe",
            "name": "Madalyn Jacket",
            "slogan": "Cum consequatur est veritatis alias in in et odio.",
            "description": "Architecto praesentium ut et consequatur officiis amet sequi sit aut. Architecto rerum vel sit voluptatum omnis ut quisquam. Quo et eligendi. Sint officia harum est commodi praesentium nostrum ut debitis. Delectus eveniet unde ipsam omnis provident non aut.",
            "category": "Jacket",
            "default_price": "148.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38268,
            "campus": "hr-rfe",
            "name": "Willie Sunglasses",
            "slogan": "Inventore quo doloremque et.",
            "description": "Illo hic et similique repellendus nisi ut. Et ea et itaque hic aliquid. Deserunt at qui omnis eveniet accusantium sed aliquam nesciunt.",
            "category": "Sunglasses",
            "default_price": "282.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38269,
            "campus": "hr-rfe",
            "name": "Jordan 600 Shorts",
            "slogan": "Sequi voluptates minus debitis rerum ullam perspiciatis suscipit tempore.",
            "description": "Non laudantium consequatur perspiciatis repellat quibusdam esse. Voluptas vero sed neque quis tempora perspiciatis aliquam. Commodi molestiae blanditiis ipsum qui. Nihil optio iusto tempore aut error.",
            "category": "Shorts",
            "default_price": "472.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38270,
            "campus": "hr-rfe",
            "name": "Fredy 250 Suit",
            "slogan": "Illum optio eligendi rerum reprehenderit consequatur et sit amet.",
            "description": "Est quisquam et et aliquam. Et eos perferendis perferendis nisi odit dolorum et nihil quo. Ea ipsa modi quasi. Cumque reiciendis autem ratione.",
            "category": "Suit",
            "default_price": "462.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38271,
            "campus": "hr-rfe",
            "name": "Chris Tank Top",
            "slogan": "Laboriosam odio dolor quo ab.",
            "description": "Consequatur quam et sint repudiandae amet eius est. Magnam eos distinctio sunt. Voluptatem quaerat perspiciatis in quod minus velit ut ut non.",
            "category": "Tank Top",
            "default_price": "812.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38272,
            "campus": "hr-rfe",
            "name": "Kody Cap",
            "slogan": "Minus saepe placeat tenetur quia.",
            "description": "Rem saepe perspiciatis aut beatae cumque velit deleniti aut dignissimos. Magnam nisi magnam ut laborum iure et. Iste quis eligendi. Cupiditate aut libero. Non iste fugiat molestias nam laborum voluptatem perferendis cum. Praesentium corporis magnam.",
            "category": "Cap",
            "default_price": "148.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38273,
            "campus": "hr-rfe",
            "name": "Keira Suit",
            "slogan": "Aut voluptatem ut expedita ab voluptas.",
            "description": "Eveniet facilis doloremque impedit occaecati. Nihil itaque dicta aut et quo non perspiciatis quam. Vel fugit ad aut aut atque numquam. Est veniam odio maxime repellendus quis tempora voluptatem.",
            "category": "Suit",
            "default_price": "285.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38274,
            "campus": "hr-rfe",
            "name": "Ellen Coat",
            "slogan": "Recusandae consequatur ea saepe.",
            "description": "Inventore non voluptatibus maiores quasi sequi omnis consequuntur nam ut. Nam eum voluptatem totam dolore minus modi. Ut enim inventore. Qui necessitatibus et voluptatem non et. Reiciendis ut atque et quaerat sit eius nemo rerum.",
            "category": "Coat",
            "default_price": "351.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38275,
            "campus": "hr-rfe",
            "name": "Jaeden Pants",
            "slogan": "Accusantium sint libero sed quibusdam laborum atque vero sapiente porro.",
            "description": "Modi quia cumque. Odio qui accusamus quasi cum. Id magni voluptas ab rem. Magnam voluptatem sunt. Et eum corrupti laborum deleniti distinctio quia voluptatem iste. Vel eaque reprehenderit nostrum voluptas.",
            "category": "Pants",
            "default_price": "789.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38276,
            "campus": "hr-rfe",
            "name": "Monica Trousers",
            "slogan": "Ut provident veniam vero dolor optio quia et.",
            "description": "Repellat a explicabo voluptate illum saepe tempore. Labore et sint ullam non velit. Facere qui ratione perspiciatis sint.",
            "category": "Trousers",
            "default_price": "98.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38277,
            "campus": "hr-rfe",
            "name": "Moriah Slacks",
            "slogan": "Sit qui pariatur sunt alias sit omnis qui totam tempora.",
            "description": "Et quasi enim cupiditate itaque est recusandae. Unde totam est distinctio dolorum. Est perspiciatis rem. Provident et cum. Quia porro omnis nesciunt vitae non. Perspiciatis fugiat quis suscipit et.",
            "category": "Slacks",
            "default_price": "32.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38278,
            "campus": "hr-rfe",
            "name": "Jorge 1300 Dress",
            "slogan": "Quisquam quo commodi dolores ratione magnam fugit quas unde.",
            "description": "Porro tempore dolorem porro tenetur. Quis deleniti non pariatur ullam velit. Rerum quia possimus illum ea assumenda nobis. Dolore cumque fuga quis ut unde eius. Vel enim expedita repudiandae. Ut ut eaque hic facilis ut et commodi libero.",
            "category": "Dress",
            "default_price": "288.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38279,
            "campus": "hr-rfe",
            "name": "Marion Coat",
            "slogan": "Et est laborum exercitationem.",
            "description": "Consequuntur aut aspernatur est. Voluptas odio voluptate ea sunt quia culpa non ex. Ea dicta et cum aut laboriosam eos assumenda optio facere. Tenetur natus voluptatem autem dolores eligendi. Nostrum repudiandae et quae quod nihil sint doloremque. Vero sed dolores.",
            "category": "Coat",
            "default_price": "323.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38280,
            "campus": "hr-rfe",
            "name": "Levi 1400 Hat",
            "slogan": "Totam sunt tempora qui aut tempore magni eos.",
            "description": "Doloremque autem ratione. Suscipit pariatur eos sed enim dolores at reprehenderit alias reprehenderit. Dolores odio consequatur delectus. Eos consequuntur odio nihil similique sed eos hic suscipit. Et sint omnis quis optio voluptatem ut reprehenderit.",
            "category": "Hat",
            "default_price": "731.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38281,
            "campus": "hr-rfe",
            "name": "Antonio Romper",
            "slogan": "Optio deserunt omnis harum ducimus officiis quaerat omnis.",
            "description": "Sunt blanditiis facere. Et consequuntur veritatis consequatur consequuntur quia debitis. Tenetur totam fugit qui praesentium accusantium. Eum esse sint iure et suscipit odit. Vitae adipisci iusto sed deleniti in fugiat enim in aspernatur.",
            "category": "Romper",
            "default_price": "772.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38282,
            "campus": "hr-rfe",
            "name": "The Deion Hat",
            "slogan": "Consequuntur consectetur fuga facilis qui ut delectus.",
            "description": "Dolore accusantium qui dolorem nihil incidunt occaecati et. Minima deserunt quia. Autem similique repellendus. Voluptate aut alias nam velit totam rerum ut.",
            "category": "Hat",
            "default_price": "388.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38283,
            "campus": "hr-rfe",
            "name": "Elaina Heels",
            "slogan": "Saepe delectus dolores.",
            "description": "Consequatur et quisquam perspiciatis ullam et voluptatibus. Sint voluptas voluptas provident. Incidunt consequatur sunt dolore ut fugiat officia optio. Eos ut est et illum maxime adipisci ullam et repellat. Distinctio rem consequatur modi quia possimus quis quod et labore.",
            "category": "Heels",
            "default_price": "836.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38284,
            "campus": "hr-rfe",
            "name": "Adelia Shoes",
            "slogan": "Commodi ut voluptatem.",
            "description": "Dolorem nihil ut. Ut est magnam ut dolor culpa cupiditate sit et quidem. Fuga id corporis ea quia et. Accusamus consectetur hic rem quaerat recusandae. Quia quas voluptas id deleniti tenetur ut.",
            "category": "Shoes",
            "default_price": "315.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38285,
            "campus": "hr-rfe",
            "name": "Tatyana Hoodie",
            "slogan": "Beatae velit non doloribus omnis magnam eum.",
            "description": "Deleniti earum quasi blanditiis illum accusantium error quasi. Debitis dolorem delectus. Aliquam unde ea optio eos.",
            "category": "Hoodie",
            "default_price": "831.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38286,
            "campus": "hr-rfe",
            "name": "Kristian Hat",
            "slogan": "Minima qui omnis incidunt exercitationem.",
            "description": "Quaerat nam ipsam aut maxime voluptatem dicta nobis. Quaerat aut ab in. Officiis consequatur quod atque non qui quia omnis. Consequatur reiciendis ea consectetur consequatur sit sequi et distinctio. Mollitia voluptatem placeat consequatur ipsam aliquid sunt corrupti voluptatibus omnis.",
            "category": "Hat",
            "default_price": "575.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38287,
            "campus": "hr-rfe",
            "name": "Marcelle Shorts",
            "slogan": "Dolor voluptates quasi voluptate expedita placeat veniam nihil error.",
            "description": "Ducimus provident impedit molestiae eius et aliquid. Nobis aut optio aut praesentium placeat soluta assumenda. A et qui quia soluta sequi enim eius ratione eaque.",
            "category": "Shorts",
            "default_price": "915.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38288,
            "campus": "hr-rfe",
            "name": "Trudie Shorts",
            "slogan": "Aspernatur magni animi.",
            "description": "Consequuntur accusamus iure saepe asperiores dolorem quia eligendi ea itaque. Natus illum minima nemo suscipit. Beatae soluta ut est mollitia sunt rerum. Tenetur sunt labore. Impedit blanditiis fugit occaecati ea. Exercitationem dolor quod.",
            "category": "Shorts",
            "default_price": "750.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38289,
            "campus": "hr-rfe",
            "name": "Ole Tank Top",
            "slogan": "Porro molestiae est sit velit quo nihil accusantium.",
            "description": "At eos debitis nobis esse est soluta aut. Repudiandae deleniti autem expedita tempore facilis rerum. Possimus dolorum corrupti repellat nam alias. Excepturi voluptatibus ducimus aliquid dolorem ipsa cupiditate pariatur.",
            "category": "Tank Top",
            "default_price": "432.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38290,
            "campus": "hr-rfe",
            "name": "Treva Romper",
            "slogan": "Soluta cum doloremque culpa consequatur quo illum quia.",
            "description": "Temporibus id est similique necessitatibus libero velit rerum quasi provident. Placeat ipsum quidem. Cupiditate cum harum hic fugiat iusto. Non voluptatem enim commodi cum. Impedit enim est consectetur dolores distinctio recusandae nihil iste. Eligendi recusandae aut nihil veritatis ut voluptatem.",
            "category": "Romper",
            "default_price": "674.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38291,
            "campus": "hr-rfe",
            "name": "Paxton Dress",
            "slogan": "Suscipit sunt ut minima.",
            "description": "Et voluptatem non. Sunt est est amet ab cupiditate et earum aliquid. Aspernatur velit sit dolore aperiam cum qui porro saepe.",
            "category": "Dress",
            "default_price": "866.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38292,
            "campus": "hr-rfe",
            "name": "Casper Slacks",
            "slogan": "Laboriosam eum consectetur reiciendis dolor earum.",
            "description": "Ex omnis maxime veniam quod aut. Est eius molestias. Non dolorem molestiae.",
            "category": "Slacks",
            "default_price": "284.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38293,
            "campus": "hr-rfe",
            "name": "Cristian Coat",
            "slogan": "Quia ut ut similique iste est sunt.",
            "description": "Quod placeat ipsa et est recusandae. Praesentium pariatur facere voluptatem. Odit harum est sapiente nihil ea ea ea est. Totam consequatur eaque ut cum consequatur qui facere. Et dolorem ea consequatur.",
            "category": "Coat",
            "default_price": "205.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38294,
            "campus": "hr-rfe",
            "name": "The Everett Cap",
            "slogan": "A earum natus quae aut eos quasi ipsam molestias.",
            "description": "Id recusandae rerum odio ea ratione consequatur. Adipisci voluptatem quis. Aperiam aut at sed quo earum reprehenderit laborum nesciunt nulla. Doloremque non distinctio rerum. Voluptatem voluptatem voluptatem veniam earum ea est. Enim officiis sint est nihil dolores id.",
            "category": "Cap",
            "default_price": "531.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38295,
            "campus": "hr-rfe",
            "name": "Anika Sweater",
            "slogan": "Sint voluptatibus sit deserunt minus ipsam ex aperiam.",
            "description": "Deleniti beatae dolore laboriosam nam perferendis voluptatem ducimus quis praesentium. Eius reiciendis quos eveniet accusamus et repudiandae blanditiis. Assumenda non est velit sapiente expedita. Suscipit sed quibusdam ea sed necessitatibus animi modi ullam animi. Iure laudantium eos ab commodi quia sapiente nesciunt.",
            "category": "Sweater",
            "default_price": "521.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38296,
            "campus": "hr-rfe",
            "name": "Garfield Dress",
            "slogan": "Voluptas ut aliquid a.",
            "description": "Voluptas ratione dolor ut fugiat ea assumenda corporis consequatur eos. Ullam omnis similique voluptatibus sint vel alias dicta tenetur incidunt. Qui accusamus quisquam tempore molestiae. In et possimus nisi eum harum nulla. Sit repudiandae hic molestiae eos ut quia quae repudiandae error. Quos ea quia natus eaque cumque.",
            "category": "Dress",
            "default_price": "262.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38297,
            "campus": "hr-rfe",
            "name": "Devante Cap",
            "slogan": "Repellat qui iste odio in labore dolorem in vel odit.",
            "description": "Et nostrum omnis voluptas rerum eos impedit praesentium voluptatem mollitia. Assumenda fuga illum tempora doloremque omnis eaque consequuntur. Voluptates eligendi et molestias omnis eum sapiente ut velit quo. Doloremque ut at libero aut. Dicta et aut quas id sit optio ipsam.",
            "category": "Cap",
            "default_price": "435.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38298,
            "campus": "hr-rfe",
            "name": "Lucienne Tank Top",
            "slogan": "Corporis voluptates temporibus.",
            "description": "Est placeat nisi consequatur quo excepturi in dolores sapiente. Omnis maxime soluta consectetur quia dolore voluptatem ullam vel. Similique non sed in consequuntur. Et voluptatem labore laboriosam amet.",
            "category": "Tank Top",
            "default_price": "243.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38299,
            "campus": "hr-rfe",
            "name": "Devonte Sweater",
            "slogan": "Laudantium rem dolorem.",
            "description": "Fugit et ut. Corrupti et veniam laboriosam dicta rerum veritatis odit autem in. Inventore eaque quidem eos non. Delectus exercitationem error. Aut eaque voluptate nam voluptatem vel ab. Est ut inventore.",
            "category": "Sweater",
            "default_price": "303.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38300,
            "campus": "hr-rfe",
            "name": "Heber Skirt",
            "slogan": "Vero assumenda autem explicabo laboriosam nihil soluta.",
            "description": "In autem est. Id perspiciatis neque est. Maiores voluptatem ab et incidunt velit nostrum.",
            "category": "Skirt",
            "default_price": "104.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38301,
            "campus": "hr-rfe",
            "name": "Grady Sweater",
            "slogan": "Eum alias temporibus qui voluptatibus ut porro.",
            "description": "Assumenda aut eos. Nesciunt quisquam vero molestiae voluptatibus repellendus quaerat et dignissimos. Officiis tenetur hic et ipsum error fugit mollitia. Exercitationem nulla aspernatur voluptate voluptas dolores deserunt et. Et magnam corporis voluptatem sapiente velit deserunt voluptas. Et recusandae inventore optio.",
            "category": "Sweater",
            "default_price": "676.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38302,
            "campus": "hr-rfe",
            "name": "The Joaquin Hoodie",
            "slogan": "Consectetur distinctio et porro velit alias qui.",
            "description": "Nemo dolore blanditiis a eligendi excepturi quaerat ducimus ut. Non laudantium fuga facilis vel. Et placeat et vel fugit velit et modi odit culpa.",
            "category": "Hoodie",
            "default_price": "597.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38303,
            "campus": "hr-rfe",
            "name": "Lyda Coat",
            "slogan": "Sint quia veniam beatae aperiam quae doloribus aut a rerum.",
            "description": "Beatae temporibus veritatis rerum est doloremque. Fugiat fugiat quam et ipsum consequatur officia quam. Culpa velit fuga sunt voluptas et expedita. Repellat non sunt quo a ad. Voluptate omnis officiis laborum.",
            "category": "Coat",
            "default_price": "670.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38304,
            "campus": "hr-rfe",
            "name": "Jesse Trousers",
            "slogan": "Corporis officia voluptatibus.",
            "description": "Perferendis quidem et eveniet doloremque nisi a dolores adipisci. Dolore optio vel quo sint pariatur. Velit atque at sed ea non sint magnam. Quas vel eius tempora deleniti provident in a. Possimus officia sed eos culpa non nulla non maxime eum. Ipsa nesciunt facere deleniti laudantium voluptas accusantium velit perspiciatis vero.",
            "category": "Trousers",
            "default_price": "889.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38305,
            "campus": "hr-rfe",
            "name": "Marie Tank Top",
            "slogan": "Consequuntur nobis harum saepe quae corrupti beatae dolores.",
            "description": "Ad dolores hic quae similique itaque unde quas tempora. Autem omnis voluptatem non quasi. Atque sunt excepturi.",
            "category": "Tank Top",
            "default_price": "485.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38306,
            "campus": "hr-rfe",
            "name": "Susan 1700 Pants",
            "slogan": "Aut cum et accusantium earum quia nisi omnis quia culpa.",
            "description": "Repudiandae voluptas porro vitae corporis dolorem eligendi. Enim molestiae explicabo dolores sed odit dolor deserunt delectus qui. Ut dolor asperiores facere labore id porro in et repudiandae.",
            "category": "Pants",
            "default_price": "736.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38307,
            "campus": "hr-rfe",
            "name": "Josephine Sweatpants",
            "slogan": "Sapiente consequatur culpa possimus ab voluptatem.",
            "description": "Tenetur voluptas autem ipsum quod recusandae ullam sit sequi. Minus eveniet quis et soluta optio et et tenetur. Tenetur et nobis eos ab ipsum est molestiae blanditiis fugiat.",
            "category": "Sweatpants",
            "default_price": "879.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38308,
            "campus": "hr-rfe",
            "name": "Ernestine Shoes",
            "slogan": "Saepe a sit doloribus ratione cupiditate temporibus.",
            "description": "Sapiente eius velit. Veniam quibusdam voluptatem. Nesciunt facere itaque doloremque temporibus. Quis quam culpa.",
            "category": "Shoes",
            "default_price": "226.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38309,
            "campus": "hr-rfe",
            "name": "Kathryne Coat",
            "slogan": "Molestiae minima ipsum minus.",
            "description": "Non tempore aut alias quaerat nisi eum. Tempore ipsum fugiat minima delectus esse architecto itaque. Possimus id consequatur sed. Maxime sunt dolores distinctio vel velit magnam autem nam.",
            "category": "Coat",
            "default_price": "426.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38310,
            "campus": "hr-rfe",
            "name": "Bill Romper",
            "slogan": "Consequatur optio commodi.",
            "description": "Voluptas non sunt. Enim et magnam suscipit repellendus ducimus. Ad similique nihil id excepturi. Dolore est aut.",
            "category": "Romper",
            "default_price": "433.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38311,
            "campus": "hr-rfe",
            "name": "Dwight Hat",
            "slogan": "Nisi voluptatem deserunt dolores dolorum voluptate consequatur.",
            "description": "Ipsam voluptates reiciendis nulla. Accusamus praesentium sunt est ut nostrum sit eos quisquam velit. Qui autem aliquam eligendi doloribus. Dolore porro explicabo quia qui dolorem consectetur aspernatur. Qui nemo aut quo doloremque.",
            "category": "Hat",
            "default_price": "494.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38312,
            "campus": "hr-rfe",
            "name": "Alize Suit",
            "slogan": "Sunt id est vel occaecati eligendi facere voluptatem fugit.",
            "description": "Necessitatibus et aut voluptatem. Occaecati et dignissimos illum quidem consequatur. Aspernatur corporis quos voluptatibus. Rerum perspiciatis atque. Quia rerum eveniet recusandae aut rem ea delectus. Non quasi est est.",
            "category": "Suit",
            "default_price": "300.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38313,
            "campus": "hr-rfe",
            "name": "Bulah Boots",
            "slogan": "Non qui quibusdam architecto nulla praesentium nesciunt possimus.",
            "description": "Est repellat labore. Recusandae sit exercitationem. Qui reprehenderit minima dolorem totam nihil et veritatis esse. Omnis aliquid quia omnis amet illum sint quod.",
            "category": "Boots",
            "default_price": "289.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38314,
            "campus": "hr-rfe",
            "name": "Scot Hat",
            "slogan": "Dignissimos iste illum.",
            "description": "Vitae non quo est architecto amet at perspiciatis delectus sed. Eum blanditiis doloribus aut perspiciatis officia assumenda sint temporibus. Accusamus dolorem labore qui fugiat porro perferendis nam minus vel.",
            "category": "Hat",
            "default_price": "351.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38315,
            "campus": "hr-rfe",
            "name": "Micah Shirt",
            "slogan": "Culpa maiores ullam laborum quia rerum quas excepturi est.",
            "description": "Cumque est nihil aperiam voluptate voluptatem aperiam laudantium minima. Vero odit sed enim pariatur cumque. Minus quas earum quam velit expedita consequatur maiores sint. Quia quis quasi aperiam adipisci dolor ab. Quidem non expedita culpa.",
            "category": "Shirt",
            "default_price": "32.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38316,
            "campus": "hr-rfe",
            "name": "Cynthia Dress",
            "slogan": "Ut repellat cupiditate aperiam nisi.",
            "description": "Numquam voluptatum similique doloremque aut aperiam aut. Ad assumenda et autem nam fugit est quasi. Repellat sint deleniti.",
            "category": "Dress",
            "default_price": "825.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38317,
            "campus": "hr-rfe",
            "name": "Kaylie Pants",
            "slogan": "Sit aperiam et quod ex et totam alias error.",
            "description": "In praesentium accusantium aut sint distinctio illum repellendus saepe beatae. Eos aspernatur voluptatem quas ducimus qui omnis voluptatem adipisci laudantium. Laborum est quos rem facilis. Deserunt nobis tenetur culpa. Eos rem eveniet voluptas blanditiis unde deleniti et iure eveniet. Enim dolor aut ipsa dolore laboriosam.",
            "category": "Pants",
            "default_price": "382.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38318,
            "campus": "hr-rfe",
            "name": "Brando Cap",
            "slogan": "Distinctio autem odio commodi ducimus nemo.",
            "description": "Quia velit saepe in quis. Temporibus facere non optio adipisci. Quod rerum reprehenderit et consequatur velit eos qui doloremque maiores. Et quae optio nostrum. Ullam quidem ex est illo placeat aperiam natus suscipit nobis.",
            "category": "Cap",
            "default_price": "466.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38319,
            "campus": "hr-rfe",
            "name": "Juvenal Slacks",
            "slogan": "Est et non iste hic consequatur optio incidunt.",
            "description": "Sit dolorem error in nam. Iure minima natus nisi. Cum nihil fugiat.",
            "category": "Slacks",
            "default_price": "739.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38320,
            "campus": "hr-rfe",
            "name": "Laury 450 Dress",
            "slogan": "Velit velit quaerat facilis sit consequatur enim exercitationem.",
            "description": "Voluptatum et voluptatem ut voluptas at sint a. Labore ullam quis molestiae amet consequatur cum voluptas est. Aperiam reprehenderit eveniet quia dolorem quam quae ipsam. Dolores molestiae labore. Rem libero voluptatum.",
            "category": "Dress",
            "default_price": "645.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        },
        {
            "id": 38321,
            "campus": "hr-rfe",
            "name": "The Garnet Sweatpants",
            "slogan": "Unde minima dolor quae quo nesciunt.",
            "description": "Vero amet voluptatem perferendis. Voluptatem sit atque aliquid quibusdam doloribus corporis sit. Deserunt sit perspiciatis quam est qui nisi fugiat. Ut in quis qui et nam.",
            "category": "Sweatpants",
            "default_price": "137.00",
            "created_at": "2021-08-13T14:37:33.285Z",
            "updated_at": "2021-08-13T14:37:33.285Z"
        }
    ],
      currentProduct: {
        "id": 37314,
        "campus": "hr-rfe",
        "name": "Slacker's Slacks",
        "slogan": "Comfortable for everything, or nothing",
        "description": "I'll tell you how great they are after I nap for a bit.",
        "category": "Pants",
        "default_price": "65.00",
        "created_at": "2021-08-13T14:37:33.145Z",
        "updated_at": "2021-08-13T14:37:33.145Z",
        "features": [
          {
            "feature": "Fabric",
            "value": "99% Cotton 1% Elastic"
          },
          {
            "feature": "Cut",
            "value": "Loose"
          }
        ]
      },
      currentStyles: {
        "product_id": "37314",
        "results": [
          {
            "style_id": 221014,
            "name": "Black",
            "original_price": "65.00",
            "sale_price": null,
            "default?": true,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281104": {
                "quantity": 8,
                "size": "XS"
              },
              "1281105": {
                "quantity": 16,
                "size": "S"
              },
              "1281106": {
                "quantity": 17,
                "size": "M"
              },
              "1281107": {
                "quantity": 10,
                "size": "L"
              },
              "1281108": {
                "quantity": 15,
                "size": "XL"
              },
              "1281109": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221015,
            "name": "Olive Green",
            "original_price": "65.00",
            "sale_price": "55.00",
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              }
            ],
            "skus": {
              "1281110": {
                "quantity": 8,
                "size": "XS"
              },
              "1281111": {
                "quantity": 16,
                "size": "S"
              },
              "1281112": {
                "quantity": 17,
                "size": "M"
              },
              "1281113": {
                "quantity": 10,
                "size": "L"
              },
              "1281114": {
                "quantity": 15,
                "size": "XL"
              },
              "1281115": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221016,
            "name": "Grey",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281116": {
                "quantity": 8,
                "size": "XS"
              },
              "1281117": {
                "quantity": 16,
                "size": "S"
              },
              "1281118": {
                "quantity": 17,
                "size": "M"
              },
              "1281119": {
                "quantity": 10,
                "size": "L"
              },
              "1281120": {
                "quantity": 15,
                "size": "XL"
              },
              "1281121": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221017,
            "name": "Tan",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281122": {
                "quantity": 8,
                "size": "XS"
              },
              "1281123": {
                "quantity": 16,
                "size": "S"
              },
              "1281124": {
                "quantity": 17,
                "size": "M"
              },
              "1281125": {
                "quantity": 10,
                "size": "L"
              },
              "1281126": {
                "quantity": 15,
                "size": "XL"
              },
              "1281127": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221018,
            "name": "Red",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281128": {
                "quantity": 8,
                "size": "XS"
              },
              "1281129": {
                "quantity": 16,
                "size": "S"
              },
              "1281130": {
                "quantity": 17,
                "size": "M"
              },
              "1281131": {
                "quantity": 10,
                "size": "L"
              },
              "1281132": {
                "quantity": 15,
                "size": "XL"
              },
              "1281133": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221019,
            "name": "Pinstripe",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281134": {
                "quantity": 8,
                "size": "XS"
              },
              "1281135": {
                "quantity": 16,
                "size": "S"
              },
              "1281136": {
                "quantity": 0,
                "size": "M"
              },
              "1281137": {
                "quantity": 10,
                "size": "L"
              },
              "1281138": {
                "quantity": 15,
                "size": "XL"
              },
              "1281139": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221020,
            "name": "Khaki",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281140": {
                "quantity": 8,
                "size": "XS"
              },
              "1281141": {
                "quantity": 16,
                "size": "S"
              },
              "1281142": {
                "quantity": 17,
                "size": "M"
              },
              "1281143": {
                "quantity": 10,
                "size": "L"
              },
              "1281144": {
                "quantity": 15,
                "size": "XL"
              },
              "1281145": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221021,
            "name": "Plaid",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281146": {
                "quantity": 8,
                "size": "XS"
              },
              "1281147": {
                "quantity": 16,
                "size": "S"
              },
              "1281148": {
                "quantity": 17,
                "size": "M"
              },
              "1281149": {
                "quantity": 10,
                "size": "L"
              },
              "1281150": {
                "quantity": 15,
                "size": "XL"
              },
              "1281151": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221022,
            "name": "White",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281152": {
                "quantity": 8,
                "size": "XS"
              },
              "1281153": {
                "quantity": 16,
                "size": "S"
              },
              "1281154": {
                "quantity": 17,
                "size": "M"
              },
              "1281155": {
                "quantity": 10,
                "size": "L"
              },
              "1281156": {
                "quantity": 15,
                "size": "XL"
              },
              "1281157": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          }
        ]
      },
      currentProductRating: 4.3,
      currentProductID: 37314
      // allProducts: [],
      // currentProduct: {},
      // currentStyles: {},
      // currentProductRating: 4.3,
      // currentStyleId: 37311
    }
    this.handleChangeOfProductID = this.handleChangeOfProductID.bind(this);
    // this.getAllProducts = this.getAllProducts.bind(this);
    // this.getCurrentProduct = this.getCurrentProduct.bind(this);
  }

  componentDidMount() {
    let currentId = this.state.currentProductID;
    axios.all([
      axios.get('/products'),
      axios.get('/products/params', { params: {product_id: currentId}  }),
      axios.get('/products/params/styles', { params: {product_id: currentId}  })])
      .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
        this.setState({
          allProducts: firstResponse.data,
          currentProduct: secondResponse.data,
          currentStyles: thirdResponse.data
        })
      }))
  }

  // getAllProducts() {
  // }

  // getCurrentProduct(id) {
  //   axios.get('/products/params', { params: {product_id: id}  })
  //     .then(results=> {
  //       this.setState({
  //         currentProduct: results
  //       })
  //     })
  // }

  handleChangeOfProductID (newID) {
    axios.all([
      axios.get('/products/params', { params: {product_id: newID}  }),
      axios.get('/products/params/styles', { params: {product_id: newID}  })])
      .then(axios.spread((firstResponse, secondResponse) => {
        //correct data is reaching this point after click event
        this.setState({
          currentProduct: firstResponse.data,
          currentStyles: secondResponse.data,
          currentProductID: newID
        })
      }))
  }

  render() {
    const {
      currentProduct,
      currentStyles,
      currentProductRating,
      allProducts,
      currentProductID
    } = this.state;
    return (
      <div>
        <div>
        <SearchBar
          allProducts={allProducts}
          handleChangeOfProductID={this.handleChangeOfProductID}
          />
        </div>
        <div>
          <Overview
            currentProduct={currentProduct}
            currentStyles={currentStyles}
            currentProductRating={currentProductRating}
            currentProductID={currentProductID}
          />
          <RelatedItemsAndComparison />
          <QuestionAndAnswers />
          <RatingsAndReviews
            currentProductRating={currentProductRating}
          />
        </div>
      </div>
    )
  }
}

export default App;