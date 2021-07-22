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
</Modal>;
