import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
      const {deleteSongCallback, hideDeleteSongCallback } = this.props;
        return (
      <div className="modal" id="delete-song-modal" data-animation="slideInOutLeft" >
        <div className="modal-root" id="verify-delete-song-root">
          <div className="modal-north">
            Delete song?
          </div>                
          <div className="modal-center">
            <div className="modal-center-content">
              Are you sure you wish to permanently delete this <span id="delete-song-span" /> song?
            </div>
          </div>
          <div className="modal-south">
            <input 
              type="button" 
              id="delete-song-confirm-button" 
              className="modal-button"
              onClick={deleteSongCallback} 
              defaultValue="Confirm" />
            <input type="button" 
              id="delete-song-cancel-button" 
              className="modal-button"
              onClick={hideDeleteSongCallback} 
              defaultValue="Cancel"
                />
          </div>
        </div>
      </div>
      );
    }
}