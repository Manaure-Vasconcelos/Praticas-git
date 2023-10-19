/* 
    - components do app
    - Recebe props e pode ou nao fazer a validação de propsType:
    tem que baixar npm PropsType e importar e fazer a validação.
    É mais viável em projetos maiores.
    retorna um jsx, usando arrow function pode simplificar o código.
*/
import './style.css'

export const PostCard = ({ title, cover, body }) => (
<div className="post">
    <img src={cover} alt={title} />
    <div className="postCards">
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
</div>
);
