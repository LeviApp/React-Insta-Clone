
import React from 'react';
import '../PostContainer/PostContainer.css';
import Comments from './Comments'


const CommentSection = (props) => {
    
    return(
<div className='poster' data-id={props.obj.timestamp}>
    <div className='posterID'>
    <img src={props.obj.thumbnailUrl} alt=""/>
    {props.obj.username}
    </div>
    <img id='postImg' src={props.obj.imageUrl} alt=""/>
    <div className='iconFull'>
        <div className='icons'>
        <img onClick={props.submitHandler} data-id={props.obj.timestamp} src="https://t3.ftcdn.net/jpg/02/06/50/86/500_F_206508600_vFmguCNf5aVNYMibGkUlC9dT1e1FDaoz.jpg" alt=""/>
        <img className='commentIcon'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEX///8AAAAZGRn7+/vz8/P4+Pjj4+Pn5+c5OTk+Pj4QEBD8/PwEBARMTEwNDQ2np6d3d3cWFhYyMjK+vr6cnJyJiYlmZmbGxsZfX1+WlpYrKyslJSXMzMx9fX1YWFi4uLjZ2dlFRUVvb2+Ojo4eHh6EhISjo6NPT0+vr68lzHqAAAAFFElEQVR4nO2c2baqMAyGt1BAEREVxQEVZ9//Cc92pRUHFNh28LD+71aN6ZA0CSk/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFsNFse2ov/DAIQn/RPkWzhJnWqTZePF20ClhMj55p3aqTHYZFgxAMx65pDavgHDvvRkF0+o5pPUtgh0H5MC5Yh2+2F7YMqw3jgv+1Q7Fn/r2qi9MyHmUecxzmZaN4edrffz6Iu6Z1LiK9s/D95Fzgnrzz5G4ww1S/niU40a0BRG8UTCMr/2awtPXpWIXsZjk65xLl7PONY2tnWhSsyDk38l6l3ZJscqNfq9auOod80ydVf5PkazhWqVsN7Ol1cuu4oe7suoyTrzAU53TdVTXDKPe6v1ZfcNA7QptgVvu33V0g5sD4SGyxHvs/HQmJcMUr07tL2Mfwj9G5Oxd2Ilevugh/tflz3MTEmWLUd53FOD7Y4kwYmcHzJAs/H0e+Jr6xfMvhZ9rww3iccTtpmzJ4HifuP87CXe67ljK0qk/Kzw8JoXgSSBNVH5tvrPrnYAE7vrlMZFozfiZLEdblriuWIq0WjPJaX1KZyiUHaOnP45eSp5Av8EGWvKqwUPKm7pLJ+bqXhMcmlfOockZGIhVnINHSOWTvlt6A/kjTJ9XvJyTzLFNmKRQedeQKbVPgJlfoezIlk9cnqTpjRzJ1S3KQxw1vJ1fqW8hVRrLFbsmlyxb7Gk+BqV/g5q7vmVZM4bt8wRTO9+ULfgFVHLaqBOurQyxUOXzyW3P5gothyrayS5J1xVsUFS1UiLbUeJEXUMR9UiG6pzW9InevpFIQqTmgXkDl3qMK0bTYKxWiC6DgbqRC9FpFMPoS8r6ZCtGpVv/rqwskyP9aKkQXEKpz9hTF+SpEF0BlQSUpKZ21oQrRBTRmIAq3FtO6tRpj7I1xv405EE/qIrtYa4gSNSVobEwYn6iqPYjESmJp/C3qUl1Pb6rbmOKDuqrNRJXgFxwVGUlXd4GuMSXTxhSxf8YU2/3/jxV4RfD/f9DTmEdvYvKkHsHc1PX5rAuOJX/2NkoMrwzeMCAxKTHTMCB6aobSWjhsaqPT3sIhlkRKt9YFU001P4ycfijJWZprc+JZaWsjZ3Px/kgDjWeiL0nSQbyiAN7IpauUd1RKOUyoqdE30+vPm+gsGWbiBQZOQ4FNMUVrLsNCqewgtQGsOhm/eNiRMBIKegJDV5KpMPjJZYUrjq89hr9l3JK2JpSv6ys8FP79rwIfWzwPfk3dFbVXfCTWx16YikwKWnWq4fT4SILdh6cZRW8DY5etHLEmrU3N7eVFq92Nl1KTP9fAFnbSCme1L1QGvfxlA5Q/63qmUITwXb/5SeVMa3S94upPuHlR3S8weV9/nV/J31Qy+ptLxxcWh8uu5P320lKcv+C2c63aZW+mcPrt1hObI+M1ZZ0FumfsZZArNdi+WZZk++L9FuGUR6GZLqWLSe+m2Zr2C3yY159Yt9+aP7wlgjB0Z+xKN7buFbJ60Wyduh5jzE3XcdR7/DzuOv1e0Hpkb/ydFuxQOMPFiNeJeLv540dKnnzXg42tIqWfscY3XjZ9MJupuQHkOOdN+TA2/YdAxD6vbp2FGdWfcHcF7jWnvSsMZdjs+itdvSgV+HVPTzv/wnzSf5MDZkt6/Ytpt/UAS+Jo1Zlbfhj61ryziuLyF4V1R9OB9W0vfQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB6/gG7qTXw+DWa+AAAAABJRU5ErkJggg==" alt=""/>
        </div>
        <h3> {props.obj.likes} likes </h3>
    </div>

    <p className='time'> {props.obj.timestamp} </p>
    <div>
    {props.obj.comments.map(item => <Comments key={item.text} obj={item} />)}
    </div>
      <form>
        <input placeholder='Comment...' value={props.value} onChange={props.inputHandler}></input>
    </form>
    </div>    )
}

export default CommentSection;