import React from 'react';
import Moment from 'react-moment';

export default ({ post, onDelete, onEdit }) => {
  return (
        <div className="card border-0 rounded-0 mt-1 mb-2 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                    <small className="text-muted float-right">
                        <Moment fromNow>{post.date}</Moment>
                    </small>
                </h5>
                <p className="card-text">
                    {post.body}
                </p>
                <div className="float-right">
                    <button
                        type="button"
                        onClick={() => onEdit(post.id)}
                        className="btn btn-info rounded pr-3 pl-3 mr-1"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(post.id)}
                        className="btn btn-danger rounded pr-3 pl-3"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
  );
}
