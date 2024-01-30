import { useState, KeyboardEvent, MouseEvent } from 'react';
import Link from 'next/link';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import { PhotoListItem } from '../types';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import style from './PhotoCard.module.scss';

export default function PhotoCard({ id, url, name, userImg }: PhotoListItem) {
  const [showPrice, setShowPrice] = useState(false);

  const handleMouseEnter = () => {
    setShowPrice(true);
  };

  const handleMouseLeave = () => {
    setShowPrice(false);
  };

  const photoHoverContainerStyle = {
    display: showPrice ? 'flex' : 'none',
  };

  const handleAddToCart = (e: KeyboardEvent | MouseEvent) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <Link href={`/photo/${id}`}>
      <ImageListItem
        className={style.photoMain}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={style.photo}
          srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${url}?w=248&fit=crop&auto=format`}
          alt="poster"
          loading="lazy"
        />
        <div className={style.photoHoverContainer} style={photoHoverContainerStyle}>
          <span className={style.priceNum}>$100</span>
          <IconButton
            size="small"
            className={style.addToCart}
            onClick={handleAddToCart}
            onKeyDown={handleAddToCart}
          >
            <AddShoppingCartIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className={style.photoFooter}>
          <div className={style.photoFooterInfo}>
            <div className={style.userInfo}>
              <Avatar alt={name} src={userImg} className={style.userInfo_avatar} />
              <span>{name}</span>
            </div>
            <div>烏石港北提</div>
          </div>
        </div>
      </ImageListItem>
    </Link>
  );
}
