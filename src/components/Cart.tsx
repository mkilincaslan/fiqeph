import React from "react";
import {StyleSheet} from "react-native";
import {Card, IconButton, Colors} from "react-native-paper";
import {CardComponentProps} from "../types";

const Cart: React.FC<CardComponentProps> = (props): JSX.Element => {
    const {cardData} = props;

    return (
        <>
            {cardData.length > 0 ? (
                cardData.map(card => (
                    <Card
                        key={card.id}
                        style={styles.card}
                        onPress={() => props.navigation.navigate("Detail")}>
                        <Card.Cover source={{uri: card.uri}} />
                        <Card.Actions>
                            <IconButton
                                size={20}
                                icon="share"
                                color={Colors.blue400}
                                onPress={() => console.log("Pressed")}
                            />
                            <IconButton
                                size={20}
                                icon="download"
                                color={Colors.red500}
                                onPress={() => console.log("Pressed")}
                            />
                        </Card.Actions>
                    </Card>
                ))
            ) : (
                <Card style={styles.card} onPress={() => props.navigation.navigate("Detail")}>
                    <Card.Cover source={{uri: "https://picsum.photos/600"}} />
                    <Card.Actions>
                        <IconButton
                            size={20}
                            icon="share"
                            color={Colors.blue400}
                            onPress={() => console.log("Pressed")}
                        />
                        <IconButton
                            size={20}
                            icon="download"
                            color={Colors.red500}
                            onPress={() => console.log("Pressed")}
                        />
                    </Card.Actions>
                </Card>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginBottom: 5
    }
});

export default Cart;
