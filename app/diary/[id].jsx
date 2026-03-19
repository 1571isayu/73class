import React, { useState } from 'react'; // ✅ 1. 這裡新增了 useState
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { PopularBooks, Newest } from '../index';

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const allBooks = [...PopularBooks, ...Newest];
  const bookInfo = allBooks.find(book => book.id === id);

  if (!bookInfo) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>找不到這本書喔！</Text>
      </SafeAreaView>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    const safeRating = rating || 4; 
    
    const filledIcon = bookInfo.star || require('../../assets/images/icon_star_filled.png');
    const emptyIcon = bookInfo.starempty || require('../../assets/images/icon_star_empty.png');

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image 
          key={i} 
          source={i <= safeRating ? filledIcon : emptyIcon} 
          style={styles.starIcon} 
        />
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> 

      <View style={styles.header}>

        <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
          <Image source={require('../../assets/images/icon_back.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.headerBtn}
          onPress={() => setIsBookmarked(!isBookmarked)} 
        >
          <Image 
            source={
              isBookmarked 
                ? require('../../assets/images/icon_bookmark_actived.png') 
                : require('../../assets/images/icon_bookmark.png') 
            } 
            style={[{ width: 24, height: 24 }, !isBookmarked && { tintColor: '#333333' }]} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.bookCoverShadow}>
          <Image source={bookInfo.image} style={styles.bookCover} />
        </View>

        <Text style={styles.bookTitle} numberOfLines={2}>{bookInfo.title}</Text>
        <Text style={styles.bookAuthor}>{bookInfo.author}</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.starsRow}>
            {renderStars(bookInfo.rating)}
          </View>
          <Text style={styles.ratingText}>
            <Text style={styles.ratingBold}>{bookInfo.rating ? bookInfo.rating.toFixed(1) : '4.0'}</Text> / 5.0
          </Text>
        </View>

        <Text style={styles.descriptionText}>
          {bookInfo.description || "A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion."}
        </Text>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>BUY NOW FOR {bookInfo.price || "$46.99"}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingTop: 8, 
    paddingBottom: 8, 
    backgroundColor: '#ffffff' 
  },
  headerBtn: { 
    padding: 4 
},
  headerIcon: { 
    width: 24, 
    height: 24, 
    tintColor: '#333333' 
},
  scrollContent: { 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingTop: 30, 
    paddingBottom: 40 
},
  bookCoverShadow: { 
    marginBottom: 20, 
    elevation: 8, 
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    borderRadius: 8 
},
  bookCover: { 
    width: 200, 
    height: 300, 
    borderRadius: 8 
},
  bookTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333333', 
    textAlign: 'center', 
    marginBottom: 8 
},
  bookAuthor: { 
    fontSize: 14, 
    color: '#666666', 
    textAlign: 'center', 
    marginBottom: 20 
},
  ratingContainer: { 
    alignItems: 'center', 
    marginBottom: 25 
},
  starsRow: { 
    flexDirection: 'row', 
    marginBottom: 4 
},
  starIcon: { 
    width: 20, 
    height: 20, 
    marginRight: 2 }
    ,
  ratingText: { 
    fontSize: 14, 
    color: '#666666' 
},
  ratingBold: { 
    fontWeight: 'bold', 
    color: '#333333' 
},
  descriptionText: { 
    fontSize: 14, color: '#666666', 
    textAlign: 'center', 
    lineHeight: 22, 
    marginBottom: 40 
},
  buyButton: { 
    backgroundColor: '#6200EE', 
    borderRadius: 8, 
    height: 56, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 4 
},
  buyButtonText: { 
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: 'bold', 
    letterSpacing: 0.5 
},
});