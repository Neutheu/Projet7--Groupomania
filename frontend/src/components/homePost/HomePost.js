import PostHeader from './PostHeader';
import PostContent from './PostContent';
import HomePostFooter from './HomePostFooter';
import '../../style/homePost/HomePost.css'

function HomePost () {
    return <div className='homePost'>
        <PostHeader />
        <PostContent />
        <HomePostFooter />
    </div>
}

export default HomePost