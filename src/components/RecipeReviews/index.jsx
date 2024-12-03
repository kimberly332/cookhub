// src/components/RecipeReviews/index.jsx
import React, { useState } from 'react';
import { Star, MessageCircle, ThumbsUp } from 'lucide-react';

const RecipeReviews = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: "Absolutely delicious! Made this for my family and they loved it.",
      date: "2024-03-01",
      likes: 12
    },
    {
      id: 2,
      user: "John D.",
      rating: 4,
      comment: "Great recipe, though I added a bit more garlic for extra flavor.",
      date: "2024-02-28",
      likes: 8
    }
  ]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && rating > 0) {
      const newComment = {
        id: comments.length + 1,
        user: "You",
        rating,
        comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([newComment, ...comments]);
      setComment('');
      setRating(0);
    }
  };

  return (
    <div className="w-full mt-12 bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-emerald-900 mb-6">Reviews & Comments</h2>
      
      {/* Rating Input */}
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3">Rate this recipe</h3>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`p-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:scale-110 transition-transform`}
            >
              <Star className="w-8 h-8 fill-current" />
            </button>
          ))}
        </div>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mb-8">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this recipe..."
          className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 mb-4"
          rows="3"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all"
          disabled={!comment.trim() || rating === 0}
        >
          Submit Review
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="border-b border-gray-100 pb-6 last:border-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-medium text-emerald-900">{c.user}</span>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < c.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{c.date}</span>
            </div>
            <p className="text-gray-700 mb-3">{c.comment}</p>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600">
              <ThumbsUp className="w-4 h-4" />
              <span>{c.likes} helpful</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeReviews;