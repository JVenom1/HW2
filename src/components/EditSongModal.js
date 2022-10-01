import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
      const {editSongCallback, hideEditSongModal} = this.props;
        return (
            <div className="modal" id="edit-song-modal" data-animation="slideInOutLeft">
        <div className="modal-root" id="verify-edit-song-root">
          <div className="modal-north">
            Edit Song?
          </div>                
          <div className="modal-center">
            <div className="modal-center-content" id="mcc">
              <label htmlFor="title-text">Title: </label>
              <input type="text" id="title-text" /><br />
              <label htmlFor="artist-text">Artist: </label>
              <input type="text" id="artist-text" /><br />
              <label htmlFor="youTubeId-text">YouTube Id: </label>
              <input type="text" id="youTubeId-text" /><br />
            </div>
          </div>
          <div className="modal-south">
            <input
              onClick={editSongCallback}
              type="button" 
              id="edit-song-confirm-button" 
              className="modal-button" 
              defaultValue="Confirm" />
            <input
              onClick={hideEditSongModal}
              type="button" 
              id="edit-song-cancel-button" 
              className="modal-button" 
              defaultValue="Cancel" />
          </div>
        </div>
      </div>
        );
    }
}