import PropTypes from 'prop-types';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <img src={readIcon} alt="" /> Marcar todos como lidos
      </button>
      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src={unreadIcon} alt="" /> Marcas todos como não lidos
      </button>
    </div>
  )
}

Controls.propTypes = {
  setAllMessagesStatus: PropTypes.func.isRequired,
};


export default Controls;