
const products = [
  
    {
      id: 2,
      name: '',
      href: '#',
      price: "Shaping guitar neck with bench plane",
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-11-17_13-20-51.jpg?alt=media&token=a50cde3b-4920-4fe2-86d0-f46feaab9a4e',
      imageAlt: 'guitar neck',
    },

    {
      id: 4,
      name: '',
      href: '#',
      price: 'Setting string spacing with metal cords',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-14-53.jpg?alt=media&token=846d5713-017a-47a9-9d8b-818d5821d488',
      imageAlt: '',
    },
    {
        id: 5,
        name: '',
        href: '#',
        price: 'Measuring string spacing at guitar bridge',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-14-52.jpg?alt=media&token=d7560017-c857-4a22-8316-aff4bd590cfb',
        imageAlt: '',
      },
  
      {
        id: 7,
        name: '',
        href: '#',
        price: 'Starting a machine to make some cuts',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-11-20.jpg?alt=media&token=bbf489a8-70d6-4e8a-8eb9-164e8ba853d7',
        imageAlt: '',
      },
      {
        id: 8,
        name: '',
        href: '#',
        price: 'Glue fretboard to guitar body',
        imageSrc: ' https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-11-04.jpg?alt=media&token=8a8562ce-1bd4-4fd0-bf9f-27c5a39544a9',
        imageAlt: '',
      },
      {
        id: 9,
        name: '',
        href: '#',
        price: 'Adding more clamps to the fingerboard',
        imageSrc: ' https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-10-36.jpg?alt=media&token=1e8e7d9a-b734-4054-9960-815e6faa3dae',
        imageAlt: '',
      },
      {
        id: 10,
        name: '',
        href: '#',
        price: 'Applying wood stain',
        imageSrc: ' https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-10-00.jpg?alt=media&token=7d7c1ab9-f93d-4cab-9955-2ccc8768c8a2',
        imageAlt: '',
      },
      {
        id: 11,
        name: '',
        href: '#',
        price: 'Using file to sand fret slots',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-09-31.jpg?alt=media&token=0cb0f347-fc29-4e88-85c5-2844554047f1',
        imageAlt: '',
      },
      {
        id: 12,
        name: '',
        href: '#',
        price: 'Pressing fretwires into fret slots',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-08-49.jpg?alt=media&token=5f9d462b-1e42-4df9-9c40-2fd341d9db74',
        imageAlt: '',
      },
      // {
      //   id: 13,
      //   name: '',
      //   href: '#',
      //   price: 'Applying glue inside fret slots',
      //   imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-07-36.jpg?alt=media&token=ebe0c74e-f246-4f51-a7d8-ee87872f76e2',
      //   imageAlt: '',
      // },

      {
        id: 14,
        name: '',
        href: '#',
        price: 'Using file to crown frets',
        imageSrc: ' https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-02-33.jpg?alt=media&token=e36ffed5-7c1b-42e2-a7d6-a3f0756e1ba6',
        imageAlt: '',
      },
      {
        id: 15,
        name: '',
        href: '#',
        price: 'Fret job done',
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-06-12.jpg?alt=media&token=2414a40b-27dd-4afc-aa3e-2d58357f556a',
        imageAlt: '',
      },

     
  
      {
        id: 16,
        name: 'Nut set',
        href: '#',
        price: 'Inserting guitar nut into the slot',
        imageSrc: '  https://firebasestorage.googleapis.com/v0/b/lastdays-2d6c4.appspot.com/o/photo_2022-10-15_20-05-02.jpg?alt=media&token=38d1b59f-9350-44b1-abc7-c3d423182a3c',
        imageAlt: '',
      },    

  ]
  

  function enlargeImage(e){

    e.preventDefault();

    const selectedImage = e.currentTarget.className;
    console.log(selectedImage);

  }
  export default function Gallery() {
    return (
      <div className="bg-gray-200">
        <div className="flow-root mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-64  group-hover:opacity-75 blur-xs contrast-75"
                    onClick={(e)=>{ enlargeImage(e)}}
                  />
                
                <p className="p-5 flex text-sm md:text-xl font-sans font-normal antialiased text-gray-600">{product.price}</p>
                </div>
                
              </a>
            ))}

          </div>
        </div>
      </div>
    )
  }