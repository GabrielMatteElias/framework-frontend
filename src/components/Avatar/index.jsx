import Avatar from '@mui/material/Avatar';

export default function ProfileAvatar({ name, image, width, height }) {
    return (
        <Avatar alt={`${name}`} sx={{ cursor: 'pointer', height: height, width: width }} src={image} />
    );
}
