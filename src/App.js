import logo from './logo.jpg';
import guitar from './guitar.jpg';
import confused from './confused.jpg';
import ai_guitar from './ai_guitar.jpg';
import guitar_old from './guitar_old.jpg';
import headless_guitar from './headless guitar.jpg';
import guitar_in_the_woods from './guitar_in_the_woods.jpg';
import './App.css';
import Gallery from './components/gallery';
import Timeline from './components/timeline';


function App() {
  return (
    <div className="flex  h-full flex-col mx-40">
      <div className="flex flex-row mx-auto">
      <img className="h-64 w-64" src={guitar} />
      <img className="h-64 w-64" src={confused} />
      <img className="h-64 w-64" src={ai_guitar} />
      <img className="h-64 w-64" src={guitar_old} />
      <img className="h-64 w-64" src={headless_guitar} />
      <img className="h-64 w-64" src={guitar_in_the_woods} />
      </div>

      <header className="flex w-full h-40 flex  flex-row content-evenly text-center">
        <img src={logo} className="h-40 bg-transparent" alt="logo" />
        {/* Branded description */}
        <div className="flex flex-auto content-center m-10 font-bold text-4xl  ">
          <p className=''>Vernacular Lutherie</p>
        </div>
      </header>

      {/* Main content */}

      <div className="flex flex-row m-20 md:flex-col gap-1 font-light leading-loose tracking-tight font-sans mx-auto text-justify xl:text-xl">
      <p className="text-2xl font-bold underline decoration-4">Intro</p>
        <div className="flex flex border-r-2 p-10 border-blue-100 border-dashed text-slate-800 bg-blue-50 rounded-md">
          <p className="content-center indent-12">The building of the instrument started from the research of the market. I was trying to find a guitar that is smaller than a regular guitar and can be easily carried around. To make a guitar smaller, it is a good idea to choose a custom scale length. I’ve used the stewmac.com website to figure frets and bridge distances for 490 mm scale. On top of that I’ve decided to decrease a number of frets on the neck from the traditional 22-24 to 17. Which also contributed to the smaller size of the instrument. The primary difference from traditional guitars is where the tuners are placed. Usually, they are located on the headstock, but in my design, they are located on the other side of the bridge, just like on traveler guitars. Which also contributes to the guitar dimension, which makes it smaller in size. </p>
        </div>
        <p className="text-2xl font-bold underline decoration-4">Materials</p>
        <div className="flex flex-1 p-10  bg-yellow-50">
          
          <p className="indent-12">Choice of materials for the instrument. I chose whatever was available in the makerspace. For the guitar fretboard I found a decent piece of maple. For the body and neck, I found a good piece of pine and for tuners holder I found a piece of wood which might be a walnut. Maple is a very typical material that is used for fingerboards on Fender guitars for example. Pine is less popular for the guitar body in professional instruments, but popular in vernacular instruments, like cigar box guitars. Walnut is a solid choice as well, but the way it is used in my build is not really crucial. I could use some other type of wood. I only choose it, because I like the color.</p>
        </div>
        <p className="text-2xl font-bold underline decoration-4">Hardware</p>
        <div className="flex flex-1 p-10 bg-orange-50">
          <p className="indent-12">Unfortunately, I wasn’t able to find all the materials that I needed in the makerspace, so I decided to buy some from amazon. A couple of parts that I got includes guitar tuners, a nut and strings and a top lock and fret wires. Guitar nut is a starting point which allows to figure string spacing and action. I’ve used the guitar nut as a starting point to measure fret distance as well. Another interesting piece of hardware is top lock. It allows you to hold strings in place on one side of the instrument, while the tension is adjusted with the help of tuners on the other side. It is not usually the case in traditional guitars. This approach is taken from so-called headless guitars. Of course, it is possible to buy all necessary hardware from them, but the price is too high. If my build is successful, I might want to make a more decent instrument with proper choice of hardware and tone wood.</p>
        </div>
        <p className="text-2xl font-bold underline decoration-4">Inspiration</p>
        <div className="flex  flex-1 p-10 bg-slate-50">
          <p className="indent-12">The overall design of the guitar is inspired by travelerguitar.com website and Strandberg headless guitars. This includes placement of tuners and the absence of traditional headstock. However, I’ve used their overall approach, I’ve added some adjustments which allows me to make my vernacular instrument even more compact. It might contribute to the guitar builder's community, since I haven't seen anything similar. The guitar building community is mostly focused on the cigar box guitars or pretty expensive builds. The cost sometimes reach thousands of dollars. My innovative prototype, with further enhancements, might inspire the community members to create more compact and travel friendly string instruments. Planning to add electronic, in the next working prototype.</p>
    
        </div>

        <p className="text-2xl font-bold underline decoration-4">Deadline</p>
        <div className="flex flex-1 p-10 bg-red-50">
          <p className="indent-12">Process of making the instrument took several weeks and without starting earlier I wouldn’t be able to finish it on time. I spent a couple sessions in makerspace just to take a safety test and attend a safety training with Accelerate technician in order to be allowed to use many tools and machines. I was required to use a band saw in order to cut a fretboard and a neck. I’ve used a manual wood planer to shape the guitar neck radius. After gluing together the neck and fretboard I started sanding the neck and fretboard with radial sander using various sandpaper grits. Later I added all the hardware together and put the strings on.</p>
        </div>

        <p className="text-2xl font-bold underline decoration-4">Finishing up!</p>
        <div className="flex flex-1 p-10 bg-purple-50">
          <p className="indent-12">
          The last mile did not go as smoothly as expected. Lots of adjustments to be made. Must switch tuners placement and strings position. It was hard to tune up the guitar to the standard EBGDAE tuning, since strings tension of the first and second strings cut through the guitar body and won’t allow to hold up the proper tuning. I’ve decided to set strings to a lower tone. On top of that, the top lock around guitar’s neck couldn’t hold string’s tension 100% perfectly. Tuners affected by strings tension too much as well. Basically, it was scary to tune up sufficiently high, risking a collapse of many parts of the instrument. A compromise was found! Discovered that tuners and bridge resonate the most. The surprising part is that tuners are contributing the most into the sound. Possible to make some changes, where it would be possible to reach louder sound, without a traditional resonator, as in classic acoustic guitar.  
          </p>
        </div>

        <p className="text-2xl font-bold underline decoration-4">Further development</p>
        <div className="flex flex-1 p-10 bg-emerald-50">
          <p className="indent-12">
          The original plan includes creating a 3D model based on the current build, with some adjustments. The idea is to create a model that can be used in CNC machines to create a more precise guitar model. For that I am planning to use a handheld 3D scanner, available at Makerspace. Also, I need to gain some skills in 3D modelling in order to edit the model absolutely perfectly. After that is done, I can add more sophisticated hardware and electronic components. An electric pick-up or possibly two would be ideal. I have more enhancements in mind, so this first attempt is really a prototype, that would be the basis for a better instrument. </p>

        </div>
      </div>

      <div className='flex sm:flex-row flex-col'>

        <div className="flex  max-w-2xl py-2 
                      px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8
                      text-xl font-semibold ">
          </div>
        <Timeline />
        <Gallery />
      </div>
    </div>

  );
}

export default App;
