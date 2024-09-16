import Card from "./components/Card"
import CardLayout from "./components/CardLayout"
import FiltersContainer from "./components/searchBar/FiltersContainer"
import Layout from "./Layouts/Layout"
import CreateButtons from "./components/CreateButtons"



function App() {
  return (
    <Layout>
     <FiltersContainer>
        <CreateButtons/>
     </FiltersContainer>
     
        
          <CardLayout>
          <Card
                backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMny3wIRYrYLdGXaDJyleSTjZ1j8PuzWuGA&s"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
             <Card
                backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMny3wIRYrYLdGXaDJyleSTjZ1j8PuzWuGA&s"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
             <Card
                backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMny3wIRYrYLdGXaDJyleSTjZ1j8PuzWuGA&s"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
             <Card
                backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMny3wIRYrYLdGXaDJyleSTjZ1j8PuzWuGA&s"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
             <Card
                backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMny3wIRYrYLdGXaDJyleSTjZ1j8PuzWuGA&s"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
             <Card
                backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMny3wIRYrYLdGXaDJyleSTjZ1j8PuzWuGA&s"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
             <Card
                backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/1200px-Strawberries.jpg"
                price="80 000 ₾"
                location="თბილისი, ი. ჭავჭავაძის 53"
                bedCount={2}
                areaValue={{ value: '55 მ', subvalue: '2' }}
                additionalInfo="0160"
                tagText="ქირავდება"
            />
          </CardLayout>

          
    
    </Layout> 
  )
}

export default App
