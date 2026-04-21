import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView style={styles.errorContainer}>
          <ScrollView contentContainerStyle={styles.errorContent}>
            <Text style={styles.errorTitle}>❌ App Crashed</Text>
            <Text style={styles.errorLabel}>Error:</Text>
            <Text style={styles.errorMessage}>
              {this.state.error?.toString() || 'Unknown error'}
            </Text>
            <Text style={styles.errorLabel}>Stack Trace:</Text>
            <Text style={styles.errorStack}>
              {this.state.errorInfo?.componentStack || 'No stack trace available'}
            </Text>
          </ScrollView>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

// Main App Component
function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.content}>
          <Text style={styles.title}>GigsCourt</Text>
          <Text style={styles.subtitle}>Diagnostic Mode</Text>
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
          <Text style={styles.success}>No JavaScript errors detected</Text>
          <Text style={styles.footer}>If you see this, the crash is native</Text>
        </View>
      </SafeAreaView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#e67e22',
    marginBottom: 40,
  },
  checkmark: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#27ae60',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  checkmarkText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  success: {
    fontSize: 16,
    color: '#27ae60',
    marginBottom: 20,
  },
  footer: {
    fontSize: 14,
    color: '#bdc3c7',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorContent: {
    padding: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 20,
  },
  errorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 15,
    marginBottom: 5,
  },
  errorMessage: {
    fontSize: 14,
    color: '#e74c3c',
    backgroundColor: '#fadbd8',
    padding: 10,
    borderRadius: 5,
  },
  errorStack: {
    fontSize: 12,
    color: '#7f8c8d',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
