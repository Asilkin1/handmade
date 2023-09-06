import { CheckIcon, HandThumbUpIcon, QuestionMarkCircleIcon, AcademicCapIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Thinking',
    target: 'about what to make? ',
    href: '#',
    date: 'Sep 10',
    datetime: '2022-09-10',
    icon: QuestionMarkCircleIcon,
    iconBackground: 'bg-yellow-400',
  },
  {
    id: 2,
    content: 'Got an idea',
    target: 'and materials',
    href: '#',
    date: 'Sep 18',
    datetime: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Exploring measuring tools',
    target: 'at Makerspace',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: AcademicCapIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'First cut',
    target: 'and the process begins',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: EllipsisHorizontalCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Working on guitar neck',
    target: 'with bench plane',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-blue-500',
  },
  {id: 6,
  content: 'Measuring string spacing',
  target: 'at nut and bridge',
  href: '#',
  date: 'Oct 8',
  datetime: '2020-10-08',
  icon: CheckIcon,
  iconBackground: 'bg-blue-500',
},
{id: 7,
  content: 'Cutting neck and fingerboard',
  target: 'with the band saw',
  href: '#',
  date: 'Oct 12',
  datetime: '2020-10-12',
  icon: CheckIcon,
  iconBackground: 'bg-blue-500',
},
{id: 8,
  content: 'Smoothing edges',
  target: 'with a file',
  href: '#',
  date: 'Oct 16',
  datetime: '2020-10-16',
  icon: CheckIcon,
  iconBackground: 'bg-amber-500',
},
{id: 9,
  content: 'Glue fretboard to guitar body',
  target: 'with Gorilla wood glue',
  href: '#',
  date: 'Oct 18',
  datetime: '2020-10-18',
  icon: CheckIcon,
  iconBackground: 'bg-amber-500',
},
{id: 10,
  content: 'Ebony stain applied',
  target: 'for 15 minutes',
  href: '#',
  date: 'Oct 22',
  datetime: '2020-10-22',
  icon: CheckIcon,
  iconBackground: 'bg-amber-500',
},
{id: 11,
  content: 'Drill holes in tuner holders',
  target: 'with professional drilling machine',
  href: '#',
  date: 'Oct 24',
  datetime: '2020-10-24',
  icon: CheckIcon,
  iconBackground: 'bg-amber-500',
},
{id: 12,
  content: 'Cut tuner holder into',
  target: 'two pieces',
  href: '#',
  date: 'Oct 28',
  datetime: '2020-10-28',
  icon: CheckIcon,
  iconBackground: 'bg-amber-500',
},
{id: 13,
  content: 'Attach tuners holder on',
  target: 'each side of the guitar body',
  href: '#',
  date: 'Oct 30',
  datetime: '2020-10-30',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
{id: 14,
  content: 'Install tuners',
  target: 'and tight them up',
  href: '#',
  date: 'Nov 1',
  datetime: '2020-11-1',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
{id: 15,
  content: 'Calculate fret distance',
  target: 'on stewmac.com',
  href: '#',
  date: 'Nov 10',
  datetime: '2020-11-10',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
{id: 16,
  content: 'Mark fretboard',
  target: 'according to calculations',
  href: '#',
  date: 'Nov 11',
  datetime: '2020-11-11',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
{id: 17,
  content: 'Use japanese pull saw',
  target: 'to cut fret slots',
  href: '#',
  date: 'Nov 12',
  datetime: '2020-11-12',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
{id: 18,
  content: 'Insert fret wires',
  target: 'into the slots',
  href: '#',
  date: 'Nov 13',
  datetime: '2020-11-13',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
{id: 19,
  content: 'Fill gaps with super glue',
  target: 'and use clamps to hold everything in place overnight',
  href: '#',
  date: 'Nov 14',
  datetime: '2020-11-14',
  icon: CheckIcon,
  iconBackground: 'bg-green-500',
},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Timeline() {
  return (
    <div className="flow-root mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="text-3xl spacing-2 tracking-wide overline decoration-4 underline-offset-4 uppercase m-10 text-center">timeline</p>
    
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}