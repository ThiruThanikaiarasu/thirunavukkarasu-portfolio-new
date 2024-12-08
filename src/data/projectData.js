import jotify_icon from '../../src/assets/images/jotify_logo.png'
import movie_rating_icon from '../../src/assets/images/movie-rating_logo.png'
import jotify_mockup_1 from '../../src/assets/images/jotify_mockup_2.jpg'
import jotify_mockup_2 from '../../src/assets/images/jotify_mockup_3.png'
import movie_rating_mockup_1 from '../../src/assets/images/movie_rating_mockup_1.png'

const projects = [
    {
        title: 'Jotify',
        description: 'Write, Share, Inspire, Connect.',
        url: 'jotify',
        website: 'https://blog-app-rouge-two.vercel.app',
        icon: jotify_icon,
        content1: 'Jotify is a sleek, minimalistic blogging platform where writers and readers can connect in a clean, distraction-free space.',
        content2: 'Users can create their own accounts, publish blogs, and share their stories with an audience. Designed for simplicity and ease of use, Notify keeps the focus on content.',
        content3: 'Readers can engage directly with blog posts by liking, saving, sharing, and commenting. Notify encourages an active, interactive community, offering readers ways to support and connect with their favorite writers while discovering fresh content. With its uncluttered design, Notify makes reading and creating an enjoyable, seamless experience.',
        mockup1: jotify_mockup_1,
        mockup2: jotify_mockup_2,
    }, 
    {
        title: 'Movie Rating',
        description: 'Explore Films, Find Ratings.',
        url: 'movie-rating',
        website: 'https://movie-rating-eta.vercel.app/',
        icon: movie_rating_icon,
        content1: 'Movie Rating is a streamlined, engaging platform for film enthusiasts to explore, discover, and rate movies.',
        content2: `Whether you're diving into classic cinema or seeking out the latest releases, Movie Rating connects you with the best films and ratings in a clean, distraction-free environment. Designed with simplicity in mind, the app makes finding your next movie a seamless, enjoyable experience.`,
        content3: `Movie Rating brings together movie lovers in a shared space, fostering an active community for discovering and discussing great cinema, all while keeping the focus on the films you love.`,
        mockup1: movie_rating_mockup_1

    }
]

export default projects