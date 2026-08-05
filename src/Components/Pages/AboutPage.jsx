/*
import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal, 
  Check, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award 
} from 'lucide-react';

// Streamlined Instagram Post Card Component
const SocialPostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.initialLiked || false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleDoubleTap = () => {
    if (!liked) {
      setLiked(true);
    }
    setShowHeartOverlay(true);
    setTimeout(() => setShowHeartOverlay(false), 800);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="social-card">
      <div className="social-card-header">
        <div className="social-card-user">
          <div className="social-avatar-ring">
            <img 
              src={post.userAvatar || "/profile_pic.png"} 
              alt={post.username} 
              className="social-avatar-img"
            />
          </div>
          <div className="social-user-info">
            <div className="social-username">@{post.username}</div>
            <div className="social-location">{post.location}</div>
          </div>
        </div>

        <div className="social-header-actions">
          <button className="social-more-btn" aria-label="Options">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      <div className="social-card-media" onDoubleClick={handleDoubleTap}>
        <img 
          src={post.mediaImage} 
          alt={post.mediaCaption || "Post Media"} 
          className="social-media-img"
        />

        {post.overlayBadge && (
          <div className="social-media-badge">
            {post.overlayBadgeIcon}
            <span>{post.overlayBadge}</span>
          </div>
        )}

        {showHeartOverlay && (
          <div className="heart-pop-overlay">
            <Heart size={65} className="heart-pop-icon" />
          </div>
        )}
      </div>

      <div className="social-action-bar">
        <div className="social-left-actions">
          <button 
            className={`social-action-btn like-btn ${liked ? 'liked' : ''}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <Heart size={20} fill={liked ? "#ef4444" : "none"} color={liked ? "#ef4444" : "currentColor"} />
          </button>

          <button 
            className="social-action-btn comment-btn"
            aria-label="Comment"
          >
            <MessageCircle size={20} />
          </button>

          <button 
            className="social-action-btn share-btn"
            onClick={handleShare}
            aria-label="Share"
          >
            {copiedLink ? <Check size={20} className="text-green" /> : <Send size={20} />}
          </button>
        </div>

        <button 
          className={`social-action-btn bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
          onClick={() => setBookmarked(!bookmarked)}
          aria-label="Bookmark"
        >
          <Bookmark size={20} fill={bookmarked ? "#f5a623" : "none"} color={bookmarked ? "#f5a623" : "currentColor"} />
        </button>
      </div>

      <div className="social-caption">
        <span className="social-caption-username">@{post.username}</span>{' '}
        <span className="social-caption-text">{post.captionText}</span>
        
        {post.hashtags && (
          <div className="social-hashtags">
            {post.hashtags.map((tag, idx) => (
              <span key={idx} className="social-hashtag">#{tag} </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
*/

export default function AboutPage() {
  return null;
}