interface ITweet {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
    logoUrl?: string;
  };
}

// interface ITestimonial {
//   [columnGroupIdx: number]: ITweet[][];
//   map: (
//     arg0: (columnGroup: ITweet[][], columnGroupIdx: number) => void
//   ) => void;
// }

export const featuredTestimonial: ITweet = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
};

export const testimonials = [
  [
    [
      {
        body: 'why can’t a cover letter be “I want to work here soo bad. Please please please please please please please please please please please please please please please please please please please”',
        author: {
          name: 'sio',
          handle: 'bestinsio',
          imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "if the salary is so competitive why won't you tell me what it is? 😌",
        author: {
          name: 'jo 💖',
          handle: 'jo_bazz',
          imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Me: I’ll apply to this job really quick. The job: set up an account, attach a resume, fill out this application where you refill in all the information from your resume, list three references, write a cover letter, answer these five essay questions, take a skill assessme',
        author: {
          name: 'pokey pup',
          handle: 'Whatapityonyou',
          imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
];