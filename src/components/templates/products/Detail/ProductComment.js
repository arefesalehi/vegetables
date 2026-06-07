import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
const ProductComment = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <>
          {
            comment.isAccept === true && 
            (
              <div key={comment._id} className="w-full h-auto pb-3 pt-5  border-b-[1px]  mb-5  ">
              <div className="flex ">
                <div>
                  <div className="w-[50px] h-[50px] border rounded-[50%] ml-4 bg-white">
                    <CgProfile className="w-[50px] h-[50px] border  text-gray-500 rounded-[50%]" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between ">
                    <h1 className="mb-2 flex ">
                      <strong> {comment.username}</strong> –
                      <span className="text-gray-400">
                        {new Date(comment.date).toLocaleDateString('Fa-IR')}
                      </span>
                    </h1>
                    <div className="flex">
                      {new Array(Number(comment.score))
                        .fill(0)
                        .map((item, index) => {
                          return (
                            <FaStar key={index} className="text-yellow-500" />
                          )
                        })}
                      {new Array(5 - Number(comment.score))
                        .fill(0)
                        .map((item, index) => {
                          return (
                            <FaRegStar
                              key={index}
                              className="text-yellow-600"
                            />
                          )
                        })}
                    </div>
                  </div>

                  <div className="text-gray-400"> {comment.body}</div>
                </div>
              </div>
            </div>
            )
          }
          
          </>
        )
      })}
    </>
  )
}

export default ProductComment
