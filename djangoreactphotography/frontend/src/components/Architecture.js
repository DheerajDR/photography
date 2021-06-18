import React, {useState,useEffect} from 'react';
import {
    LightgalleryProvider,
    LightgalleryItem,
} from "react-lightgallery";
import axios from 'axios';
import { render } from 'react-dom';

const ArchitectureCard = (props) => {
    function renderShopButtons () {
        if (!props.alamyURL && !props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Digital Downloads
                    </button>
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Prints
                    </button>
                </div>
            )
        } else if (!props.alamyURL && props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Digital Downloads
                    </button>
                    <a href={props.fineArtAmericaURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Prints
                        </button>
                    </a>
                </div>
            )
        } else if (props.alamyURL && !props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <a href={props.alamyURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Digital Downloads
                            </button>
                        </a>
                    <button className="disabled">
                        <i className="dont icon"></i>
                        Prints
                    </button>
                </div>
            )
        } else if (props.alamyURL && props.fineArtAmericaURL) {
            return (
                <div className="button-container">
                    <a href={props.alamyURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Digital Downloads
                        </button>
                    </a>
                    <a href={props.fineArtAmericaURL}>
                        <button className="enabled">
                            <i className="shopping cart icon"></i>
                            Prints
                        </button>
                    </a>
                </div>
            )
        }
    }

    return (
        <div className="thumbnails">
            <LightgalleryItem group="any" src={props.s3URL} subHtml={
                "<h5>"+props.caption+"</h5>"+
                "<p>Photo taken on "+props.dateTaken+", "+
                props.location+"</p>"
            }>
                <img src={props.s3URL} alt={props.altText} className="image-shadow stopSteal"></img>
            </LightgalleryItem>
            <div className="shop-button-container">
                {renderShopButtons()}
            </div>
        </div>
    )
}

const ArchitecturePhotos = () => {
    const [ArchitecturePhotoInfo,setArchitecturePhotoInfo] = useState([]);

    const fetchArchitecturePhotos  = async () =>{
        const response = await axios.get('/api/photos/')
        setArchitecturePhotoInfo(response.data)
    }

    const createArchitectureCards = () => {
        return (
            <>
                {ArchitecturePhotoInfo.map(photo => {

                    if(!photo){
                        return <div>Loading..</div>

                    } else if(photo.category === 'Architecture') {

                        return (

                                <ArchitectureCard
                                    key={photo.id}
                                    image={photo.image}
                                    s3URL={photo.s3_image_url}
                                    name={photo.name}
                                    caption={photo.caption}
                                    altText={photo.alt_text}
                                    dateTaken={photo.date_taken}
                                    category={photo.category}
                                    location={photo.location}
                                    alamyURL={photo.alamy_url}
                                    fineArtAmericaURL={photo.fine_art_america_url}
                                />

                        )
                    }
                })}
            </>
        )
    }

    useEffect(()=>{
        fetchArchitecturePhotos()
    },[])

    return (
        <LightgalleryProvider
            lightgallerySettings={
                {
                    addClass: 'stopSteal',
                    download: false,
                }
            }
            plugins={
                [
                    'lg-autoplay.js',
                    'lg-fullscreen.js',
                    'lg-hash.js',
                    'lg-pager.js',
                    'lg-zoom.js',
                ]
            }
        >
            <div className="Gallery">
                {createArchitectureCards()}
            </div>
        </LightgalleryProvider>
    )
}

export default ArchitecturePhotos