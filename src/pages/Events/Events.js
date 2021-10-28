import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event'

const Events = () => {


    const events=[
        {
            key:1,
            name:'child support',
            img:'https://i.ibb.co/hB3SXqt/child-Support.png',
        },
        {
            key:2,
            name:'refuge shelter',
            img:'https://i.ibb.co/fdRsKy3/refuse-Shelter.png',
        },
        {
            key:3,
            name:'food charity',
            img:'https://i.ibb.co/KGkG3bP/food-Charity.png',
        },
        {
            key:4,
            name:'host a clothing swap',
            img:'https://i.ibb.co/Qd0mRmv/cloth-Swap.png',
        },
        {
            key:5,
            name:'host a river clean-up',
            img:'https://i.ibb.co/HxsT7cb/river-Clean.png',
        },
        {
            key:6,
            name:'clean water for children',
            img:' https://i.ibb.co/KDSVWrV/clean-Water.png',
        },
        {
            key:7,
            name:'good education',
            img:'https://i.ibb.co/ZNDNJYm/good-Education.png',
        },
        {
            key:8,
            name:'new books for children',
            img:'https://i.ibb.co/qWZBgPk/newBooks.png',
        },
        {
            key:9,
            name:'host a study group',
            img:'https://i.ibb.co/VB82my5/study-Group.png',
        },
        {
            key:10,
            name:'build birdhouses for your neighbors',
            img:'https://i.ibb.co/PWRZhtX/bird-House.png',
        },
        {
            key:11,
            name:'organize books at the library',
            img:'https://i.ibb.co/Z28pmXP/library-Books.png',
        },
        {
            key:12,
            name:'give a seminer on driving safety',
            img:'https://i.ibb.co/w7MKh3D/drive-Safety.png',
        },
        {
            key:13,
            name:'give free music lessons',
            img:'https://i.ibb.co/H7pz8Ds/music-Lessons.png',
        },
        {
            key:14,
            name:'teach people how to register to vote',
            img:'https://i.ibb.co/ZM2qrGD/vote-Register.png',
        },
        {
            key:15,
            name:'clean up your local park',
            img:'https://i.ibb.co/nLgV1yY/clearn-Park.png',
        },
        {
            key:16,
            name:'give it help to local adults',
            img:'https://i.ibb.co/q9DjbwR/ITHelp.png',
        },
        {
            key:17,
            name:'foster a shelter animal',
            img:'https://i.ibb.co/SBP4dKb/animal-Shelter.png',
        },
        {
            key:18,
            name:'babysit during pta meetings',
            img:' https://i.ibb.co/3v2qv6P/babySit.png',
        },
        {
            key:19,
            name:'collect stuffed animals',
            img:'https://i.ibb.co/7NRhW2R/stuffed-Animals.png',
        },
        {
            key:20,
            name:'collect school supplies',
            img:'https://i.ibb.co/h8GyDbt/school-Suffiles.png',
        },
    ]

    return (
        <Container >
            <Row xs={1} sm={2} md={4} className="g-5">
                {
                    events.map(event => <Event event={event}></Event>)
                }
            </Row>
        </Container>
    );
};

export default Events;



// https://i.ibb.co/qWZBgPk/newBooks.png
// https://i.ibb.co/fdRsKy3/refuse-Shelter.png
// https://i.ibb.co/HxsT7cb/river-Clean.png
// https://i.ibb.co/h8GyDbt/school-Suffiles.png
// https://i.ibb.co/VB82my5/study-Group.png
// https://i.ibb.co/7NRhW2R/stuffed-Animals.png
// https://i.ibb.co/ZM2qrGD/vote-Register.png
// https://i.ibb.co/SBP4dKb/animal-Shelter.png
// https://i.ibb.co/3v2qv6P/babySit.png
// https://i.ibb.co/PWRZhtX/bird-House.png
// https://i.ibb.co/hB3SXqt/child-Support.png
// https://i.ibb.co/KDSVWrV/clean-Water.png
// https://i.ibb.co/nLgV1yY/clearn-Park.png
// https://i.ibb.co/Qd0mRmv/cloth-Swap.png
// https://i.ibb.co/w7MKh3D/drive-Safety.png
// https://i.ibb.co/RpJMP36/extra-Volunteer.png
// https://i.ibb.co/KGkG3bP/food-Charity.png
// https://i.ibb.co/ZNDNJYm/good-Education.png
// https://i.ibb.co/q9DjbwR/ITHelp.png
// https://i.ibb.co/Z28pmXP/library-Books.png
// https://i.ibb.co/H7pz8Ds/music-Lessons.png