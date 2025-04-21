import React,{forwardRef} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { motion, useInView } from "framer-motion";
import stock7 from '../../assets/stock-7.jpg'
import './blogsCard.css'
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export const BlogsCard = forwardRef((props,ref) => {
    const navigate = useNavigate()

    const refOne = React.useRef(null);


    const inViewOne = useInView(refOne, { triggerOnce: true });

    return (
        <div ref={ref}>

        <motion.div className='blogsMian'
            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <div className='blogs_h1_div'>
                <span className='blogs_h1'>Blogs</span>
            </div>

            <motion.div className='blogsCards' >
                <Card className='CardsBlogs' sx={{ borderRadius: 6 }}>
                    <CardHeader

                        title="Shrimp and Chorizo Paella"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={stock7}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                        <ExpandMore
                            onClick={() => navigate("/blogsMultiCards")}


                            aria-label="show more"
                        >
                            <IconButton aria-label="show more">

                                <div className='readMoreBtn' >
                                    <span className='btnText'>Read More</span>
                                    {/* <ExpandMoreIcon style={{ color: 'blue' }} /> */}
                                </div>
                            </IconButton>

                        </ExpandMore>
                    </CardActions>

                </Card>
                {/* ------------------------------------------------------------------------------------ */}
                <Card className='CardsBlogs' sx={{ borderRadius: 6 }}>
                    <CardHeader

                        title="Shrimp and Chorizo Paella"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={stock7}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                    <ExpandMore
                            onClick={() => navigate("/blogsMultiCards")}


                            aria-label="show more"
                        >
                            <IconButton aria-label="show more">

                                <div className='readMoreBtn' >
                                    <span className='btnText'>Read More</span>
                                    {/* <ExpandMoreIcon style={{ color: 'blue' }} /> */}
                                </div>
                            </IconButton>

                        </ExpandMore>
                    </CardActions>

                </Card>
                {/* --------------------------------------------------------------------------------------- */}
                <Card className='CardsBlogs' sx={{ borderRadius: 6 }}>
                    <CardHeader

                        title="Shrimp and Chorizo Paella"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={stock7}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                    <ExpandMore
                            onClick={() => navigate("/blogsMultiCards")}


                            aria-label="show more"
                        >
                            <IconButton aria-label="show more">

                                <div className='readMoreBtn' >
                                    <span className='btnText'>Read More</span>
                                    {/* <ExpandMoreIcon style={{ color: 'blue' }} /> */}
                                </div>
                            </IconButton>

                        </ExpandMore>
                    </CardActions>

                </Card>
            </motion.div>
        </motion.div>
        </div>

    );
})
