import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import firebase, { auth, dbRef } from "../firebase";
import { decrypt } from "../utils/crypto";
import { BiShow, BiHide } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import PasswordIsoImage from "../images/password_isometric.png";

const MyVault = props => {
  const { className } = props;
  const user = auth.currentUser;
  const msp = useSelector(state => state.auth.msp);
  const authenticated = useSelector(state => state.auth.authenticated);
  const searchInput = useRef();
  const [lockData, setLockData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const secureText = "●●●●●●●●●●";
  const fetchData = () => {
    if (user) {
      dbRef
        .child(user.uid)
        .child("locks")
        .once("value", snapshot => {
          let items = [];
          if (snapshot) {
            snapshot.forEach(item => {
              items.push({
                uuid: item.val().uuid,
                nickname: decrypt(item.val().nickname, msp),
                username: decrypt(item.val().username, msp),
                password: decrypt(item.val().password, msp),
              });
            });
          }
          setLockData(items);
          setFilteredData(items);
        });
    }
  };
  const onShow = e => {
    const { id } = e.currentTarget.dataset;
    const lockItem = document.getElementById(`${id}-item`);
    const showIcon = lockItem.children[0].children[1].children[0];
    const hideIcon = lockItem.children[0].children[1].children[1];
    const sensitiveData = lockItem.children[1];
    const isShowingData = e.currentTarget.id === `${id}-show`;
    sensitiveData.children[0].innerText = isShowingData
      ? getItemById(id).username
      : secureText;
    sensitiveData.children[1].innerText = isShowingData
      ? getItemById(id).password
      : secureText;
    showIcon.style.display = isShowingData ? "none" : "inline";
    hideIcon.style.display = isShowingData ? "inline" : "none";
  };
  const onClose = e => {
    const { id } = e.currentTarget.dataset;
    const item = getItemById(id);
    const { nickname } = item;
    if (
      window.confirm(
        `Are you sure you want to delete ${nickname} from your vault?`
      )
    ) {
      firebase
        .database()
        .ref(`${user.uid}/locks/${id}`)
        .remove()
        .then(() => fetchData());
    } else {
    }
  };
  const getItemById = id => {
    const items = lockData.filter(item => item.uuid === id);
    return items[0];
  };
  const onInputChange = e => {
    const filteredLockData = lockData.filter(item =>
      item.nickname.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilteredData(filteredLockData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderFilteredData = filteredData && (
    <ul className="lock-list">
      {filteredData.map(
        item =>
          item.uuid && (
            <li
              key={item.uuid}
              id={`${item.uuid}-item`}
              className="lock-item shadow"
            >
              <div className="top-container">
                <h3 className="lock-nickname">{item.nickname}</h3>
                <div className="icons">
                  <BiShow
                    className="btn"
                    id={`${item.uuid}-show`}
                    data-id={item.uuid}
                    onClick={onShow}
                  />
                  <BiHide
                    className="btn"
                    id={`${item.uuid}-hide`}
                    data-id={item.uuid}
                    style={{ display: "none" }}
                    onClick={onShow}
                  />
                  <MdClose
                    className="close-btn btn"
                    id={`${item.uuid}-close`}
                    data-id={item.uuid}
                    onClick={onClose}
                  />
                </div>
              </div>
              <ul className="sensitive-data">
                <span>{secureText}</span>
                <span>{secureText}</span>
              </ul>
            </li>
          )
      )}
    </ul>
  );

  return authenticated ? (
    <div className={className}>
      <img
        className={`password-image smooth-image image-${
          imageLoaded ? "visible" : "hidden"
        }`}
        onLoad={() => setImageLoaded(true)}
        src={PasswordIsoImage}
        alt="password_iso_image"
        draggable={false}
      />
      <form className="search-form">
        <input
          type="text"
          placeholder="SEARCH"
          onChange={onInputChange}
          ref={searchInput}
        />
      </form>
      {renderFilteredData}
    </div>
  ) : null;
};

export default styled(MyVault)`
  padding: 1rem;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  .password-image {
    height: 30vw;
    max-height: 20rem;
    display: block;
    margin: auto;
    margin-top: 10rem;
  }
  .search-form {
    width: 80%;
    max-width: 50rem;
    margin: auto;
    margin-top: 1rem;
    input {
      width: 100%;
      font-size: 1em;
      padding: 0.5rem;
    }
  }
  .lock-list {
    width: 80%;
    max-width: 50rem;
    margin: auto;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    .lock-item {
      width: calc(50% - 1rem);
      height: 7.5rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      background-color: #f5f5f7;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      border-radius: 0.125rem;
      overflow: hidden;
      &:nth-child(even) {
        width: 50%;
        margin-right: 0;
      }
      .top-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #005ce6;
        color: white;
        padding: 0.5rem 0.5rem 0.5rem 0.75rem;
        .lock-nickname {
          font-size: 1em;
          font-weight: lighter;
        }
        .icons {
          position: relative;
          top: 0.125rem;
          font-size: 1em;
          .close-btn {
            margin-left: 0.125rem;
          }
        }
      }
      .sensitive-data {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.75rem;
        overflow: auto;
        span {
          color: gray;
          font-size: 0.9em;
          margin-bottom: 0.25rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  @media (max-width: 640px) {
    .lock-list {
      .lock-item {
        width: 100%;
        margin-right: 0;
      }
    }
  }
`;
