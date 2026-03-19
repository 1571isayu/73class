import React from 'react';
import { FlatList, StyleSheet, View,TouchableOpacity, Text, Image, ScrollView, StatusBar, Platform} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export const PopularBooks = [
  {
    id: '1',
    title: 'Fashionopolis',
    author: 'Dana Thomas',
    image: require('../assets/images/book1.png'), 
  },
  {
    id: '2',
    title: 'Chanel',
    author: 'Patrick Mauriès',
    image: require('../assets/images/book2.png'),
  },
  {
    id: '3',
    title: 'Calligraphy',
    author: 'June & Lucy',
    image: require('../assets/images/book3.png'),
  },
];

export const Newest = [
  {
    id: '4',
    title: 'Yves Saint Laurent',
    author: 'Suzy Menkes',
    image: require('../assets/images/book4.png'), 
    star: require('../assets/images/icon_star_filled.png'),
    starempty: require('../assets/images/icon_star_empty.png'),
    rating: 4, 
  },
  {
    id: '5',
    title: 'The Book of Signs',
    author: 'Rudolf Koch',
    image: require('../assets/images/book5.png'),
    star: require('../assets/images/icon_star_filled.png'),
    starempty: require('../assets/images/icon_star_empty.png'),
    rating: 3, 
  },
  {
    id: '6',
    title: 'Stitched Up',
    author: 'Tansy E. Hoskins',
    image: require('../assets/images/book6.png'),
    star: require('../assets/images/icon_star_filled.png'),
    starempty: require('../assets/images/icon_star_empty.png'),
    rating: 3, 
  },
];

export default function HomeScreen() {
  
  const renderPopularBook = ({item}) => {
    return (
      <Link href={`/diary/${item.id}`} asChild>
        <TouchableOpacity style={styles.bookCard}>
          <Image source={item.image} style={styles.bookImage} />
          <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </TouchableOpacity>
      </Link>
    );
  };

  const renderNewestBook = ({item}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image 
          key={i} 
          source={i <= item.rating ? item.star : item.starempty} 
          style={styles.starIcon} 
        />
      );
    }

    return (
      <Link href={`/diary/${item.id}`} asChild>
        <TouchableOpacity style={styles.newestCard}>
          <Image source={item.image} style={styles.newestImage} />
          <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
          <View style={styles.starsContainer}>
            {stars}
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.topbar}>
        <Image source={require('../assets/images/icon_menu.png')} style={{ width: 24, height: 24}} />
        <Image source={require('../assets/images/icon_search.png')} style={{ width: 24, height: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={styles.section}>
          <Text style={styles.title}>Popular Books</Text>
          <FlatList
            data={PopularBooks}
            renderItem={renderPopularBook}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 20}}
          />        
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Newest</Text>
          <FlatList
            data={Newest}
            renderItem={renderNewestBook}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 20}}
          />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topbar: {
    backgroundColor: '#ffffff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 8,
    justifyContent : 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  section: {
    paddingLeft: 20,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 16,
    color: '#111111',
  },
  bookCard: {
    marginRight: 16,
    width: 140,
  },
  bookImage: {
    width: 140,
    height: 210,
    borderRadius: 8,
    marginBottom: 10,
  },
  // Newest 卡片樣式
  newestCard: {
    marginRight: 16,
    width: 140,
  },
  newestImage: {
    width: 140,
    height: 210,
    borderRadius: 8,
    marginBottom: 10,
  },
  // 共用的文字樣式
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#888888',
  },
  // 星星的樣式
  starsContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
});