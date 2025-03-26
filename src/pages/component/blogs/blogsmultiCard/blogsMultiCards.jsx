import { Footer } from '../../footer/footer'
import React, { useState, useEffect } from 'react';
import logo_t from '../../../assets/logo-t.png'

import { DrawerBar } from '../../drawer/drawer';
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
import stock7 from '../../../assets/stock-7.jpg'
import '../blogsCard.css'
import './blogsmultiCards.css'
import { useNavigate } from 'react-router-dom';

// -----------------------------------------------------------

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
// -----------------------------------------------------------
const blogData = [
    {
        id: 1,
        title: "Shrimp and Chorizo Paella",
        image: stock7,
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id: 2,
        title: "Delicious Pasta Recipe",
        image: stock7,
        description: "Enjoy this simple and delicious pasta recipe that brings a mix of flavors and a healthy choice for your dinner."
    },
    {
        id: 3,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 4,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 5,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 6,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 7,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 8,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 9,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 10,
        title: "Shrimp and Chorizo Paella",
        image: stock7,
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id: 11,
        title: "Delicious Pasta Recipe",
        image: stock7,
        description: "Enjoy this simple and delicious pasta recipe that brings a mix of flavors and a healthy choice for your dinner."
    },
    {
        id: 12,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 13,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 14,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 15,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 16,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 17,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
    {
        id: 18,
        title: "Healthy Smoothie Guide",
        image: stock7,
        description: "A refreshing and healthy smoothie guide to start your day with energy. Try out different fruit combinations!"
    },
];

// ----------------------------------------------------------------------
export const BlogsMultiCards = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // -----------------------------------------------
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 990);
        };
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // -----------------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Calculate indexes
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const nextPage = () => {
        if (currentPage < Math.ceil(blogData.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div>
            <div className={`navbar ${isSticky ? 'sticky-navbar' : ''}`}>
                <div className="left">
                    <img className='logo' src={logo_t} />
                </div>
                <div className="right">
                    {isMobile ? (
                        <div>

                            <DrawerBar />
                        </div>
                    ) : (


                        <div>

                            <span className={`navData ${isSticky ? 'changeColor' : ''}`} onClick={()=> navigate('/landingPage')}>Home</span>
                            <span className={`navData ${isSticky ? 'changeColor' : ''}`}>About</span>
                            <span className={`navData ${isSticky ? 'changeColor' : ''}`}>Blogs</span>
                            <span className={`navData ${isSticky ? 'changeColor' : ''}`}>Contact</span>
                            <span className={`navData ${isSticky ? 'changeColor' : ''}`}>Help</span>
                        </div>
                    )}



                </div>

            </div>
            <div className='banner'>
                <span className='banner_text'>Blogs</span>
            </div>
            <div>
                <motion.div className='blogsMian_multi'>
                    <motion.div className='blogsCards_multi'>
                        {currentPosts.map((item, index) => (
                            <Card className='cardsBlogs_multi' sx={{ borderRadius: 6 }} key={index}>
                                <CardHeader title={item.title} />
                                <CardMedia component="img" height="194" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <ExpandMore
                                      
                                        aria-label="show more"
                                    >
                                        <IconButton aria-label="show more">

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <span style={{ fontSize: 16, color: 'blue' }}>Read More</span>
                                                <ExpandMoreIcon style={{ color: 'blue' }} />
                                            </div>
                                        </IconButton>

                                    </ExpandMore>
                                </CardActions>
                            </Card>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Pagination Controls */}
                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <span> Page {currentPage} of {Math.ceil(blogData.length / postsPerPage)} </span>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(blogData.length / postsPerPage)}>Next</button>
                </div>
            </div>
            <div>

                <Footer />
            </div>
        </div>
    )
}
