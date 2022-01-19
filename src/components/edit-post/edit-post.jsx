import { useState, useMemo } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import './edit-post.scss';

const initialValue = { title: '', desc: '', file: '', text: '' };

const EditPost = (post = initialValue) => {
  const [formFields, setformFields] = useState(post);

  const onChange = (value, parameter) => {
    setformFields((prev) => ({ ...prev, [parameter]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    setformFields(initialValue);
  }

  const editorOption = useMemo(() => {
    return {
      autosave: {
        enabled: true,
        uniqueId: "SimpleMDE",
        delay: 1000,
      },
      status: false,
    };
  }, []);

  return (
    <div className="editor">
      <form className="editor__form" encType="multipart/form-data" method="post">
        <input className="editor__title" value={formFields.title} onChange={(e) => onChange(e.target.value, 'title')} type="text" name="title" id="title" placeholder="Введите заголовок..."></input>

        <label className="editor__label" htmlFor="desc">Короткое описание</label>
        <textarea className="editor__desc" value={formFields.desc} onChange={(e) => onChange(e.target.value, 'desc')} name="desc" id="desc" cols="60" rows="4"></textarea>

        <label className="editor__label" htmlFor="file">Ссылка на изображение:</label>
        <div className="editor__label-wrap">
          <input className="editor__file" value={formFields.file} onChange={(e) => onChange(e.target.value, 'file')} type="file" name="file" id="file" accept="image/*"></input> {/*disabled*/}
          <input className="editor__file-name" value={formFields.file} disabled type="text"></input>
          <label className="btn editor__btn editor__btn--file" htmlFor="file">Загрузить</label>
        </div>

        <label className="editor__label" htmlFor="text">Полное описание</label>
        <SimpleMDE options={editorOption} className="editor__text" value={formFields.text} onChange={(value) => onChange(value, 'text')} id="text" name="text" />

        <input className="btn editor__btn editor__btn--submit" type="submit" onClick={handleSubmit} value="Опубликовать" />
      </form >
    </div >
  );
};

export default EditPost;
