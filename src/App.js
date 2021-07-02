import FacebookPost from "./components/FacebookPost";

function App() {
  return (
    <div className="App">
      <FacebookPost
        details={{
          createdBy: "Mark Zuckerberg",
          avatar: "https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",
          description: "Mai Shaheen Hun Iqbal Ka",
          createdAt: Date(),
          images: [
            // "https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",
            // "https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",
            // "https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",
            // "https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",
            // "https://i.insider.com/5ec7fcf62618b96a58135c38?width=700",
          ],
        }}
      />
    </div>
  );
}

export default App;
 