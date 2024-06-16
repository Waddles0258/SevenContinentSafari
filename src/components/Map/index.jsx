import '../../global.css';
import './style.css';
import { AnimalCard } from '../AnimaCard';
import { useState } from 'react';

export const Map = () => {
  const [onFocus, setOnFocus] = useState('');
  const [onFocusName, setOnFocusName] = useState('');
  const [onFocusImg, setOnFocusImg] = useState('');
  const [onFocusText, setOnFocusText] = useState('');

  const animals = [
    {
      name: 'squirrel',
      img: '/squirrel.svg',
      text: 'There are around 280 different species of squirrel. Most squirrels are small and have big eyes and bushy tails. Their large eyes help them skilfully climb trees and avoid predators. Squirrels eat mostly nuts, fruits and seeds.',
    },
    {
      name: 'crocodile',
      img: '/crocodile.svg',
      text: 'Crocodiles are fascinating creatures that live in rivers, lakes, and sometimes even in the salty waters near the ocean. They are known for their long snouts, sharp teeth, and tough scales that cover their bodies.',
    },
    {
      name: 'fox',
      img: '/fox.svg',
      text: 'Foxes are small wild dogs with short legs and large fluffy tails. They are excellent hunters. They hunt at night, and rest during the day in burrows.',
    },
    {
      name: 'hare',
      img: '/hare.svg',
      text: 'Hares are usually larger than rabbits and have longer ears. Rabbits give birth to their young in burrows while hares give birth in more open areas. Hares are born with fur and their eyes open. Hares are not kept as house pets. Hares usually live by themselves or in pairs. Young hares are called leverets.',
    },
    {
      name: 'toukan',
      img: '/toucan.svg',
      text: 'Toucans live in the jungles of South America. Their bright beaks should scare away other birds. They are almost the same size as the entire body of a bird, but very light. Toucans have long tails that help them maintain their balance.',
    },
    {
      name: 'parrot',
      img: '/parrot.svg',
      text: 'Parrots live in warm tropical areas. They have strong, hooked beaks that they use to chew through seeds and nuts.On their paws there are two pairs of fingers, with which they cling to branches and grab food.',
    },
    {
      name: 'cingulata',
      img: '/сingulata.svg',
      text: 'Armadillos are small to medium-sized mammals known for their unique, bony plates that cover their bodies. These plates act like a suit of armor, protecting them from predators.',
    },
    {
      name: 'sloth',
      img: '/sloth.svg',
      text: 'If you look closely at the sloth, it immediately becomes clear why it got its name. All its life, the sloth hangs on a tree, hooked on a branch with hooked claws, and practically does not move.',
    },
    {
      name: 'seals',
      img: '/seal.svg',
      text: 'Seals are mammals that live mostly in cold seas. They are related to the walrus. There are more than 30 species, or kinds, of seal. They can be divided into two groups: earless, or true, seals and eared seals. Earless seals actually do have ears, but they do not stick out.',
    },
    {
      name: 'walrus',
      img: '/walrus.svg',
      text: 'Walruses are marine mammals that live in the coastal areas of the cold Antarctic waters of the Atlantic and Pacific Oceans.Males and females have two long white fangs sticking out of their mouths.',
    },
    {
      name: 'killer-whale',
      img: '/killer_whale.svg',
      text: 'Killer whales are the largest dolphins. These mighty hunters grow up to 10 meters in length. Killer whales have strong jaws and teeth.They eat fish, dolphins, seals, and even whales.',
    },
    {
      name: 'petrel',
      img: '/petrel.svg',
      text: 'Petrels are seabirds that belong to a large group of birds known as Procellariiformes. These birds are specially adapted to life at sea, and they are incredible fliers. There are many different species of petrels, but they all share some fascinating traits.',
    },
    {
      name: 'whale',
      img: '/whale.svg',
      text: 'Whales are large animals that live in water. Whales may look like fishes, but they are mammals. They breathe air and produce milk for their young. Whales make up an order, or large group of animals, called Cetacea.',
    },
    {
      name: 'penguin',
      img: '/penguin.svg',
      text: 'Penguins are seabirds that live in the coldest areas of our planet. They are found on islands in the Antarctic seas, as well as on the southern coasts of South America, South Africa and Australia. Penguins do not fly, but they swim perfectly - better than all birds.',
    },
    {
      name: 'polar-bear',
      img: '/polar_bear.svg',
      text: 'Polar bear - lives in the areas of eternal ice of the Arctic, where they hunt and raise cubs. White fur makes bears almost invisible in the snow. They hunt mainly seals, but they love to eat fish, geese and ducks. This is the only species of northern bears that does not hibernate.',
    },
    {
      name: 'grizzly',
      img: '/grizzly.svg',
      text: 'Females give birth during this winter rest, often to twins. Grizzly bears are powerful, top-of-the-food-chain predators, yet much of their diet consists of nuts, berries, fruit, leaves, and roots.',
    },
    {
      name: 'coyote',
      img: '/coyote.svg',
      text: 'Most coyotes are grayish brown with white on the throat and belly. They have bushy tails, often with a black tip. Coyotes are active mostly at night. They often hunt alone, typically for rodents and hares.',
    },
    {
      name: 'buffalo',
      img: '/buffalo.svg',
      text: 'Buffalo are heavily built animals. They range in height from about 2.5 to 6.5 feet (0.75 to 2 meters). Some kinds have large, curving horns. Other kinds have straight horns. All buffalo have hooves on their feet.',
    },
    {
      name: 'eagle',
      img: '/eagle.svg',
      text: 'Eagles are large, powerful birds. They are birds of prey, also known as raptors. Eagles have very sharp eyesight. Their nests, called eyries, are very large. Eagles mainly eat fish and small mammals.',
    },
    {
      name: 'raccoon',
      img: '/raccoon.svg',
      text: 'The striped tail and black mask on the muzzle make the raccoon very noticeable. Raccoons are forest animals, but they have learned to pick up leftovers in garbage dumps and now often settle near settlements.',
    },
    {
      name: 'panda',
      img: '/panda.svg',
      text: 'The panda is a bear that lives in rare corners of the bamboo forests in China. It is assumed that there are no more than 1500 pandas living in the wild in the world. About 100 animals are kept in different zoos around the world.',
    },
    {
      name: 'turtle',
      img: '/turtle.svg',
      text: 'Turtles are reptiles, they live in a warm climate. They live on land and in water. Land turtles are very slow. Their soft bodies are protected by a heavy and hard shell.',
    },
    {
      name: 'peacock',
      img: '/peacock.svg',
      text: 'The peacock is one of the most beautiful birds in the world. Peacocks come from Asia. For thousands of years, they have been cultivated in parks and gardens due to their extraordinary beauty.They scream loudly and shrilly. They feed on frogs, snails, insects and plants.',
    },
    {
      name: 'orangutan',
      img: '/orangutan.svg',
      text: 'Orangutan - literally "forest man" translated from Malay. This large ape really looks like an old man overgrown with hair. Orangutans live in Southeast Asia.',
    },
    {
      name: 'lynx',
      img: '/lynx.svg',
      text: 'Lynx are medium-sized cats that have short tails and long black hair growing from the tips of the ears. They are typically found in the forests of Europe, Asia, and North America.',
    },
    {
      name: 'tiger',
      img: '/tiger.svg',
      text: 'The tiger is the largest cat. Tigers live in the steppes and forests of Asia. The striped skin serves as a good camouflage for them, allowing them to suddenly attack zebras, giraffes and other prey.',
    },
    {
      name: 'kangaroo',
      img: '/kangaroo.svg',
      text: 'Kangaroos live only in Australia. These are marsupials: Females have a pouch on their stomachs in which they carry their young until they grow up and become independent.',
    },
    {
      name: 'cockatoo',
      img: '/cockatoo.svg',
      text: 'Cockatoos are a type of parrot known for their striking appearance and playful personalities. They come in many different colors, from bright white to bold pinks and yellows. These birds are native to Australia, where they live in forests and woodlands.',
    },
    {
      name: 'koala',
      img: '/koala.svg',
      text: 'Koalas live in trees in the eucalyptus groves of Eastern Australia. They look a lot like small bear cubs, which is why they are sometimes called marsupial bears. ',
    },
    {
      name: 'camel',
      img: '/camel.svg',
      text: 'Camels live in the driest places of the globe - deserts. On their backs they have fat deposits - humps, thanks to which the camel can live for many days without food and water.',
    },
    {
      name: 'zebra',
      img: '/zebra.svg',
      text: 'Zebras are herbivorous mammals that graze in the grassy steppes of sub-Saharan Africa.They are close relatives of the horse. The stripes on the skin serve as a good camouflage, besides, the zebra runs faster than most predators.',
    },
    {
      name: 'gorilla',
      img: '/gorilla.svg',
      text: 'Gorillas are very large and strong anthropoid apes. They look intimidating, but in reality they are harmless herbivores. Now there are few gorillas left, and they live in the forests and mountains of central Africa.',
    },
    {
      name: 'lion',
      img: '/lion.svg',
      text: 'Lions are Africa`s largest predators. These mighty cats live in forests or plains in families called prides. The pride consists of several females and their kittens, as well as several males. People call the lion the king of beasts.',
    },
  ];

  const showBlock = () => {
    document.querySelectorAll('.animal__container').forEach((el) => {
      el.classList.add('hidden');
    });
    if (onFocus) {
      document
        .querySelector(`.map__img--${onFocus}`)
        .classList.remove('hidden');
    }
  };

  const handleOnClick = (animal) => {
    console.log('animal:' + animal);
    setOnFocus(animal);
    console.log('onFocus' + onFocus);
    showBlock();
    animals.forEach((prvek) => {
      if (prvek.name === animal) {
        setOnFocusImg(prvek.img);
        setOnFocusName(prvek.name);
        setOnFocusText(prvek.text);
      }
    });
  };

  return (
    <div id="map__container" className="map__container container hidden">
      <p className="map__title-ocean map__title-ocean--arctic">Arctic Ocean</p>
      <p className="map__title-ocean map__title-ocean--atlantic">
        Atlantic Ocean
      </p>
      <p className="map__title-ocean map__title-ocean--pacific1">
        Pacific Ocean
      </p>
      <p className="map__title-ocean map__title-ocean--pacific2">
        Pacific Ocean
      </p>
      <p className="map__title-ocean map__title-ocean--indian">Indian Ocean</p>
      <p className="map__title-ocean map__title-ocean--southern">
        Southern Ocean
      </p>
      <p className="map__title-continent map__title-continent--europe">
        Europa
      </p>

      <div className="map__img--squirrel animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--squirrel"
        onClick={() => handleOnClick('squirrel')}
      ></div>

      <div className="map__img--fox animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--fox"
        onClick={() => handleOnClick('fox')}
      ></div>

      <div className="map__img--hare animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--hare"
        onClick={() => handleOnClick('hare')}
      ></div>

      <p className="map__title-continent map__title-continent--asia">Asia</p>
      <div className="map__img--panda animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--panda"
        onClick={() => handleOnClick('panda')}
      ></div>

      <div className="map__img--turtle animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--turtle"
        onClick={() => handleOnClick('turtle')}
      ></div>

      <div className="map__img--peacock animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--peacock"
        onClick={() => handleOnClick('peacock')}
      ></div>

      <div className="map__img--orangutan animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--orangutan"
        onClick={() => handleOnClick('orangutan')}
      ></div>

      <div className="map__img--lynx animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--lynx"
        onClick={() => handleOnClick('lynx')}
      ></div>

      <div className="map__img--tiger animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--tiger"
        onClick={() => handleOnClick('tiger')}
      ></div>

      <p className="map__title-continent map__title-continent--n-america">
        North
        <br /> America
      </p>

      <div className="map__img--polar-bear animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--polar-bear"
        onClick={() => handleOnClick('polar-bear')}
      ></div>

      <div className="map__img--grizzly animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--grizzly"
        onClick={() => handleOnClick('grizzly')}
      ></div>

      <div className="map__img--coyote animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--coyote"
        onClick={() => handleOnClick('coyote')}
      ></div>

      <div className="map__img--buffalo animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--buffalo"
        onClick={() => handleOnClick('buffalo')}
      ></div>

      <div className="map__img--crocodile animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--crocodile"
        onClick={() => handleOnClick('crocodile')}
      ></div>

      <div className="map__img--eagle animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--eagle"
        onClick={() => handleOnClick('eagle')}
      ></div>

      <div className="map__img--raccoon animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--raccoon"
        onClick={() => handleOnClick('raccoon')}
      ></div>

      <p className="map__title-continent map__title-continent--s-america">
        South
        <br /> America
      </p>

      <div className="map__img--toukan animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--toukan"
        onClick={() => handleOnClick('toukan')}
      ></div>

      <div className="map__img--parrot animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--parrot"
        onClick={() => handleOnClick('parrot')}
      ></div>

      <div className="map__img--cingulata animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--cingulata"
        onClick={() => handleOnClick('cingulata')}
      ></div>

      <div className="map__img--sloth animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--sloth"
        onClick={() => handleOnClick('sloth')}
      ></div>

      <div className="map__img--jaguar animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--jaguar"
        onClick={() => handleOnClick('jaguar')}
      ></div>

      <div className="map__img--cougar animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--cougar"
        onClick={() => handleOnClick('cougar')}
      ></div>

      <p className="map__title-continent map__title-continent--africa">
        Africa
      </p>

      <div className="map__img--camel animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--camel"
        onClick={() => handleOnClick('camel')}
      ></div>

      <div className="map__img--zebra animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--zebra"
        onClick={() => handleOnClick('zebra')}
      ></div>

      <div className="map__img--gorilla animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--gorilla"
        onClick={() => handleOnClick('gorilla')}
      ></div>

      <div className="map__img--lion animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--lion"
        onClick={() => handleOnClick('lion')}
      ></div>

      <div className="map__img--elephant animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--elephant"
        onClick={() => handleOnClick('elephant')}
      ></div>

      <div className="map__img--giraffe animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--giraffe"
        onClick={() => handleOnClick('giraffe')}
      ></div>

      <p className="map__title-continent map__title-continent--australia">
        Australia
      </p>

      <div className="map__img--kangaroo animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--kangaroo"
        onClick={() => handleOnClick('kangaroo')}
      ></div>

      <div className="map__img--cockatoo animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--cockatoo"
        onClick={() => handleOnClick('cockatoo')}
      ></div>

      <div className="map__img--koala animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--koala"
        onClick={() => handleOnClick('koala')}
      ></div>

      <div className="map__img--dingo animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--dingo"
        onClick={() => handleOnClick('dingo')}
      ></div>

      <div className="map__img--ostrich animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--ostrich"
        onClick={() => handleOnClick('ostrich')}
      ></div>

      <div className="map__img--black-swan animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--black-swan"
        onClick={() => handleOnClick('black-swan')}
      ></div>

      <p className="map__title-continent map__title-continent--antarctica">
        Antarctica
      </p>

      <div className="map__img--seals animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--seals"
        onClick={() => handleOnClick('seals')}
      ></div>

      <div className="map__img--walrus animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--walrus"
        onClick={() => handleOnClick('walrus')}
      ></div>

      <div className="map__img--penguin animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--penguin"
        onClick={() => handleOnClick('penguin')}
      ></div>

      <div className="map__img--killer-whale animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--killer-whale"
        onClick={() => handleOnClick('killer-whale')}
      ></div>

      <div className="map__img--petrel animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--petrel"
        onClick={() => handleOnClick('petrel')}
      ></div>

      <div className="map__img--whale animal__container hidden">
        <AnimalCard
          animalName={onFocusName}
          animalImg={onFocusImg}
          animalText={onFocusText}
        />
      </div>
      <div
        className="map__img map__img--whale"
        onClick={() => handleOnClick('whale')}
      ></div>
    </div>
  );
};
