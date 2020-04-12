import React, { useEffect, useState } from 'react';
import { View, Text, ProgressBarAndroid } from 'react-native';
import { Post as IPost } from '../../types';
import { feed as feedApi, authors as authorsApi } from '../../feed';
import { FlatList } from 'react-native-gesture-handler';
import Post from '../../components/Post';
import Loading from '../../components/Loading';
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';

const FeedComponent: React.FC = () => {
  const [feed, setFeed] = useState<IPost[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const [one, two] = feedApi;

    setFeed([one, two]);
  }, []);

  const loadMorePostsHandler = async () => {
    setLoading(true);

    setTimeout(() => {
      let count = 0;

      feedApi.forEach((post, index) => {
        if (!(index < page * 5 && count < 5)) {
          feed?.push(post);
          count++;
        }
      });

      if (count <= 0) {
        return 0;
      }

      setPage(page + 1);
      setFeed(feed);
      setLoading(false);
    }, 5000);
  };

  const refreshFeed = async () => {
    setRefreshing(true);
    const [one, two, three] = feedApi;

    setFeed([one, two, three]);
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        onEndReached={loadMorePostsHandler}
        onRefresh={refreshFeed}
        refreshing={refreshing}
        onEndReachedThreshold={0.1} // RECEBE UM VALOR DE 0 ATÉ 1, onde é 100%, quando você rolar tal porcentagem o feed, ele vai carregar quando chegar até ela. Por exemplo, se eu rolar até 90%, quanod chegar a esse valor ele vai executar a função onReachedEnd
        ListFooterComponent={loading ? <Loading /> : null}
        data={feed}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Post
            author={authorsApi[Math.floor(Math.random() * 5)]}
            data={item}
          />
        )}
      />
      {loading && <ProgressBarAndroid />}
    </View>
  );
};

export default FeedComponent;
