export default function NewsDetailPage({params}) {
    const {news_id: id} = params;
console.log(id);


    return (
<p>teste {id}</p>
    )
}