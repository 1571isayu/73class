import React from 'react';
import { FlatList, StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

// ==============================
// 1. 資料區 (Data)
// ==============================
const PopularBooks = [
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

const Newest = [
  {
    id: '4',
    title: 'Yves Saint Laurent',
    author: 'Suzy Menkes',
    image: require('../assets/images/book4.png'), 
    star: require('../assets/images/icon_star_filled.png'),
    starempty: require('../assets/images/icon_star_empty.png'),
    rating: 4, // 評分 4 顆星
  },
  {
    id: '5',
    title: 'The Book of Signs',
    author: 'Rudolf Koch',
    image: require('../assets/images/book5.png'),
    star: require('../assets/images/icon_star_filled.png'),
    starempty: require('../assets/images/icon_star_empty.png'),
    rating: 5, // 評分 5 顆星
  },
  {
    id: '6',
    title: 'Stitched Up',
    author: 'Tansy E. Hoskins',
    image: require('../assets/images/book6.png'),
    star: require('../assets/images/icon_star_filled.png'),
    starempty: require('../assets/images/icon_star_empty.png'),
    rating: 3, // 評分 3 顆星
  },
];

// ==============================
// 2. 主畫面組件 (Component)
// ==============================
export default function HomeScreen() {
  
  // --- 畫 Popular Books 卡片的函數 ---
  const renderPopularBook = ({item}) => {
    return (
      <View style={styles.bookCard}>
        <Image source={item.image} style={styles.bookImage} />
        <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
      </View>
    );
  };

  // --- 畫 Newest 卡片與星星的函數 ---
  const renderNewestBook = ({item}) => {
    // 準備畫星星的陣列
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
      <View style={styles.newestCard}>
        <Image source={item.image} style={styles.newestImage} />
        <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        {/* 顯示星星 */}
        <View style={styles.starsContainer}>
          {stars}
        </View>
      </View>
    );
  };

  // --- 畫面的主結構 ---
  return (
    <SafeAreaView style={styles.container}>
      
      {/* 頂部導覽列 */}
      <View style={styles.topbar}>
        <Image source={require('../assets/images/icon_menu.png')} style={{ width: 24, height: 24 }} />
        <Image source={require('../assets/images/icon_search.png')} style={{ width: 24, height: 24 }} />
      </View>

      {/* 內容滾動區塊 */}
      <ScrollView showsVerticalScrollIndicator={false}>
      
        {/* Popular Books 區塊 */}
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

        {/* Newest 區塊 */}
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

// ==============================
// 3. 樣式區 (Styles)
// ==============================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topbar: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0', // 給底線一點淺灰色，比較有質感
    justifyContent : 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    paddingLeft: 20,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold', // 為了保證在各裝置顯示正常，改用 'bold'
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 16,
    color: '#111111',
  },
  // Popular Books 卡片樣式
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
    width: 120,
  },
  newestImage: {
    width: 120,
    height: 180,
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