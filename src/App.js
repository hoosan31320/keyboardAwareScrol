import React, { Component } from "react";
import {
  Picker,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback
} from "react-native";

// const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>`;

class App extends Component {
  _x = React.createRef();
  _y = React.createRef();
  _z = React.createRef();
  _customerName = React.createRef();

  constructor() {
    super();

    var rooms = [
      {
        showSubCombo: false,
        room: "Quarto",
        width: 140,
        img:
          "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fstove.svg?alt=media&token=7b523bc4-9c58-4e20-afa0-de9baffad7fa",
        key: "quarto",
        qtty: 0,
        forniture: [
          {
            name: "Cama Solteiro",
            key: "quarto.sofa",
            dimensions: [
              {
                name: "3 lugares",
                measure: { x: 120, y: 140, z: 160 }
              },
              {
                name: "Cama Casal",
                measure: { x: 120, y: 140, z: 160 }
              }
            ]
          },
          {
            name: "Mesa",
            key: "quarto.mesa",
            dimensions: [
              {
                name: "4 cadeiras",
                measure: { x: 120, y: 140, z: 160 }
              },
              {
                name: "6 cadeiras",
                measure: { x: 120, y: 140, z: 160 }
              }
            ]
          }
        ]
      },
      {
        room: "Sala de Jantar",
        width: 100,
        img:
          "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Ftable-small.svg?alt=media&token=46942151-310e-447b-9ce2-f53194a78672",
        key: "salajantar",
        qtty: 0,
        forniture: [
          {
            name: "Meta",
            key: "quarto.sofa",
            dimensions: [
              {
                name: "4 cadeiras",
                measure: { x: 120, y: 140, z: 160 }
              },
              {
                name: "6 cadeiras",
                measure: { x: 120, y: 140, z: 160 }
              }
            ]
          },
          {
            name: "Armario",
            key: "quarto.mesa",
            dimensions: [
              {
                name: "2 portas",
                measure: { x: 120, y: 140, z: 160 }
              },
              {
                name: "4 portas",
                measure: { x: 120, y: 140, z: 160 }
              }
            ]
          }
        ]
      },
      {
        room: "Sala de Estar",
        width: 150,
        img:
          "https://firebasestorage.googleapis.com/v0/b/moveoutapp-e23b7.appspot.com/o/svg-furniture%2Fsofa.svg?alt=media&token=a15bdb92-5a1a-443a-a76e-ab3e6c968a33",
        key: "salaestar",
        forniture: []
      }
    ];

    this.state = {
      rooms: rooms,
      currentRoom: rooms[0],
      currentRoomIndex: 0,
      currentForniture: rooms[0].forniture[0],
      currentDimensions: rooms[0].forniture[0].dimensions,
      currentSelectedDimension: rooms[0].forniture[0].dimensions[0],
      currentCustom: {},
      addedItems: [],
      modalVisible: false
    };
  }

  _renderCurrentHeader = item => {
    var arr = [];

    arr.push(
      <View>
        <View style={{ paddingHorizontal: 24, marginVertical: 2.4 + "em" }}>
          <Text
            style={{
              paddingBottom: 6,
              paddingHorizontal: 8,
              fontWeight: "bold"
            }}
          >
            Escolha o cômodo:
          </Text>
          <Picker
            style={{
              height: 54,
              paddingHorizontal: 12
            }}
            onValueChange={(value, itemIndex) => {
              this.actionNext();
            }}
          >
            {this.state.rooms &&
              this.state.rooms.map((itemf, rowf) => {
                return <Picker.Item label={itemf.room} />;
              })}
          </Picker>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: "#858585",
                margin: 0,
                padding: 0
              }}
            >
              O que você possui no cômodo
              <span style={{ fontWeight: "bold", color: "#323232" }}>
                {" " + item.room}
              </span>
              ?
            </h2>
          </Text>
        </View>
      </View>
    );
    return arr;
  };

  _renderRoomOptions = room => {
    var arr = [];
    var self = this;

    if (!room || !room.forniture || room.forniture.length === 0) {
      arr.push(
        <Text>
          <h2>Nenhum item para exibir</h2>
        </Text>
      );
      return arr;
    }

    arr.push(
      <View
        style={{
          marginTop: 18,
          paddingHorizontal: 24
        }}
      >
        <View
          style={{
            display: "grid",
            gridGap: 30,
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          <Picker
            style={{
              height: 54,
              paddingHorizontal: 12
            }}
            onValueChange={(value, itemIndex) => {
              self.setState({
                currentForniture: room.forniture[itemIndex],
                currentDimensions: room.forniture[itemIndex].dimensions,
                currentSelectedDimension:
                  room.forniture[itemIndex].dimensions[0]
              });
            }}
          >
            {room.forniture &&
              room.forniture.map((itemf, rowf) => {
                return <Picker.Item key={rowf} label={itemf.name} />;
              })}
          </Picker>

          <Picker
            style={{
              height: 54,
              paddingHorizontal: 12
            }}
            onValueChange={(value, itemIndex) => {
              //change currentDimension
              self.setState({
                currentSelectedDimension: this.state.currentDimensions[
                  itemIndex
                ]
              });
            }}
          >
            {self.state.currentDimensions &&
              self.state.currentDimensions.map((itemf, rowf) => {
                return <Picker.Item label={itemf.name} />;
              })}
          </Picker>
        </View>
      </View>
    );

    // subitem
    arr.push(
      <View
        style={{
          paddingHorizontal: 30,

          marginTop: 1.2 + "em",
          marginBottom: 2.4 + "em"
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this.addItem();
          }}
          style={{ width: "100%", borderColor: "transparent" }}
        >
          <View style={styles.buttonCustom}>
            <Text style={styles.buttonCustomText}>Adicionar</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
    return arr;
  };

  actionNext = () => {
    var rowindex =
      this.state.currentRoomIndex === this.state.rooms.length - 1
        ? 0
        : this.state.currentRoomIndex + 1;

    var currentroom = this.state.rooms[rowindex];
    var currentforniture =
      currentroom.forniture && currentroom.forniture.length > 0
        ? currentroom.forniture[0]
        : {};
    var currentdimension = currentforniture.dimensions
      ? currentforniture.dimensions
      : [];

    this.setState({
      currentRoomIndex: rowindex,
      currentRoom: currentroom,
      currentForniture: currentforniture,
      currentDimensions: currentdimension,
      currentSelectedDimension:
        currentdimension.length > 0 ? currentdimension[0] : {}
    });
  };

  _nextRoomButton = item => {
    var arrButton = [];
    if (this.state.currentRoomIndex === this.state.rooms.length - 1) {
      arrButton.push(
        <View
          style={{
            paddingHorizontal: 30
          }}
        >
          <Button
            title={"ir para " + this.state.rooms[0].room}
            onPress={this.actionNext}
          />
        </View>
      );
    } else {
      var nextroom = this.state.rooms[this.state.currentRoomIndex + 1];
      arrButton.push(
        <View
          style={{
            paddingHorizontal: 30
          }}
        >
          <Button
            title={"ir para " + nextroom.room}
            onPress={this.actionNext}
          />
        </View>
      );
    }

    if (this.state.addedItems.length > 0)
      arrButton.push(<Button title="já terminei" />);
    return arrButton;
  };

  addItem = () => {
    var addedItems = [];
    this.state.addedItems.forEach(item => addedItems.push(item));

    var item = {
      room: this.state.currentRoom,
      forniture: this.state.currentForniture,
      dimension: this.state.currentSelectedDimension,
      key:
        this.state.currentRoom.key +
        this.state.currentForniture.key +
        this.state.currentSelectedDimension.key +
        addedItems.length
    };

    addedItems.push(item);
    this.setState({
      addedItems: addedItems
    });
  };

  addItemCustom = () => {
    var currentCustom = this.state.currentCustom;

    if (
      !currentCustom.name ||
      !currentCustom._x ||
      !currentCustom._y ||
      !currentCustom._z
    )
      return;

    var addedItems = [];

    this.state.addedItems.forEach(item => addedItems.push(item));

    var forniture = {
      name: currentCustom.name,
      key: currentCustom.name + "_" + addedItems.length
    };

    var dimension = {
      name:
        currentCustom._x + " x " + currentCustom._y + " x " + currentCustom._z,
      measure: { x: currentCustom._x, y: currentCustom._y, z: currentCustom._z }
    };

    var item = {
      room: this.state.currentRoom,
      forniture: forniture,
      dimension: dimension,
      key: forniture.key
    };
    addedItems.push(item);

    this.setState({
      addedItems: addedItems,
      currentCustom: {}
    });
  };

  removeAddedItem = item => {
    var addedItems = this.state.addedItems.filter(filterItem => {
      return filterItem.key !== item.key;
    });

    this.setState({
      addedItems: addedItems
    });
  };

  _showModalCustomForniture = () => {
    return <View style={{ marginTop: 22 }} />;
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {this._renderCurrentHeader(this.state.currentRoom)}

        {this._renderRoomOptions(this.state.currentRoom)}

        {this.state.addedItems.map(item => {
          if (item.room.key === this.state.currentRoom.key)
            return (
              <ScrollView
                style={{
                  marginTop: 0.2 + "em",
                  marginBottom: 1 + "em",
                  paddingHorizontal: 30
                }}
              >
                <View
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 8em",

                    alignItems: "center",
                    justifyContent: "space-between",

                    paddingBottom: 1 + "em",
                    borderBottom: "1px solid #efefef"
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexDirection: "row"
                    }}
                  >
                    <TouchableWithoutFeedback
                      style={{
                        border: "none"
                      }}
                      onPress={() => this.addItemPhoto}
                    >
                      <Image
                        style={{ width: 54, height: 54 }}
                        source={{
                          uri:
                            "https://facebook.github.io/react-native/img/tiny_logo.png"
                        }}
                      />
                    </TouchableWithoutFeedback>

                    <Text style={{ marginLeft: 1 + "em" }}>
                      <h5 style={{ margin: 0, padding: 0 }}>Item:</h5>
                      <p style={{ margin: 0, padding: 0 }}>
                        {item.forniture.name + " - " + item.dimension.name}
                      </p>
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 8 + "em",
                      textAlign: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: "rgb(33, 150, 243)",
                        fontWeight: "bold",

                        borderRadius: 4,
                        paddingVertical: 0.8 + "em",
                        border: "1px solid rgb(33, 150, 243)"
                      }}
                      onPress={() => this.removeAddedItem(item)}
                    >
                      Remover
                    </Text>
                  </View>
                </View>
              </ScrollView>
            );
          else return null;
        })}

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View
              style={{
                paddingVertical: 48
              }}
            >
              <Text style={{ textAlign: "center" }}>
                <h3
                  style={{
                    fontWeight: "500",
                    color: "#858585",
                    margin: 0,
                    padding: 0,
                    marginBottom: 12
                  }}
                >
                  Algum item que não está listado?
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#000000"
                    }}
                  >
                    {" "}
                    Informe abaixo:
                  </span>
                </h3>
              </Text>

              <View
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 30
                }}
              >
                <TextInput
                  ref={this._customerName}
                  value={this.state.currentCustom._customerName}
                  placeholder="Nome do Item"
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    paddingVertical: 18,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    border: "2px solid #eeeeee"
                  }}
                  onChangeText={value => {
                    var currentCustom = this.state.currentCustom;
                    currentCustom.name = value;
                    this.setState({ currentCustom: currentCustom });
                  }}
                />
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",

                  paddingVertical: 8,
                  paddingHorizontal: 30
                }}
              >
                <TextInput
                  ref={this._x}
                  value={this.state.currentCustom._x}
                  placeholder="Medida x"
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    paddingVertical: 18,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    border: "2px solid #eeeeee"
                  }}
                  onChangeText={value => {
                    var currentCustom = this.state.currentCustom;
                    currentCustom._x = value;
                    this.setState({ currentCustom: currentCustom });
                  }}
                />
                <TextInput
                  ref={this._y}
                  value={this.state.currentCustom._y}
                  placeholder="Medida y"
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    border: "2px solid #eeeeee"
                  }}
                  onChangeText={value => {
                    var currentCustom = this.state.currentCustom;
                    currentCustom._y = value;
                    this.setState({ currentCustom: currentCustom });
                  }}
                />
                <TextInput
                  ref={this._z}
                  value={this.state.currentCustom._z}
                  placeholder="Medida z"
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    border: "2px solid #eeeeee"
                  }}
                  onChangeText={value => {
                    var currentCustom = this.state.currentCustom;
                    currentCustom._z = value;
                    this.setState({ currentCustom: currentCustom });
                  }}
                />
              </View>

              <View style={{ marginTop: 24, paddingHorizontal: 30 }}>
                <TouchableHighlight
                  style={styles.buttonCustom}
                  onPress={() => this.addItemCustom()}
                >
                  <View>
                    <Text style={styles.buttonCustomText}>Adicionar Item</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.buttonCustom}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <View>
            <Text style={styles.buttonCustomText}>Item não listado</Text>
          </View>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },

  buttonCustom: {
    textAlign: "center",

    width: "100%",
    borderRadius: 4,
    paddingVertical: 16,
    borderColor: "transparent",
    backgroundColor: "rgb(33, 150, 243)"
  },

  buttonCustomText: {
    fontSize: 14,
    color: "#ffffff",
    textTransform: "uppercase"
  }
});

export default App;
