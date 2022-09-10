import InputCreatePost from '../InputCreatePost';
import AddImageButton from '../buttons/AddImageButton';
import PublishButton from '../buttons/PublishButton';
import ImagePost from '../ImagePost';
import '../../style/CreatePostSection.css';

function CreatePostSection () {
    return <div className='createPostSection'>
        <InputCreatePost />
        <AddImageButton />
        <ImagePost />
        <PublishButton />
    </div>
}

export default CreatePostSection