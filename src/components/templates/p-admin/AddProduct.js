"use client";
import React, { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddProduct() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [code, setCode] = useState("");
  const [count, setCount] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState('');
  const [howToSave, setHowToSave] = useState('');
  const [logo, setLogo] = useState('');
  const [img, setImag] = useState({});
  const [score, setScore] = useState(0);




  const addPro = async () => {
    // Validation (You) ✅👇

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", weight);
    formData.append("code", code);
    formData.append("howToSave", howToSave);
    formData.append("tags", JSON.stringify(tags.split("،")));
    formData.append("logo", logo);
    formData.append("count", count);
    formData.append("category", category);
    formData.append("img", img);
    formData.append("score", String(score));




    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    console.log("Res ->", res);

    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر با موفقیت ایجاد شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
  };


  return (
    <section className="mycontainer">
      <p className="text-2xl font-bold
      
      
      mt-10 mb-10 ">افزودن محصول جدید</p>
      <div className="w-full" >
        <div className="flex w-full ">
          <div className=" w-full" >
            <label className="font-bold">نام محصول</label>
            <input
              className="w-full rounded mt-2 mb-2 "
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="لطفا نام محصول را وارد کنید"
              type="text"
            />
          </div>
          <div className=" w-full">
            <label className="font-bold mr-3">مبلغ محصول</label>
            <input
              className="w-full rounded mt-2 mb-2 mr-3"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="لطفا مبلغ محصول را وارد کنید"
              type="text"
            />
          </div>
        </div>


        <div className="flex w-full">
             <div className=" w-full">
          <label className="font-bold">توضیحات کوتاه</label>
          <input
            className="w-full rounded mt-2 mb-2"
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
            placeholder="توضیحات کوتاه محصول"
            type="text"
          />
        </div>
        <div className=" w-full">
          <label className="font-bold mr-3">توضیحات بلند</label>
          <input
            className="w-full rounded mt-2 mb-2 mr-3"
            value={longDescription}
            onChange={(event) => setLongDescription(event.target.value)}
            placeholder="توضیحات بلند محصول"
            type="text"
          />
        </div>
        </div>



        <div className="w-full flex">
           <div className="w-full">
          <label className="font-bold">وزن</label>
          <input
            className="w-full rounded mt-2 mb-2"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            placeholder="وزن محصول"
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="font-bold mr-3">برچسب ها :</label>
          <input
            className="w-full rounded mt-2 mb-2 mr-3"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
            type="text"
          />
        </div>
        </div>


        <div className="w-full flex">
           <div className="w-full">
          <label className="font-bold"> دسته بندی</label>
          <input
            className="w-full rounded mt-2 mb-2"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder=" دسته بندی ..."
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="font-bold mr-3">لوگو</label>
          <input
            className="w-full rounded mt-2 mb-2 mr-3"
            value={logo}
            onChange={(event) => setLogo(event.target.value)}
            placeholder=" لوگو"
            type="text"
          />
        </div>
        </div>


        <div className="w-full flex">
              <div className="w-full">
          <label className="font-bold">نحوه ذخیره سازی</label>
          <input
            className="w-full rounded mt-2 mb-2"
            value={howToSave}
            onChange={(event) => setHowToSave(event.target.value)}
            placeholder="نحوه ذخیره سازی "
            type="text"
          />
        </div>

        <div className="w-full">
          <label className="font-bold mr-3">کد  </label>
          <input
            className="w-full rounded mr-3 mt-2 mb-2"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="کد..."
            type="text"
          />
        </div>
        </div>


<div className="w-full flex">
  
        <div className="w-full">
          <label className="font-bold">تعداد  محصول</label>
          <input
            className="w-full rounded mt-2 mb-2"
            value={count}
            onChange={(event) => setCount(event.target.value)}
            placeholder="تعداد محصول..."
            type="text"
          />
        </div>

        <div className="w-full">
          <label className="font-bold mr-3">تصویر محصول</label>
          <input

            className="w-full rounded mt-2 mb-2 mr-3"
            onChange={(event) => setImag(event.target.files[0])}
            type="file"
          />
        </div>
</div>
     

       

       

    




      </div>
      <button className="text-white bg-green-600 w-[170px] p-3 rounded" onClick={addPro}>افزودن</button>
    </section>
  );
}

export default AddProduct;
